import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ inputArray }) => {
  const tileList = inputArray.map((inputObj) => {
    const { name, ...description } = inputObj;
    return <Tile key={name} name={name} description={description} />;
  });
  return <div>{tileList}</div>;
};
