import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => {
  return (
    <div className="signin-and-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
