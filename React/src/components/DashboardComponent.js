import React, { Component } from "react";
import AuthService from "../services/AuthService";

class DashComponent extends Component {
  constructor(props) {
    super(props);
  }
  dashboard = (e) => {
    this.props.history.push(`/dash`);
  };
  addStore = (e) => {
    this.props.history.push(`/addStore/_add`);
  };
  searchStore = (e) => {
    this.props.history.push(`/search`);
  };

  listStore = (e) => {
    this.props.history.push(`/list-stores`);
  };
  logOut() {
    AuthService.logout();
  }

  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };

    return (
      <div>
        <div
          class="d-flex justify-content-around p-5 text-center bg-image mask"
          style={mystyle}
        >
          <div
            style={{
              color: `white`,
              align: `center`,
              width: `40%`,
              height: `85%`,
              borderStyle: `groove`,
              borderRadius: `20px`,
              backgroundColor: `rgba(0, 0, 0,0.6)`,
            }}
          >
            <br />
            <h2>Welcome To The Dashboard</h2>
            <hr />
            <br />
            <div class="container" style={{ width: `50%` }}>
              <div className="row" style={{ padding: `5px` }}>
                <button className="btn btn-primary" onClick={this.addStore}>
                  Add a Store
                </button>
              </div>
              <br></br>

              <div className="row" style={{ padding: `5px` }}>
                <button className="btn btn-primary" onClick={this.listStore}>
                  List Stores
                </button>
              </div>
              <br></br>

              <div className="row" style={{ padding: `5px` }}>
                <button className="btn btn-primary" onClick={this.searchStore}>
                  Search Stores
                </button>
              </div>
              <br></br>

              <div className="row" style={{ padding: `5px` }}>
                <a
                  href="/login"
                  className="btn btn-danger"
                  onClick={this.logOut}
                >
                  Logout
                </a>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default DashComponent;
