import React, { Component } from "react";
import Conversation from "./Conversation";
import ChatForm from "./ChatForm";
import "./../css/Main.scss";

class Main extends Component {

  render() {

    return (
      <div className="Main">
        
        <Conversation />
        <ChatForm />
      </div>
    );
  }
}

export default Main;
