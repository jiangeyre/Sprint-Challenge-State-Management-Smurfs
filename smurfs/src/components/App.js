import React, { Component } from "react";
import { connect } from 'react-redux';

import { getSmurfs } from '../store/actions/actions.js';
import SmurfVillage from './SmurfVillage';
import NewSmurf from './NewSmurf';

import "./App.css";
import sacrifice from '../img/sacrifice.jpg';
import elmo from '../img/elmo.jpg';

class App extends Component {

  render() {
    return (
      <div className="App" style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
          <p style={{fontWeight: 900, fontSize:'2.5rem'}}>Smurfs Available for Sacrifice:</p>
          <div>
            <img src={sacrifice} alt="Ironman Tony Stark crying tears sacrifice" style={{width: 500}} />
          </div>
          <div>
            <img src={elmo} alt="elmo fire hell" style={{width: 500}} />
          </div>
          <div>
            <button onClick={() => {this.props.getSmurfs()}} style={{width: 120, fontFamily: 'Barlow, sans-serif'}}>Get Smurfs</button>
          </div>
          <SmurfVillage smurfs={this.props.smurfs}/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <NewSmurf />
          </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps, {getSmurfs})(App);