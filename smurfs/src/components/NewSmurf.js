import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions/actions.js';

const NewSmurf = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: 0,
    height: ""
  })
  const handleChange = (evt) => {
    setNewSmurf({...newSmurf, [evt.target.name]: evt.target.value})
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
    name: "",
    age: 0,
    height: ""
  })
  }
  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', width: 600,border: '3px solid black'}}>
        <p>Enter a name:</p>
        <input required type="text" name="name" placeholder="Name." value={newSmurf.name} onChange={handleChange} style={{fontFamily: 'Barlow, sans-serif', margin: '1% auto'}} />
        <p>Enter the age:</p>
        <input required type="number" name="age" placeholder="Age." value={newSmurf.age} onChange={handleChange} style={{fontFamily: 'Barlow, sans-serif', margin: '1% auto'}} />
        <p>Enter a height:</p>
        <input required type="text" name="height" placeholder="Height." value={newSmurf.height} onChange={handleChange} style={{fontFamily: 'Barlow, sans-serif', margin: '1% auto'}} />
        <div>
            <button style={{fontFamily: 'Barlow, sans-serif', width: 200}}>Add Smurf to Village</button>
        </div>
    </form>
  )
}


export default connect((state) => ({}), { addSmurf })(NewSmurf); 