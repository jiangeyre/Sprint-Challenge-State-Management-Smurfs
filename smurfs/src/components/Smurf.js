import React from 'react';
import { connect } from 'react-redux';
import { removeSmurf } from '../store/actions/actions.js';

const Smurf = (props) => {
  const smurf = props.smurf;
  return (
    <div style={{border: '1px solid black', width: 150, height: 160, backgroundColor: 'ghostwhite'}}>
      <h3 style={{fontWeight: 800, textDecoration: 'underline'}}>{smurf.name}</h3>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}cm</p>
      <button onClick={() => {props.removeSmurf(props.smurf.id)}} style={{fontFamily: 'Barlow, sans-serif', backgroundColor: 'maroon', color: 'ghostwhite'}} >SACRIFICE</button>
    </div>
  )
}

export default connect(()=>({}), {removeSmurf})(Smurf); 