import React from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            value={displayName}
            required
            handleChange={this.handleChange}
            label="Display Name"
            name="displayName"
          />
          <FormInput
            type="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="Email"
            name="email"
          />

          <FormInput
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"
            name="password"
            type="password"
          />

          <FormInput
            value={confirmPassword}
            required
            handleChange={this.handleChange}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
