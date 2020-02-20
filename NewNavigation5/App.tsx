import * as React from 'react';
import { Provider } from "react-redux";
import Navigator from './src/navigator/Navigator';
import { store, persistor } from './src/reducer';
import { PersistGate } from 'redux-persist/es/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
      <Navigator />
      </PersistGate>
    </Provider>
  );
}
export default App;