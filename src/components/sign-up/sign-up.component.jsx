import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    signUpStart({
      displayName,
      email,
      password,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          value={displayName}
          required
          handleChange={handleChange}
          label="Display Name"
          name="displayName"
        />
        <FormInput
          type="email"
          value={email}
          required
          handleChange={handleChange}
          label="Email"
          name="email"
        />

        <FormInput
          value={password}
          required
          handleChange={handleChange}
          label="Password"
          name="password"
          type="password"
        />

        <FormInput
          value={confirmPassword}
          required
          handleChange={handleChange}
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
