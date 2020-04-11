import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "./../redux/actions";
import AvatarEditor from "./AvatarEditor";

import "./../css/Lobby.scss";

class Lobby extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readyToJoin: false,
      id: "",
      colors: ""
    };
  }

  readyToJoin = colors => {
    this.setState({
      readyToJoin: true,
      colors
    });
  };

  joinChat = () => {
    const id = this.generateID();
    const colors = this.state.colors;

    this.props.dispatch(
      addUser({ id , colors })
    );
  };

  generateID = () => {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    );
  };

  render() {
    return (
      <div className="Lobby">
        <AvatarEditor readyToJoin={this.readyToJoin} />
        {this.state.readyToJoin ? (
          <button className="enabled" onClick={this.joinChat}>
            Start
          </button>
        ) : (
          <button>Start</button>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Lobby);
