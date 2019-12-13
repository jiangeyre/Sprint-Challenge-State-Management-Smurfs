export const initialState = {smurfs: []};

export const smurfReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CALL_SUCCESS":
      return {...state, smurfs: action.payload};
    case "CALL_FAILURE":
      return state;
    case "POST_SUCCESS":
      return {...state, smurfs: [...state.smurfs, {...action.payload, id: Date.now()}]};
    case "POST_FAILURE":
      return state;
    default:
      return state;
  }
}; 