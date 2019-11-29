import { Provider } from 'react-redux';
import APIRedux from './screen/APIRedux';
import store from '../../stores/index';
import React from 'react';

function App () {
    return(
        <Provider store = {store}>
            <APIRedux />
            </Provider>
    );
}
export default App;