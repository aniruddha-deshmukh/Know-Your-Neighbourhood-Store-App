import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ViewStoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Store: {},
      storeid: this.props.match.params.storeid,
    };
  }
  dashboard = (e) => {
    this.props.history.push(`/dash`);
  };
  viewStore(storeid) {
    this.props.history.push(`/view-store/${storeid}`);
  }
  componentDidMount() {
    StoreService.viewStore(this.state.storeid).then((res) => {
      console.log("response data from backend " + JSON.stringify(res.data));
      this.setState({ Store: res.data });
    });
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
          class="d-flex justify-content-center p-5 text-center bg-image mask"
          style={mystyle}
        >
          <div
            style={{
              fontSize: `20px`,
              color: `white`,
              align: `center`,
              width: `25%`,
              borderStyle: `groove`,
              borderRadius: `20px`,
              backgroundColor: `rgba(0, 0, 0,0.6)`,
            }}
          >
            <br></br>
            <div className="container">
              <h3 className="text-center"> Store Details</h3>
              <hr />
              <br />
              <div className="stored-body">
                <div className="row">
                  <b>
                    <label> Store Id: </label>
                  </b>
                  <div>{this.state.Store.storeid}</div>
                </div>
                <div className="row">
                  <b>
                    {" "}
                    <label> Store Name: </label>
                  </b>
                  <div>{this.state.Store.storeName}</div>
                </div>
                <div className="row">
                  <b>
                    <label>Store Number:</label>
                  </b>
                  <div>{this.state.Store.storeNumber}</div>
                </div>
                <div className="row">
                  <b>
                    <label>Store Location:</label>
                  </b>
                  <div>{this.state.Store.storeLocation}</div>
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.dashboard}
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewStoreComponent;
