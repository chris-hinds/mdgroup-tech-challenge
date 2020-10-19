import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "../../store/Middleware/fetchAllData";
import { getData, getDataPending, getDataError } from "../../store/Reducers";

// Components
import BreedList from "../../components/breedList";

// UI Elements
import { Spinner } from "@chakra-ui/core";

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => getDataPending(state));
  const error = useSelector((state) => getDataError(state));
  const data = useSelector((state) => getData(state));

  useEffect(() => {
    // Only fetch all breed data if it doesnt already exist e.g. on a page refresh. We could implement persistent storage to get around this issue
    if (!data) {
      dispatch(
        fetchDataAction(
          `${process.env.REACT_APP_API_BASE_PATH}/breeds/list/all`
        )
      );
    }
  }, [data, dispatch]);

  return (
    <>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand"
          size="xl"
        />
      )}
      {error && <h3>{error}</h3>}
      {data && <BreedList breeds={data} />}
    </>
  );
};

export default HomePage;
