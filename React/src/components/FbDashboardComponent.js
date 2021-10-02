import React, { Component } from "react";

class FbDashboardComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
			user: "",
		};
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.setState({ user: user });
		}
	}
	render() {
		const UserScreen = ({ user }) => (
			<>
				<div
					style={{
						display: "flex-column",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<img
						src={user.picture.data.url}
						height="128px"
						width="128px"
						alt="avatar"
						style={{ borderRadius: "50%" }}
					/><br/><br/>
					<h1>Welcome {user.name}!</h1>
					<p>You are logged with {user.email}</p>
				</div>
			</>
		);

		const mystyle = {
			width: "100%",
			height: "589px",
			backgroundImage: `url("https://cdn.discordapp.com/attachments/792363589356355585/851002184988753980/AdobeStock_197679483.jpeg")`,
		  };
		return (
			<div class="d-flex p-5 justify-content-center text-center bg-image"
			style={mystyle}>
				{this.state.user && (
					<div className="card col-md-6 offset-md-3 offset-md-3 border-primary">
						<UserScreen user={this.state.user} />
					</div>
				)}
			</div>
		);
	}
}export default FbDashboardComponent;
