import React from 'react';
import { connect } from 'react-redux';
import { removeSmurf } from '../store/actions/actions.js';

const Smurf = (props) => {
  const smurf = props.smurf;
  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => {props.removeSmurf(props.smurf.id)}} >Remove Smurf From Village</button>
    </div>
  )
}

export default connect(()=>({}), {removeSmurf})(Smurf); 