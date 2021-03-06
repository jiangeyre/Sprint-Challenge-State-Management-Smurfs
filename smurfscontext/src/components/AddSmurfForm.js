import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const AddSmurfForm = () => {
	const [ newSmurf, setNewSmurf ] = useState({
		name: '',
		age: '',
		height: ''
    });
    
	const { addSmurfs } = useContext(SmurfContext);

	const handleChange = event => {
		setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
	};

	const handleSubmit = () => {
		addSmurfs(newSmurf);
	};

	return (
		<div className="smurfform">
			<h2>Add a new smurf to the sacrificial pile.</h2>
			<form onSubmit={event => handleSubmit(event)}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={newSmurf.name}
					onChange={event => handleChange(event)}
				/>
				<input
					type="number"
					name="age"
					placeholder="age"
					value={newSmurf.age}
					onChange={event => handleChange(event)}
				/>
				<input
					type="text"
					name="height"
					placeholder="height"
					value={newSmurf.height}
					onChange={event => handleChange(event)}
				/>
				<button>Throw in.</button>
			</form>
		</div>
	);
};

export default AddSmurfForm; 