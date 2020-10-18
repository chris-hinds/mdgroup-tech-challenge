import axios from "axios";
import {
  fetchDataPending,
  fetchBreedImagesSuccess,
  fetchDataError,
} from "../Actions";

const fetchData = (url, id) => {
  return (dispatch) => {
    // Update the store to indicate that data is being fetched
    dispatch(fetchDataPending());

    // Fetch data from api
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        dispatch(fetchBreedImagesSuccess(data, id));
      })
      .catch((error) => {
        const { message } = error;
        dispatch(fetchDataError(message));
      });
  };
};

export default fetchData;
