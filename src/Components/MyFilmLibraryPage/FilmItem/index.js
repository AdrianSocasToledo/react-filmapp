import React from "react";

import "./filmItem.css";

const FilmItem = ({ film }) => {
  return (
    <div>
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
        </ul>
      </div>
    </div>
  );
};

export default FilmItem;
