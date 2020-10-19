import React from "react";

// Routing
import { Link } from "react-router-dom";

// UI Elements
import { Box, Heading } from "@chakra-ui/core";

const Layout = ({ children }) => {
  return (
    <Box w="100%" maxW="1080px" px={["4", "16", "20"]} mt={["4", "16", "30"]}>
      <header>
        <Box mb={["4", "16", "30"]}>
          <Link to="/">
            <Heading as="h1" color="brand">
              Doggy McDogface
            </Heading>
          </Link>
        </Box>
      </header>

      <main>{children}</main>
    </Box>
  );
};

export default Layout;
