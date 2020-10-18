import { fetchDataPending, fetchDataSuccess, fetchDataError } from "../Actions";

const validateResponse = async (response) => {
  const { status, statusText } = response;

  if (status >= 200 && status <= 299) {
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  throw new Error({
    message: "Received a non 200 status code",
    statusCode: status,
    statusText: statusText,
  });
};

const fetchData = async () => {
  return async (dispatch) => {
    // Update the store to indicate that data is being fetched
    dispatch(fetchDataPending());

    // Fetch data from api
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const json = await validateResponse(response);
      console.log(json);
      dispatch(fetchDataSuccess(json));
    } catch (error) {
      console.log(error);

      // Update the store to indicate an error during data fetch
      dispatch(fetchDataError(error));
    }
  };
};

export default fetchData;
