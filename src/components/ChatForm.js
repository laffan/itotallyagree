import React, { Component } from "react";
import { connect } from "react-redux";
import { emojiKeyboard } from "./../emoji-keyboard";
import { addMessage } from "./../redux/actions";
import * as firebase from "firebase";

import "./../css/ChatForm.scss";

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ""
    };
  }

  convertToEmoji = entered => {
    const remapObj = Object.values(emojiKeyboard).filter(
      (currentElement, index) => {
        return Object.values(currentElement).some(characterList => {
          return characterList.some(character => character === entered);
        });
      }
    );

    return remapObj[0] ? Object.keys(remapObj[0])[0] : false;
  };

  controlForm = e => {
    const input = e.target.value;
    const lastChar = input.trim().slice(-1);
    const emoji = this.convertToEmoji(lastChar);

    if (emoji) {
      this.setState({
        formValue: input.slice(0, input.length - 1) + emoji
      });
    } else {
      this.setState({
        formValue: ""
      });
    }
  };

  sendMessage = () => {
    if (this.state.formValue) {
      this.props.dispatch(
        addMessage({
          message: this.state.formValue,
          author: this.props.user.id,
          created: firebase.database.ServerValue.TIMESTAMP
        })
      );

      this.setState({
        formValue: ""
      });
    } else {
      alert("Write something!")
    }
  };

  render() {
    return (
      <div className="ChatForm">
        <input
          type="text"
          maxLength="10"
          value={this.state.formValue}
          onChange={this.controlForm}
        />
        <input type="submit" value="Send" onClick={this.sendMessage} />
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user,
  colors: state.user.colors
}))(ChatForm);
