import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "../../store/Middleware/fetchData";
import { getData, getDataPending, getDataError } from "../../store/Reducers";

// Routing
import { useLocation, useParams } from "react-router-dom";

const BreedGroupPage = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    // dispatch(fetchDataAction("https://dog.ceo/api/breeds/list/all"));
  }, []);

  // const breedGroupData = useSelector((state) => state[id]);

  return (
    <div>
      <h2>Hello</h2>
      {JSON.stringify(location)}
    </div>
  );
};

export default BreedGroupPage;
