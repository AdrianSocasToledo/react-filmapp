import React from "react";

import FilmLibraryItem from "./FilmLibraryItem";
import { Button } from "@blueprintjs/core";
import "./MyFilmLibraryPage.css";

const MyFilmLibraryPage = ({ filmLibrary = [], onUserData }) => {
  const handleUserData = (user) => {
    onUserData(user);
  };

  return (
    <div>
      <div className="flp-head">
        <h2>Películas en lista: {filmLibrary.length}</h2>
        <div>
          <Button
            type="button"
            large
            text="Borrar lista de peliculas"
            intent="danger"
          />
        </div>
      </div>
      <div>
        <FilmLibraryItem
          filmLibrary={filmLibrary}
          onUserData={handleUserData}
        />
      </div>
    </div>
  );
};

export default MyFilmLibraryPage;
