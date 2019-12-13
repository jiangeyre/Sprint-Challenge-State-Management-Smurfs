import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// reducers
import reducer from './store/reducers/reducer';
// components
import SmurfVillage from './components/SmurfVillage';
import AddSmurf from './components/AddSmurf';
// styling
import "./index.css";

// import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk));

function App(){
    return(
        <div>

        </div>
    )
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
