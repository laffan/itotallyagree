import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "./Avatar";
import moment from "moment";
import { fetchMessages, deleteMessage } from "./../redux/actions";

import "./../css/Conversation.scss";

class Conversation extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMessages());
  }

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  getUserColors = checkUserId => {
    const user = Object.values(this.props.users).filter(
      user => user.id === checkUserId
    )[0];
    return user.colors;
  };

  render() {
    if (!this.props.messages) {
      return <p className="Conversation__NoMessages">No messages yet ... </p>;
    }
    const deleteButton = (userid, messageid) => {
      // Only allows users with matching ID to delete
      if (this.props.user.id === userid) {
        return (
          <button 
            onClick={() => this.props.dispatch(deleteMessage(messageid))}
            className="Conversation__DeleteMessage"
            >
            Delete
          </button>
        );
      }
      return <span />;
    };

    return (
      <div className="Conversation">
        <ul>
          {Object.entries(this.props.messages).map(message => {
            const id = message[0];
            const data = message[1];
            return (
              <li key={data.created}>
                <Avatar colors={this.getUserColors(data.author)} />
                <div className="Conversation__Message">
                  <p>{data.message}</p>
                  <small>
                    {moment(data.created).fromNow("mm")} ago.{" "}
                    {deleteButton(data.author, id)}
                  </small>
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
