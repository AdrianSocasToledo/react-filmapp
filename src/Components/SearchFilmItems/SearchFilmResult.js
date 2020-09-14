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

const SearchFilmResult = ({ film, filmLibrary, onUserData }) => {
  const [result, setResult] = useState({});
  const user = useUser();

  useEffect(() => {
    const load = () => {
      getFilm(film).then((result) => {
        setResult(result);
      });
    };
    load();
  }, [film]);

  const checkFilm = (title) => {
    if (filmLibrary.length) {
      let exist = filmLibrary.map((film) => film.Title).indexOf(title);

      if (exist >= 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const saveFilmResult = async () => {
    await saveFilm(result, user.email);
    const userData = await getUserByEmail(user.email);
    await onUserData(userData);
    showToast();
  };

  const showToast = async () => {
    const AppToaster = Toaster.create({
      className: "recipe-toaster",
      position: Position.TOP,
    });
    AppToaster.show({ message: "Pelicula Guardada Correctamente" });
  };

  const check = result && checkFilm(result.Title);

  return (
    <div className="resultContainer">
      <div>
        <FilmPoster url={result.Poster}></FilmPoster>
        <Button
          rightIcon={IconNames.SAVED}
          text="Guardar"
          onClick={saveFilmResult}
          intent="warning"
          disabled={check}
          large
        ></Button>
      </div>
      <FilmInfo film={result} fill="true"></FilmInfo>
    </div>
  );
};

export default SearchFilmResult;
