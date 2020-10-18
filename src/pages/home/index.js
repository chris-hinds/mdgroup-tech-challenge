import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "../../store/Middleware/fetchData";
import { getData, getDataPending, getDataError } from "../../store/Reducers";

// Routing
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction("https://dog.ceo/api/breeds/list/all"));
  }, []);

  const data = useSelector((state) => getData(state));

  return (
    <div>
      {data &&
        Object.keys(data).map((value) => {
          return (
            <li>
              <Link
                to={`/breed-group/${value}`}
                state={{ breedGroup: data[value] }}
              >
                {value}
              </Link>
              {JSON.stringify(data[value])}
            </li>
          );
        })}
    </div>
  );
};

export default HomePage;
