import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "../../store/Middleware/fetchAllData";
import fetchBreedImages from "../../store/Middleware/fetchBreedImages";

import {
  getBreedGroup,
  getBreedImages,
  getDataPending,
  getDataError,
} from "../../store/Reducers";

// Routing
import { useLocation, useParams } from "react-router-dom";

const renderImages = (images) => images.map((image) => <img src={image} />);

const BreedGroupPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const breedImagesUrl = `${process.env.REACT_APP_API_BASE_PATH}/breed/${id}/images/random/3`;

  const breedGroupData = useSelector((state) => getBreedGroup(state, id));
  const breedGroupImages = useSelector((state) => getBreedImages(state, id));

  useEffect(() => {
    if (!breedGroupData) {
      dispatch(
        fetchDataAction(
          `${process.env.REACT_APP_API_BASE_PATH}/breeds/list/all`
        )
      );
    }
  }, []);

  useEffect(() => {
    // Only fetch images on render if data doesnt already exist
    if (!breedGroupImages) {
      dispatch(fetchBreedImages(breedImagesUrl, id));
    }
  }, [breedGroupData]);

  return (
    <div>
      <h2>{id}</h2>
      <h3>
        {breedGroupData &&
          breedGroupData.breedGroup.map((breed) => <span>{breed}</span>)}
      </h3>
      <button onClick={() => dispatch(fetchBreedImages(breedImagesUrl, id))}>
        Refresh Images
      </button>
      {JSON.stringify(breedGroupImages)}
      {breedGroupImages && renderImages(breedGroupImages)}
    </div>
  );
};

export default BreedGroupPage;
