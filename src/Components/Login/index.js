import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import createUser from "../../Services/createUser";
import getUserByEmail from "../../Services/getUserByEmail";

import { InputGroup, Tooltip, Button, Alignment } from "@blueprintjs/core";
import "./login.css";
import "../../App.css";

const Login = ({ onUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const firebase = useFirebaseApp();

  const submit = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(userName);
      createUser(email, userName);
    } catch {}
  };

  const signIn = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    getUserByEmail(email).then((user) => onUserData(user));
  };

  const handleLockClick = () => setShowPassword(!showPassword);

  const lockButton = (
    <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`}>
      <Button
        icon={showPassword ? "unlock" : "lock"}
        minimal={true}
        onClick={handleLockClick}
      />
    </Tooltip>
  );

  if (isLogin) {
    console.log("Login");
    return (
      <div className="loginContainer">
        <div className="login">
          <div className="loginForm">
            <h2>¡Bienvenido a FILM-APP!</h2>
            <InputGroup
              placeholder="Correo"
              type="text"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              large
              className="loginItem loginInput"
            />

            <InputGroup
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              rightElement={lockButton}
              large
              className="loginItem loginInput"
            />
          </div>
          <div className="loginFooter">
            <Button
              className="loginItem sessionButton"
              onClick={signIn}
              text="Iniciar Sesión"
              large
              alignText={Alignment.CENTER}
            />

            <Button
              className="loginItem sessionButton"
              onClick={() => setIsLogin(false)}
              text="Crear cuenta si aun no tienes"
              large
              alignText={Alignment.CENTER}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loginContainer">
        <div className="login">
          <div className="loginForm">
            <h2>¡Registrate en FILM-APP!</h2>
            <InputGroup
              placeholder="Correo"
              type="text"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              large
              className="loginItem loginInput"
            />

            <InputGroup
              placeholder="Nombre de usuario"
              type="text"
              onChange={(ev) => {
                setUserName(ev.target.value);
                console.log(ev.target.value);
              }}
              large
              className="loginItem loginInput"
            />

            <InputGroup
              placeholder="Contraseña"
              type={showPassword ? "text" : "password"}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              rightElement={lockButton}
              large
              className="loginItem loginInput"
            />
          </div>
          <div className="loginFooter">
            <Button
              className="loginItem sessionButton"
              onClick={() => setIsLogin(true)}
              text="Inicia sesión si ya tienes cuenta"
              large
              alignText={Alignment.CENTER}
            />

            <Button
              className="loginItem sessionButton"
              onClick={submit}
              text="Crear cuenta"
              large
              alignText={Alignment.CENTER}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
