import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "./store/Middleware/fetchData";
import { getData, getDataPending, getDataError } from "./store/Reducers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction("https://dog.ceo/api/breeds/list/all"));
  }, []);

  const data = useSelector((state) => getData(state));

  return (
    <div className="App">
      <h1>Doggy McDogface</h1>
      <div>
        {data &&
          Object.keys(data).map((value) => {
            return <li>{value}</li>;
          })}
      </div>
    </div>
  );
};

export default App;
