import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.scss';
import { IntlProvider } from 'react-intl'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import Popper from'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from "./routes";
import store from './store'
    
// const store = createStore(rootReducer);
toast.configure()
let persistor = persistStore(store);
ReactDOM.render(
    <Provider store ={store}>
        <PersistGate loading={null} persistor={persistor}>
            <IntlProvider locale="en">
            <div className="container-fluid pl-5 pr-5" >
            <Routes />
            </div>
            </IntlProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
