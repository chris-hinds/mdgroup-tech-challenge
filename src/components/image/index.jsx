import React from "react";

// UI Elements
import { Image } from "@chakra-ui/core";

const ImageWrapper = ({ src, altText }) => (
  <Image
    size="280px"
    objectFit="cover"
    src={src}
    alt={altText}
    fallbackSrc="https://via.placeholder.com/280"
  />
);

export default ImageWrapper;
