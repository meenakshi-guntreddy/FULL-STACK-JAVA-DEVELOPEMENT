import React, { Component } from "react";

class UserStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Loading..."
    };
  }

  componentDidMount() {
    console.log(
      "[Mounted] UserStatus class component loaded"
    );

    setTimeout(() => {
      this.setState({
        status: "Online"
      });

      console.log(
        "[Fetched] Status: Online"
      );
    }, 2000);
  }

  render() {
    return (
      <div>
        <h2>User Status Tracker</h2>

        <p>
          Status: {this.state.status}
        </p>
      </div>
    );
  }
}

export default UserStatus;