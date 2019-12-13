import React, { Component } from "react";
import { connect } from 'react-redux';

import { getSmurfs } from '../store/actions/actions.js';
import SmurfVillage from './SmurfVillage';
import NewSmurf from './NewSmurf';

import "./App.css";
import sacrifice from '../img/sacrifice.jpg';

class App extends Component {
  render() {
    return (
      <div className="App" style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
          <h1>Smurfs Available for Sacrifice:</h1>
          <div>
            <img src={sacrifice} alt="Ironman Tony Stark crying tears sacrifice" style={{width: 600}} />
          </div>
          <div>
            <button onClick={() => {this.props.getSmurfs()}} style={{width: 120}}>Get Smurfs</button>
          </div>
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