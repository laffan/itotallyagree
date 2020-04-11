import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import moment from "moment";
import { fetchMessages } from "./../redux/actions";

import "./../css/Conversation.scss";

class Conversation extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMessages());
  }

  componentDidUpdate() {
    window.scrollTo(0,document.body.scrollHeight);
  }

  getUserColors = checkUserId => {
    const user = Object.values(this.props.users).filter(
      user => user.id === checkUserId
    )[0];
    return user.colors;
  };

  render() {
    
    if ( !this.props.messages ) {
      return (<p className="Conversation__NoMessages" >No messages yet ... </p>)
    }

    return (
      <div className="Conversation">
        <ul>
        {Object.values(this.props.messages).map(data => {
          return (
            <li key={data.created}>
              <Avatar colors={this.getUserColors(data.author)} />
              <div className="Conversation__Message">

              <p>{data.message}</p>
              <small>{ moment(data.created).fromNow("mm")} ago</small>
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
  users: state.users,
  messages: state.messages
}))(Conversation);
