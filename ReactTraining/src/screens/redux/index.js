import { Provider } from 'react-redux';
import Home from './screen/home';
import store from '../../stores/index';
import React from 'react';

function App () {
    return(
        <Provider store = {store}>
            <Home />
            </Provider>
    );
}
export default App;