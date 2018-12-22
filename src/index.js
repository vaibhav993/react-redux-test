import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'
import './index.css';
import App from './containers/App'
import reducer from "./reducers"

const middlewares = [ thunk ];
const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
