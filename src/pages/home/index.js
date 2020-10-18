import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "../../store/Middleware/fetchAllData";
import { getData, getDataPending, getDataError } from "../../store/Reducers";

// Routing
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => getData(state));

  useEffect(() => {
    console.log(data);
    if (!data) {
      dispatch(
        fetchDataAction(
          `${process.env.REACT_APP_API_BASE_PATH}/breeds/list/all`
        )
      );
    }
  }, [data]);

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
