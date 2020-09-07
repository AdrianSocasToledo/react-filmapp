import React from "react";
import MyProfileForm from "./MyProfileForm";

const MyProfilePage = ({ user, onUserData }) => {
  const handleUserData = (user) => {
    onUserData(user);
  };

  return (
    <div>
      <MyProfileForm user={user} onUserData={handleUserData}></MyProfileForm>
    </div>
  );
};

export default MyProfilePage;
