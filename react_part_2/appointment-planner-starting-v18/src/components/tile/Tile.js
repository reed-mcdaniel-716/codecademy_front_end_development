import React from "react";

export const Tile = ({ name, description }) => {
  const descriptionElems = [];

  for (const key in description) {
    let newElem;
    if (typeof description[key] !== "object") {
      newElem = (
        <p key={`${key}_${description[key]}`} className='tile'>
          {description[key]}
        </p>
      );
    } else {
      newElem = (
        <p key={`${key}_${description[key].name}`} className='tile'>
          {JSON.stringify(description[key])}
        </p>
      );
    }
    descriptionElems.push(newElem);
  }
  return (
    <div className='tile-container'>
      <p className='tile-title'>{name}</p>
      {descriptionElems}
    </div>
  );
};
