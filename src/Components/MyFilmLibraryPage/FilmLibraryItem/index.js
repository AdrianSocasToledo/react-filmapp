import React from "react";
import FilmItem from "../FilmItem";
import { Button } from "@blueprintjs/core";
import deleteFilm from "../../../Services/deleteFilm";
import "./FilmLibraryItem.css";
import { useUser } from "reactfire";
import getUserByEmail from "../../../Services/getUserByEmail";

const FilmLibraryItem = ({ filmLibrary, onUserData }) => {
  const user = useUser();

  async function deleteFilmByIndex(pos) {
    await deleteFilm(pos, user.email);
    const userData = await getUserByEmail(user.email);
    onUserData(userData);
  }

  return (
    <div>
      {filmLibrary.map((film, index) => (
        <div className="filmLibraryItem">
          <FilmItem film={film}></FilmItem>
          <Button
            text="Eliminar"
            value={index}
            onClick={(e) => {
              deleteFilmByIndex(e.currentTarget.value);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FilmLibraryItem;
