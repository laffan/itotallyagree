import React, { Component } from "react";
import Avatar from "./Avatar";

import "./../css/AvatarEditor.scss";

// https://flatuicolors.com/palette/in
const colors = [
  "#F97F51",
  "#1B9CFC",
  "#F8EFBA",
  "#58B19F",
  "#2C3A47",
  "#B33771",
  "#3B3B98",
  "#FD7272",
  "#9AECDB",
  "#EAB543"
];

class AvatarEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "inner",
      changes: 0,
      avatarColors: {
        outer: "#D3D3D3",
        middle: "#E0E0E0",
        inner: "#EEEEEE"
      }
    };
  }

  inputChange = e => {
    this.setState({ formValue: e.target.value });
  };

  selectRing = selection => {
    this.setState({
      selected: selection
    });
  };

  nextRing = () => {
    switch (this.state.selected) {
      case "inner":
        return "middle";
      case "middle":
        return "outer";
      case "outer":
        return "inner";
      default :
        return "inner";
    }
  };

  setColor = e => {
    // Get the button's background color
    const newColor = e.target.style.backgroundColor;

    // Update parent state to "ready" when 3 or more 
    // changes have been made.

    // Update state
    this.setState(prevState => ({
      changes: prevState.changes + 1,
      selected: this.nextRing(),
      avatarColors: {
        ...prevState.avatarColors,
        [prevState.selected]: newColor
      }
    }), () => {
      if (this.state.changes  === 3) {
        this.props.readyToJoin( this.state.avatarColors );
      }
    });
  };

  render() {
    const Palette = () => {
      return (
        <div className="AvatarEditor__Palette">
          <h4>
            {/* One message for before a certain number 
              of changes have been made, and another once
              you're done. (Also some bold around the ring 
              name that you're working on.)  */}
            { this.state.changes < 3 ? <span>
            Select color for
            <span className="AvatarEditor__RingType">
              {this.state.selected}
            </span>
            ring.</span> : <span>All set!</span>}
          </h4>
          <ul className="AvatarEditor__Colors">
            {colors.map(color => (
              <div
                key={color}
                className="AvatarEditor__Color"
                style={{ backgroundColor: color }}
                onClick={this.setColor}
              ></div>
            ))}
          </ul>
          <div className="clearboth"></div>
        </div>
      );
    };
    return (
      <div className="AvatarEditor">
        <Avatar
          editable
          colors={this.state.avatarColors}
          selectRing={this.selectRing}
          selectedRing={this.state.selected}
        />
        <Palette />
      </div>
    );
  }
}

export default AvatarEditor;
