import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store';
import Home from './routes/home';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        {/* Routes Code over here  */}
        <Home />
      </Provider>
    );
  }
}

export default App;
