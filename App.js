import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Store/store';
import Application from './src/App';

class App extends React.Component {
  render() {
    return ( 
      <Provider store = {store} >
      <Application />
      </Provider>
    );
  }
}


export default App;