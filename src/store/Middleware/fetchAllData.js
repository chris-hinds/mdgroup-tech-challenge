import axios from "axios";
import { fetchDataPending, fetchDataSuccess, fetchDataError } from "../Actions";

const fetchData = (url) => {
  return (dispatch) => {
    // Update the store to indicate that data is being fetched
    dispatch(fetchDataPending());

    // Fetch data from api
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        const { message } = error;
        dispatch(fetchDataError(message));
      });
  };
};

export default fetchData;
