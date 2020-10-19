import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import fetchDataAction from "../../store/Middleware/fetchAllData";
import fetchBreedImages from "../../store/Middleware/fetchBreedImages";

import {
  getBreedGroup,
  getBreedImages,
  getSubBreeds,
} from "../../store/Reducers";

// Routing
import { useNavigate, useParams } from "react-router-dom";

// Components
import BreedGroupDetails from "../../components/breedGroupDetails";
import BreedImages from "../../components/breedImages";

// UI Elements
import { Box, Flex, Button } from "@chakra-ui/core";

const BreedGroupPage = () => {
  const dispatch = useDispatch();

  // Route parameters
  const { id } = useParams();
  const navigate = useNavigate();

  // Construct API path for getting breed images
  const breedImagesUrl = `${process.env.REACT_APP_API_BASE_PATH}/breed/${id}/images/random/3`;

  // Data selectors
  const breedGroupData = useSelector((state) => getBreedGroup(state, id));
  const subBreeds = useSelector((state) => getSubBreeds(state, id));
  const breedGroupImages = useSelector((state) => getBreedImages(state, id));

  // Fetch list of all breeds if data is not in the store i.e. you landed on this page before the main page
  useEffect(() => {
    if (!breedGroupData) {
      dispatch(
        fetchDataAction(
          `${process.env.REACT_APP_API_BASE_PATH}/breeds/list/all`
        )
      );
    }
  }, [breedGroupData, dispatch]);

  // Only fetch images on render if data doesnt already exist
  useEffect(() => {
    if (!breedGroupImages) {
      dispatch(fetchBreedImages(breedImagesUrl, id));
    }
  }, [breedGroupData]);

  return (
    <>
      <Box mb="10">
        <Flex flexDirection={["column", "row"]} justify="space-between">
          <BreedGroupDetails breedName={id} subBreeds={subBreeds} />

          <Flex align="flex-end">
            <Button
              rounded="2px"
              color="white"
              backgroundColor="brand"
              height="40px"
              paddingX="8"
              onClick={() => dispatch(fetchBreedImages(breedImagesUrl, id))}
            >
              Change Images
            </Button>
          </Flex>
        </Flex>
      </Box>

      {breedGroupImages && (
        <Box mb={["4", "8"]}>
          <BreedImages images={breedGroupImages} breedName={id} />
        </Box>
      )}

      <Button
        rounded="2px"
        color="brand"
        variant="outline"
        borderColor="brand"
        leftIcon="chevron-left"
        height="40px"
        paddingX="8"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </>
  );
};

export default BreedGroupPage;
