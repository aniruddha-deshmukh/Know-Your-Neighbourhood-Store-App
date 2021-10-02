import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ListStoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
    };
    this.deleteStore = this.deleteStore.bind(this);
    this.viewStore = this.viewStore.bind(this);
    this.editStore = this.editStore.bind(this);
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

  componentDidMount() {
    StoreService.getStores().then((res) => {
      this.setState({ stores: res.data });
    });
  }

  deleteStore(storeid) {
    console.log("hello" + storeid);
    StoreService.deleteStore(storeid).then((res) => {
      this.setState({
        stores: this.state.stores.filter((store) => store.storeid !== storeid),
      });
    });
  }
  viewStore(storeId) {
    this.props.history.push(`/view-store/${storeId}`);
  }
  editStore(storeId) {
    console.log("This is update Store" + storeId);
    this.props.history.push(`/addStore/${storeId}`);
  }

  render() {
    const mystyle = {
      width: "100%",
      height: "589px",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
    };
    return (
      <div
        class="d-flex justify-content-center p-5 text-center bg-image mask"
        style={mystyle}
      >
        <div
          style={{
            fontSize: `20px`,
            color: `white`,
            align: `center`,
            width: `100%`,
            borderStyle: `groove`,
            borderRadius: `20px`,
            backgroundColor: `rgba(0, 0, 0,0.6)`,
          }}
        >
          <br></br>
          <h2 className="text-white">Stores List</h2>
          <hr />
          <br />
          <div className="container">
            <div className="row">
              <table
                style={{ marginLeft: "15px" }}
                className="table table-dark table-bordered "
              >
                <thead>
                  <tr>
                    <th>Store Id</th>
                    <th>Store Name</th>
                    <th>Store Number</th>
                    <th>Store Location</th>
                    <th> Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.stores.map((store) => (
                    <tr key={store.storeid}>
                      <td> {store.storeid}</td>
                      <td> {store.storeName} </td>
                      <td> {store.storeNumber}</td>
                      <td> {store.storeLocation}</td>
                      <td>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewStore(store.storeid)}
                          className="btn btn-primary"
                        >
                          View{" "}
                        </button>

                        <button
                          style={{ marginLeft: "10px" }}
                          className="btn btn-success"
                          onClick={() => this.editStore(store.storeid)}
                        >
                          Update
                        </button>

                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.deleteStore(store.storeid)}
                          className="btn btn-danger"
                        >
                          Delete{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div><br/>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={this.dashboard}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }
}

export default ListStoreComponent;
