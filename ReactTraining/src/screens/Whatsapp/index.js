import { Provider } from 'react-redux';
import Home from './Home';
import Stores from './redux/store';
import React from 'react';

function App () {
    return(
        <Provider store = {Stores}>
            <Home />
        </Provider>
    );
}
export default App;