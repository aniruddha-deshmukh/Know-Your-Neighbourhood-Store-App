import React, { Component } from "react";
import StoreService from "../services/StoreService";

class AddStoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeid: this.props.match.params.storeid,
      sName: "",
      sNumber: "",
      sLocation: "",
    };
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
  changeStoreNameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ sName: event.target.value });
  };
  changeStoreNumberHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ sNumber: event.target.value });
  };
  changeStoreLocationHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ sLocation: event.target.value });
  };

  saveOrUpdateStore = (e) => {
    e.preventDefault();
    console.log("this is save method");

    let store = {
      storeName: this.state.sName,
      storeNumber: this.state.sNumber,
      storeLocation: this.state.sLocation,
    };

    if (this.state.storeid === "_add") {
      console.log("This is save method " + this.state.storeid);
      StoreService.addStore(store).then((res) => {
        console.log("the response from spring is " + JSON.stringify(res.data));
        this.props.history.push("/dash");
      });
    } else {
      console.log("This is update method " + this.state.storeid);
      StoreService.updateStore(this.state.storeid, store).then((res) => {
        console.log("the response from spring is " + JSON.stringify(res.data));
        this.props.history.push("/list-stores");
      });
    }
  };

  cancel = (e) => {
    this.props.history.push("/dashboard");
  };

  componentDidMount() {
    if (this.state.storeid === "_add") {
      return;
    } else {
      StoreService.viewStore(this.state.storeid).then((res) => {
        console.log(
          " Component Didmount the user detail " + JSON.stringify(res.data)
        );
        let store = res.data;

        this.setState({
          sName: store.storeName,
          sNumber: store.storeNumber,
          sLocation: store.storeLocation,
        });
      });
    }
  }

  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };

    return (
      <div
        id="intro-example"
        class="d-flex justify-content-center p-5 text-center bg-image mask"
        style={mystyle}
      >
        <div
          class="d-flex justify-content-center"
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
            <h3>Add a Store</h3>
            <hr />
            <div>
              <b>
                <label style={{ padding: `5px` }}>Store Name:</label>
              </b>
              <input
                type="text"
                name="sName"
                className="form-control mt-1"
                placeholder="Enter Store Name "
                value={this.state.sName}
                onChange={this.changeStoreNameHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Store Number:</label>
              </b>
              <input
                type="text"
                name="sNumber"
                className="form-control mt-1"
                placeholder="Enter Store Number"
                value={this.state.sNumber}
                onChange={this.changeStoreNumberHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Store Location:</label>
              </b>
              <input
                type="text"
                name="sLocation"
                className="form-control mt-1"
                placeholder="Enter Store Location"
                value={this.state.sLocation}
                onChange={this.changeStoreLocationHandler}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.saveOrUpdateStore}
            >
              Save Details
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddStoreComponent;
