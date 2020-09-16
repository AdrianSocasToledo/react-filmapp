import React from "react";

import FilmPoster from "./FilmPoster";
import FilmInfo from "./FilmInfo";
import "./FilmData.css";

const FilmData = ({ film }) => {
  return (
    <div className="filmData">
      <FilmPoster film={film}></FilmPoster>
      <FilmInfo film={film}></FilmInfo>
    </div>
  );
};

export default FilmData;
