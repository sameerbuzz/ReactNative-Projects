import * as React from 'react';
import { Provider } from "react-redux";
import Navigation from './src/navigator/Navigation';
import store from './src/reducer/index';

interface AppProps {
}

interface State {
}

export default class App extends React.PureComponent<AppProps, State> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
