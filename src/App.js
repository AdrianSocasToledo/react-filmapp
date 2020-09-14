import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useFirebaseApp, useUser } from "reactfire";

import SearchFilmPage from "./Components/SearchFilmPage";
import MyFilmLibraryPage from "./Components/MyFilmLibraryPage";
import MyProfilePage from "./Components/MyProfilPage";
import Login from "./Components/Login";
import getUserByEmail from "./Services/getUserByEmail";

import { Button } from "@blueprintjs/core";
import "./App.css";

function App() {
  const firebase = useFirebaseApp();
  const user = useUser();
  const [userData, setUserData] = useState({ userName: "" });

  const logOut = async () => {
    await firebase.auth().signOut();
  };

  useEffect(() => {
    if (user) getUserByEmail(user.email).then((user) => setUserData(user));
  }, [user]);

  const handleUserData = (userData) => {
    setUserData(userData);
  };

  if (user) {
    return (
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/SearchFilm" className="link">
                Buscar
              </Link>
            </li>
            <li>
              <Link to="/MyFilmLibrary" className="link">
                Mi Filmoteca
              </Link>
            </li>
            <li>
              <Link to="/MyProfile" className="link">
                Mi Perfil
              </Link>
            </li>
            <div className="userInfo">
              <li>
                <label>{userData.userName}</label>
              </li>
              <li>
                <Button
                  onClick={logOut}
                  className="sessionButton"
                  text="Cerrar Sesión"
                  large
                />
              </li>
            </div>
          </ul>
        </nav>
        <Switch>
          <Route path="/SearchFilm">
            <SearchFilmPage
              onUserData={handleUserData}
              filmLibrary={userData.filmLibrary}
            />
          </Route>
          <Route path="/MyFilmLibrary">
            <MyFilmLibraryPage
              filmLibrary={userData.filmLibrary}
              onUserData={handleUserData}
            />
          </Route>
          <Route path="/MyProfile">
            <MyProfilePage user={userData} onUserData={handleUserData} />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <Login onUserData={handleUserData}></Login>;
  }
}

export default App;
