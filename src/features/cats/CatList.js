// write your CatList component here
import React from "react";

const CatList = ({ catPics = [] }) => {
  return (
    <>
      {catPics.map((pic) => (
        <img key={pic.id} src={pic.url} alt="cat" />
      ))}
    </>
  );
};

export default CatList;
