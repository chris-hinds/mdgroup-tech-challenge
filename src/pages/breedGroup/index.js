import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
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

  const breedGroupData = useSelector((state) => getBreedGroup(state, id));
  const breedGroupImages = useSelector((state) => getBreedImages(state, id));

  useEffect(() => {
    console.log("---------------" + breedGroupImages);
    if (!breedGroupImages) {
      console.log("fetching images");
      dispatch(
        fetchBreedImages(`https://dog.ceo/api/breed/${id}/images/random/3`, id)
      );
    }
  }, [breedGroupData]);

  return (
    <div>
      <h2>{id}</h2>
      {breedGroupImages && renderImages(breedGroupImages)}
    </div>
  );
};

export default BreedGroupPage;
