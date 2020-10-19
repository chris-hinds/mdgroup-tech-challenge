import React from "react";

// Routing
import { Link } from "react-router-dom";

// UI Elemets
import { Text } from "@chakra-ui/core";
import { isEmpty } from "rambda";

const RenderListItems = ({ data }) => {
  return Object.keys(data).map((value, index) => {
    return (
      <tr key={`${value}-${index}`}>
        <td style={{ width: "200px" }}>
          <Text style={{ textTransform: "capitalize" }}>{value}</Text>
        </td>
        <td>{data[value].breedGroup.length}</td>
        <td>
          <Link
            to={`/breed-group/${value}`}
            state={{ breedGroup: data[value] }}
          >
            <Text color="brand" textDecoration="underline">
              View
            </Text>
          </Link>
        </td>
      </tr>
    );
  });
};

const TableHead = () => (
  <thead style={{ borderBottom: "2px solid", textAlign: "left" }}>
    <tr>
      <th>
        <Text color="brand">Breed group</Text>
      </th>
      <th>
        <Text color="brand">Number of breeds</Text>
      </th>
      <th></th>
    </tr>
  </thead>
);

const BreedList = ({ breeds }) => {
  const hasBreeds = !isEmpty(breeds);
  return (
    <table>
      <TableHead />
      <tbody>{hasBreeds && <RenderListItems data={breeds} />}</tbody>
    </table>
  );
};

export default BreedList;
