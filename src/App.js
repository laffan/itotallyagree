import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from './redux/actions';
import Lobby from './components/Lobby';
import Main from './components/Main';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div>
        { Object.keys(this.props.user).length ? <Main /> : <Lobby/> }
      </div>
    );
  }
}
export default connect((state) => ({
  user: state.user, 
}))(App);
