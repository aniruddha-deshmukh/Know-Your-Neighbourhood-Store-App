import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import AuthService from "../services/AuthService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      userName: "",
      userPassword: "",
      error_message: "",
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
  loginUser = (e) => {
    e.preventDefault();
    console.log("this is login method");
    let users = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };

    AuthService.login(users).then(
      () => {
        this.props.history.push("/dash");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          errorMessage: resMessage,
        });
      }
    );
  };

  cancel = (e) => {
    this.props.history.push("/");
  };

  facebookResponse = (response) => {
    localStorage.setItem("user", JSON.stringify(response));
    this.setState({ ...this.state, user: response });
    this.props.history.push("/fbdash");
  };

  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };

    const LoginButton = ({ facebookResponse }) => (
      <FacebookLogin
        appId="507501003824778"
        appSecret="a4bc04fcd9f5862f338958b7756cc220"
        // autoLoad
        fields="name,email,picture"
        callback={facebookResponse}
      />
    );

    return (
      <div
        class="d-flex p-5 justify-content-center text-center bg-image"
        style={mystyle}
      >
        <div
          class="d-flex justify-content-center mask"
          style={{
            height: `90%`,
            width: `25%`,
            borderStyle: `groove`,
            borderRadius: `20px`,
            backgroundColor: `rgba(0, 0, 0,0.5)`,
          }}
        >
          <form style={{ align: `center`, width: `65%`, color: "white" }}>
            <div className="form-group">
              {this.state.error_message && (
                <div className="alert alert-danger" role="alert">
                  {this.state.error_message}
                </div>
              )}
            </div>
            <br />
            <h3>Sign In</h3>
            <hr />
            <div className="form-group">
              <b>
                <label style={{ padding: `5px` }}>Username:</label>
              </b>
              <input
                type="text"
                name="userName"
                className="form-control mt-1"
                placeholder="Enter Username"
                onChange={this.changeUserNameHandler}
              />
            </div>
            <br />
            <div className="form-group">
              <b>
                <label style={{ padding: `5px` }}>Password:</label>
              </b>
              <input
                type="password"
                name="userPassword"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={this.changeUserPasswordHandler}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.loginUser}
            >
              Submit
            </button>

            <div style={{ marginTop: "5%", opacity: "1" }}>
              {this.state.user == false && (
                <LoginButton facebookResponse={this.facebookResponse} />
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginComponent;
