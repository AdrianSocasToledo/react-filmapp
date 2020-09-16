import React from "react";

import FilmLibraryItem from "./FilmLibraryItem";
import { Button } from "@blueprintjs/core";
import deleteAllFilms from "../../Services/deleteAllFilms";
import getUserByEmail from "../../Services/getUserByEmail";
import { useUser } from "reactfire";
import "./MyFilmLibraryPage.css";

const MyFilmLibraryPage = ({ filmLibrary = [], onUserData }) => {
  const user = useUser();

  const handleUserData = (user) => {
    onUserData(user);
  };

  const deleteFilms = async () => {
    await deleteAllFilms(user.email);
    const us = await getUserByEmail(user.email);
    onUserData(us);
  };

  return (
    <div>
      <div className="flp-head">
        <h2>Películas en lista: {filmLibrary.length}</h2>
        <div className="flp-button">
          <Button
            type="button"
            large
            text="Borrar lista de peliculas"
            intent="danger"
            onClick={deleteFilms}
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
