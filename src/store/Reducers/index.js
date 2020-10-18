// Redux
import { createReducer } from "@reduxjs/toolkit";

import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  FETCH_BREED_IMAGES_SUCCESS,
} from "../Actions";

// Utils
const R = require("rambda");

const initialState = {
  pending: false,
  data: null,
  error: null,
};

const reducer = createReducer(initialState, {
  FETCH_DATA_PENDING: (state) => {
    return {
      ...state,
      pending: true,
    };
  },

  FETCH_DATA_SUCCESS: (state, action) => {
    const { data } = action;

    // This is pretty grose!, The API returns an onject with nested key value pairs. To make it easier to add data later,
    // I tranform the key values pairs into objects that hold the breed group and any other potential data such as greed images
    Object.keys(data.message).map((value) => {
      const breed = {
        images: null,
        breedGroup: data.message[value],
      };
      data.message[value] = breed;
    });

    return {
      ...state,
      pending: false,
      data: data.message,
    };
  },

  FETCH_DATA_ERROR: (state, action) => {
    const { error } = action;
    return {
      ...state,
      pending: false,
      error,
    };
  },

  FETCH_BREED_IMAGES_SUCCESS: (state, action) => {
    const { data, id } = action;

    const breedGroup = state.data[id];
    breedGroup.images = data.message;
  },
});

// Selectors
export const getData = (state) => state.data;
export const getBreedGroup = (state, id) => state.data[id];
export const getBreedImages = (state, id) =>
  R.path(["data", id, "images"], state);
export const getDataPending = (state) => state.pending;
export const getDataError = (state) => state.error;

export default reducer;
