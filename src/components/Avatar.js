import React, { Component } from "react";
import "./../css/Avatar.scss";


class Avatar extends Component {
  
  ring = ( type ) => {

    const selectedClass = (type === this.props.selectedRing) ? "selected" : null;

    return (
      <div
        className={`Avatar__${type} ${selectedClass}`}
        style={{ backgroundColor: this.props.colors[type] }}
        onClick={()=> this.props.editable ? this.props.selectRing(type) : null }
      ></div>
    )
  }

  render() {
    return (
      <div className={`Avatar ${this.props.editable ? 'Editable' : null }`}>
        { this.ring("outer") }
        { this.ring("middle") }
        { this.ring("inner") }
      </div>
    );
  }
}

export default Avatar;
