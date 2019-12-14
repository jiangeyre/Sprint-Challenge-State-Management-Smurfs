import React from 'react';

const Smurf = (props) => {
    console.log(props);

    return (
        <div className="smurfcard">
            <p>{props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>
                Sacrifice!!
            </button>
        </div>
    );
};

export default Smurf;