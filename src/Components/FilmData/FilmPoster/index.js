import React from "react";

const FilmPoster = ({ film }) => {
  return (
    <div>
      <img src={film.Poster}></img>
    </div>
  );
};

export default FilmPoster;
