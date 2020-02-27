import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "reactstrap/lib/Container";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
    <Container>
        <Provider store={store}>
            <App />
        </Provider>
    </Container>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
