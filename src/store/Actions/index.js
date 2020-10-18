const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
const FETCH_BREED_IMAGES_SUCCESS = "FETCH_BREED_IMAGES_SUCCESS";

// Action Creators
const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  error,
});

const fetchBreedImagesSuccess = (data, id) => ({
  type: FETCH_BREED_IMAGES_SUCCESS,
  id,
  data,
});

export {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_BREED_IMAGES_SUCCESS,
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
  fetchBreedImagesSuccess,
};
