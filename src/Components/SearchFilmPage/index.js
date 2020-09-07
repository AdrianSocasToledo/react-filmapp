import React, { useState } from "react";
import SearchFilmResult from "../SearchFilmItems/SearchFilmResult";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "../../App.css";
import "./searchFilmPageStyles.css";

const SearchFilmPage = ({ onUserData }) => {
  const [film, setFilm] = useState("");

  const handleKeyPress = (e) => {
    const { key } = e;
    if (key === "Enter") setFilm(e.target.value);
  };

  const handleUserData = (user) => {
    onUserData(user);
  };

  return (
    <div className="container">
      <div class="bp3-input-group searchBox">
        <span class="bp3-icon bp3-icon-search"></span>
        <input
          class="bp3-input .bp3-large"
          type="search"
          placeholder="Búsqueda"
          dir="auto"
          onKeyPress={handleKeyPress}
        />
      </div>

      {!!film.length && (
        <SearchFilmResult
          film={film}
          onUserData={handleUserData}
        ></SearchFilmResult>
      )}
    </div>
  );
};

export default SearchFilmPage;
