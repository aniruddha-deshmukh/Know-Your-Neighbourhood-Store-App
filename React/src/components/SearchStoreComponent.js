import React, { Component } from "react";
import StoreService from "../services/StoreService";

class SearchStoreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Store: [],
      searchKeyword: this.props.match.params.searchKeyword,
    };
  }
  dashboard = (e) => {
    this.props.history.push(`/dash`);
  };
  addStore = (e) => {
    this.props.history.push(`/addStore/_add`);
  };
  search = (e) => {
    this.props.history.push(`/search`);
  };
  viewStore(storeId) {
    this.props.history.push(`/view-store/${storeId}`);
  }
  componentDidMount() {
    StoreService.searchStore(this.state.searchKeyword).then((res) => {
      this.setState({ Store: res.data });
    });
  }
  changeSearchHandler = (event) => {
    console.log(event.target.value);
    this.setState({ searchKeyword: event.target.value });
  };
  searchStore = (searchKeyword) => {
    console.log("search Store Method " + searchKeyword);
    this.props.history.push(`/search-store/${searchKeyword}`);
  };

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
            color: `white`,
            align: `center`,
            width: `80%`,
            borderStyle: `groove`,
            borderRadius: `20px`,
            backgroundColor: `rgba(0, 0, 0,0.6)`,
          }}
        >
          <br></br>
          <h2 className="text-center">Search Stores</h2>
          <hr />
          <nav>
            <div class="d-flex justify-content-center">
              <form
                className="container"
                style={{
                  width: `50%`,
                  align: `center`,
                  color: "white",
                  opacity: `0.8`,
                  borderStyle: `groove`,
                  borderRadius: `10px`,
                }}
              >
                <div className="row">
                  <div class=" d-flex justify-content-center">
                    <input
                      className="form-control mt-4"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={this.state.searchKeyword}
                      onChange={this.changeSearchHandler}
                    />
                    <button
                      onClick={() => this.searchStore(this.state.searchKeyword)}
                      className="btn btn-info mt-4"
                      style={{ marginLeft: "10px" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <br></br>
              </form>
            </div>
          </nav>
          <br />
          <div className="container">
            <div className="row">
              <table className="table table-dark table-bordered ">
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
                  {this.state.Store.map((store) => (
                    <tr key={store.storeid}>
                      <td> {store.storeid}</td>
                      <td> {store.storeName} </td>
                      <td> {store.storeNumber}</td>
                      <td> {store.storeLocation}</td>
                      <td>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewStore(store.storeid)}
                          className="btn btn-info"
                        >
                          View{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
    );
  }
}

export default SearchStoreComponent;
