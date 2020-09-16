import React, { useState } from "react";
import { Button, Collapse } from "@blueprintjs/core";
import FilmData from "../../FilmData";
import "./filmItem.css";

const FilmItem = ({ film }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fi-container">
      <div className="filmItem">
        <ul>
          <li className="fi-li">
            <label className="fi-label">Titulo: </label>
            <div>{film.Title}</div>
          </li>
          <li className="fi-li">
            <label className="fi-label">Año: </label> {film.Year}
          </li>
          <li className="fi-li">
            <label className="fi-label">Pais: </label>
            <div>{film.Country}</div>
          </li>
          <li className="fi-li">
            <label className="fi-label">Duración: </label>
            {film.Runtime}
          </li>
          <li className="fi-li">
            <label className="fi-label">Calificación: </label> {film.imdbRating}
          </li>
          <li className="fi-li">
            <Button
              onClick={handleCollapse}
              text={isOpen ? "Ver menos" : "Ver más"}
            />
          </li>
        </ul>
      </div>
      <Collapse isOpen={isOpen}>
        <FilmData film={film}></FilmData>
      </Collapse>
    </div>
  );
};

export default FilmItem;
