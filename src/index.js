import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import "./styles/styles.scss"
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/store"

import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'



ReactDOM.render(
  <Provider store={store}>

    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App /> 
      </PersistGate>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root'));

