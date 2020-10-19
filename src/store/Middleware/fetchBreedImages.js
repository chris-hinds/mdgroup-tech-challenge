import axios from "axios";
import {
  fetchDataPending,
  fetchBreedImagesSuccess,
  fetchDataError,
} from "../Actions";

const fetchData = (url, id) => {
  return (dispatch) => {
    // Update the store to indicate that data is being fetched
    // Note: This should really use its own data fetching action instead of the fetchData action as this sets the loading state to true for the entire app and not just the images
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
