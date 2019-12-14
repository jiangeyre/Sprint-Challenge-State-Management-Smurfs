import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSmurfForm from './src/components/AddSmurfForm';
import SmurfList from './src/components/SmurfList';

import { SmurfContext } from './src/contexts/SmurfContext';

const App = () => {
    const [ smurfs, setSmurfs ] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                setSmurts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const addSmurfs = smurf => {
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {})
            .catch(err => console.log(err));
    };

    const deleteSmurf = smurfID => {
        axios
            .delete(`http://localhost:3333/smurfs/${smurfID}`)
            .then(res => {
                setSmurfs(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <SmurfContext.Provider value = {{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}>
            <div className="app">
                <h1>Sacrifice these abhorrent blue creatures.</h1>
                <SmurfList />
                <AddSmurfForm />
            </div>
        </SmurfContext.Provider>
    );
};

export default App;