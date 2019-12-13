import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// reducers
import { smurfReducer } from './store/reducers/smurfReducer';

// styling
import "./index.css";
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
