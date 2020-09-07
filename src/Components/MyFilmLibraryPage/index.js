import React from "react";

import FilmLibraryItem from "./FilmLibraryItem";

const MyFilmLibraryPage = ({ filmLibrary = [] }) => {
  return (
    <div>
      <h2>Películas en lista: {filmLibrary.length}</h2>
      <FilmLibraryItem filmLibrary={filmLibrary}></FilmLibraryItem>
    </div>
  );
};

export default MyFilmLibraryPage;
