import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import NDFLCalc from './NDFLCalc';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <NDFLCalc />
    </Provider>
);

export default App;
