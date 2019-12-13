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
    <form onSubmit={handleSubmit}>
      <input required type="text" name="name" placeholder="name" value={newSmurf.name} onChange={handleChange} />
      <input required type="number" name="age" placeholder="age" value={newSmurf.age} onChange={handleChange} />
      <input required type="text" name="height" placeholder="height" value={newSmurf.height} onChange={handleChange} />
      <button>Add Smurf to Village</button>
    </form>
  )
}


export default connect((state) => ({}), { addSmurf })(NewSmurf); 