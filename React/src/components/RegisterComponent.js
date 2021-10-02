import React, { Component } from "react";
// import UserService from '../services/UserService';
import AuthService from "../services/AuthService";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  addUser = (e) => {
    this.props.history.push(`/register`);
  };
  login = (e) => {
    this.props.history.push(`/login`);
  };
  home = (e) => {
    this.props.history.push(`/`);
  };
  changeUserNameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  };
  changeUserPasswordHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ userPassword: event.target.value });
  };
  changeFirstNameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };
  saveUser = (e) => {
    e.preventDefault();
    console.log("this is save method");
    let users = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    AuthService.createUser(users).then((res) => {
      console.log("create component" + JSON.stringify(res.data));
      this.props.history.push("/login");
    });
  };
  cancel = (e) => {
    this.props.history.push("/");
  };

  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };

    return (
      <div
        class="d-flex justify-content-center p-6 text-center bg-image"
        style={mystyle}
      >
        <div
          class="d-flex justify-content-center mask"
          style={{
            color: `white`,
            align: `center`,
            width: `30%`,
            borderStyle: `groove`,
            borderRadius: `20px`,
            backgroundColor: `rgba(0, 0, 0,0.5)`,
          }}
        >
          <form style={{ width: `80%`, align: `center`, color: "white" }}>
            <br />
            <h3>Sign Up</h3>
            <hr />
            <div>
              <label style={{ padding: `5px` }}> First Name : </label>
              <input
                placeholder="First Name"
                name="firstName"
                className="form-control  mt-1"
                onChange={this.changeFirstNameHandler}
              />
            </div>
            <div>
              <label style={{ padding: `5px` }}> Last Name : </label>
              <input
                placeholder="Last Name"
                name="lastName"
                className="form-control  mt-1"
                onChange={this.changeLastNameHandler}
              />
            </div>
            <div>
              <label style={{ padding: `5px` }}> Email : </label>
              <input
                placeholder="Enter Email"
                name="email"
                className="form-control  mt-1"
                onChange={this.changeEmailHandler}
              />
            </div>
            <div>
              <label style={{ padding: `5px` }}> User Name : </label>
              <input
                placeholder="Enter Username"
                name="userName"
                className="form-control  mt-1"
                onChange={this.changeUserNameHandler}
              />
            </div>
            <div>
              <label style={{ padding: `5px` }}> Password : </label>
              <input
                placeholder="Enter Password"
                name="userPassword"
                className="form-control  mt-1"
                onChange={this.changeUserPasswordHandler}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.saveUser}
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              <br />
              Already registered?{" "}
              <a href="/login">
                <b>Sign in</b>
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
