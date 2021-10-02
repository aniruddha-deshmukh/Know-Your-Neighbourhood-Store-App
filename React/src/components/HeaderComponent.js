import React, { Component } from "react";
import Logo from "../Logo.jpg";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md  navbar-dark bg-dark">
            <div>
              <a class="navbar-brand" href="/">
                <img
                  src={Logo}
                  alt="XYZ Logo"
                  style={{
                    width: "90px",
                    height: "60px",
                    padding: "5px",
                  }}
                />{" "}
              </a>
              <a href="/" className="navbar-brand" style={{ fontSize: "30px" }}>
                <b>Know Your Neighbourhood</b>
              </a>
              <div
                class="right"
                style={{ float: "right", marginLeft: "700px" }}
              >
                <a
                  class="btn btn-light btn-md m-2"
                  href="/contactus"
                  role="button"
                >
                  Contact Us
                </a>
                <a
                  class="btn btn-light btn-md m-2"
                  href="/aboutus"
                  role="button"
                >
                  About Us
                </a>
                <a class="btn btn-light btn-md m-2" href="/tnc" role="button">
                  T&C
                </a>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default HeaderComponent;
