import React, { useState } from "react";

import updateUserName from "../../../Services/updateUserName";
import getUserByEmail from "../../../Services/getUserByEmail";

import { InputGroup, Button, Alignment } from "@blueprintjs/core";
import "./MyProfileForm.css";

const MyProfileForm = ({ user, onUserData }) => {
  const email = user.email;
  const [userName, setuserName] = useState(user.userName);

  //TODO updateUserName function
  const updateUserNameOnMyProfile = async () => {
    updateUserName(email, userName);
    const userData = await getUserByEmail(email);
    onUserData(userData);
  };

  return (
    <div>
      <div className="MyProfileForm">
        <div className="mpf-title">
          Perfil de usuario:<div className="mpf-userName">{user.userName}</div>
        </div>
        <div>
          <div className="mpf-item">¿Desea cambiar el nombre de usuario?</div>
          <InputGroup
            placeholder="Nombre de usuario"
            type="text"
            onChange={(ev) => {
              setuserName(ev.target.value);
            }}
            className="mpf-item"
          />
          <Button
            onClick={updateUserNameOnMyProfile}
            text="Guardar Cambios"
            alignText={Alignment.CENTER}
            className="mpf-item"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfileForm;
