import axios from 'axios';

export const CALL_SUCCESS = "CALL_SUCCESS";
export const CALL_FAILURE = "CALL_FAILURE";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const getSmurfs = data => dispatch => {
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({type: "CALL_SUCCESS", payload: res.data});
    })
    .catch(err => {
      dispatch({type: "CALL_FAILURE", payload: err.response})
    });
};

export const addSmurf = data => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs`, data)
    .then(res => {
      dispatch({type: "POST_SUCCESS", payload: data})
    })
    .catch(err => {
      dispatch({type: "POST_FAILURE", payload: err.response})
    })
};

export const removeSmurf = data => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${data}`)
    .then(res => {
      dispatch({type: "CALL_SUCCESS", payload: res.data});
    })
    .catch(err => {
      dispatch({type: "CALL_FAILURE", payload: err.response})
    });
};