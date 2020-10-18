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
    // Onlt fetch all breed data if it doesnt already exist e.g. on a page refresh. We could implement persistent storage to get around this issue
    if (!data) {
      dispatch(
        fetchDataAction(
          `${process.env.REACT_APP_API_BASE_PATH}/breeds/list/all`
        )
      );
    }
  }, []);

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
              No of breeds in group: {data[value].breedGroup.length}
            </li>
          );
        })}
    </div>
  );
};

export default HomePage;
