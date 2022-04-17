import React from "react";

const ShowImage = ({ imgPath, name }) => {
  return (
    <div className="flex items-center w-full border-dashed my-1">
      <div className="flex flex-1 items-center">
        <img src={imgPath} alt="image" />
        <div className="h-full flex items-center justify-start">{name}</div>
      </div>
    </div>
  );
};

export default ShowImage;
