import React from 'react';
import Smurf from './Smurf.js';

const SmurfVillage = (props) => {
  return (
    <div style={{margin: '2% auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
    {
      props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />
      })
    }
    </div>
  )
}

export default SmurfVillage; 