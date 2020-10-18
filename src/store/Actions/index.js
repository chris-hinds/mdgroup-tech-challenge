const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

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

export {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  fetchDataPending,
  fetchDataSuccess,
  fetchDataError,
};
