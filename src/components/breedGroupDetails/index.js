import React from "react";

// UI Elements
import { Box, Heading, Text } from "@chakra-ui/core";

const RenderSubBreeds = ({ data }) =>
  data.map((breed, index) => `${breed}${index <= data.length - 2 ? ", " : ""}`);

const BreedGroupDetails = ({ breedName, subBreeds }) => {
  return (
    <Box>
      <Heading
        as="h2"
        color="black"
        fontWeight="bold"
        textTransform="capitalize"
      >
        {breedName}
      </Heading>
      {subBreeds && (
        <Text color="brand">
          <RenderSubBreeds data={subBreeds} />
        </Text>
      )}
    </Box>
  );
};

export default BreedGroupDetails;
