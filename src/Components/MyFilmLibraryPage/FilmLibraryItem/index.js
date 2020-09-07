import React from "react";
import FilmItem from "../FilmItem";
import { Button } from "@blueprintjs/core";
import "./FilmLibraryItem.css";
const FilmLibraryItem = ({ filmLibrary }) => {
  return (
    <div>
      {filmLibrary.map((film) => (
        <div className="filmLibraryItem">
          <FilmItem film={film}></FilmItem>
          <Button text="Eliminar" />
        </div>
      ))}
    </div>
  );
};

export default FilmLibraryItem;
