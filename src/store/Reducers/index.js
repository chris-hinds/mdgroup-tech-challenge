import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../Actions";

const initialState = {
  pending: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        data: data.message,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        pending: false,
        error,
      };
    default:
      return state;
  }
};

// Selectors
export const getData = (state) => state.data;
export const getDataPending = (state) => state.pending;
export const getDataError = (state) => state.error;

export default reducer;
