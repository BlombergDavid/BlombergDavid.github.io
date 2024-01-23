import React from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";

const GoogleSignInButton = () => {
  const { user } = UserAuth();
  const { googleSignIn } = UserAuth(); // This should be invoked with useContext
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!user?.email && !user?.emailVerified && (
        <GoogleButton onClick={handleGoogleSignIn} type="light" style={{ margin: "auto" }}/>
      )}
    </>
  );
};

export default GoogleSignInButton;
