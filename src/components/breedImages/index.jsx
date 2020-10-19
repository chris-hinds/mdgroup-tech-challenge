import React from "react";

// UI Elements
import { Box, SimpleGrid } from "@chakra-ui/core";

// Components
import Image from "../image";

const RenderImageGrid = ({ images, altText }) => {
  return images.map((image) => (
    <Box>
      <Image src={image} alt={altText} />
    </Box>
  ));
};

const BreedImages = ({ images, breedName }) => (
  <SimpleGrid columns={["1", "1", "3"]} spacing="10">
    <RenderImageGrid images={images} altText={breedName} />
  </SimpleGrid>
);

export default BreedImages;
