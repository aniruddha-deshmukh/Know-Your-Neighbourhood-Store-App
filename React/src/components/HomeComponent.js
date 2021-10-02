import React, { Component } from "react";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <div class="p-5 text-center bg-image" style={mystyle}>
        <div class="d-flex justify-content-center align-items-center h-10">
          <div class="text-white">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 class="mb-3">Welcome To Know Your Neighbourhood</h1>
            <br />
            <a
              class="btn btn-outline-light btn-lg m-2"
              onClick={this.addUser}
              role="button"
            >
              Register
            </a>
            <a
              class="btn btn-outline-light btn-lg m-2"
              onClick={this.login}
              role="button"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeComponent;
