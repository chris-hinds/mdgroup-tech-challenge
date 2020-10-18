import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "./store/Middleware/fetchData";
import { getData, getDataPending, getDataError } from "./store/Reducers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAction());
  }, []);

  // const dispatch = useDispatch({ type: "FETCH_DATA_PENDING" });

  const data = useSelector((state) => state.data);
  console.log(data);

  return (
    <div className="App">
      <h1>Doggy McDogface</h1>
    </div>
  );
};

export default App;
