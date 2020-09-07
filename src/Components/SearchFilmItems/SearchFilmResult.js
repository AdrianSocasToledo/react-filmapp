import React, { useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Position, Toaster } from "@blueprintjs/core";
import { useUser } from "reactfire";

import "./SearchFilmResultStyles.css";

import getFilm from "../../Services/getFilm";
import saveFilm from "../../Services/saveFilm";
import getUserByEmail from "../../Services/getUserByEmail";

import FilmPoster from "./FilmPoster/FilmPoster";
import FilmInfo from "./FilmInfo/FilmInfo";

const SearchFilmResult = ({ film, onUserData }) => {
  const [result, setResult] = useState({});
  const user = useUser();

  useEffect(() => {
    getFilm(film).then((result) => setResult(result));
  }, [film]);

  const saveFilmResult = async () => {
    await saveFilm(result, user.email);
    const userData = await getUserByEmail(user.email);
    onUserData(userData);
    showToast();
  };

  const showToast = async () => {
    //TODO change static toast use for component usage.
    const AppToaster = Toaster.create({
      className: "recipe-toaster",
      position: Position.TOP,
    });
    AppToaster.show({ message: "Pelicula Guardada Correctamente" });
  };

  //TODO check if result is empty.
  return (
    <div className="resultContainer">
      <div>
        <FilmPoster url={result.Poster}></FilmPoster>
        <Button
          rightIcon={IconNames.SAVED}
          text="Guardar"
          onClick={saveFilmResult}
          intent="warning"
          large
        ></Button>
      </div>
      <FilmInfo film={result} fill="true"></FilmInfo>
    </div>
  );
};

export default SearchFilmResult;
