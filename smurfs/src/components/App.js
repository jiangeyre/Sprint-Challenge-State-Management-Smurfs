import React, { Component } from "react";
import { connect } from 'react-redux';

import { getSmurfs } from '../store/actions/actions.js';
import SmurfVillage from './SmurfVillage';
import NewSmurf from './NewSmurf';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Smurfs Available for Sacrifice:</h1>
          <button onClick={() => {this.props.getSmurfs()}}>Get Smurfs</button>
          <SmurfVillage smurfs={this.props.smurfs}/>
          <NewSmurf />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps, {getSmurfs})(App);