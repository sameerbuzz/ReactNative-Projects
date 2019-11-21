import { Provider } from 'react-redux';
import ReduxForm from './screen/ReduxForm';
import store from '../../stores/index';
import React from 'react';

function App () {
    return(
        <Provider store = {store}>
            <ReduxForm />
            </Provider>
    );
}
export default App;