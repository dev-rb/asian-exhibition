import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Container, Grid } from '@material-ui/core';
import ArtView from './components/ArtView';
import ExhibitView from './components/ExhibitView';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Lobby from './components/Lobby';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Lobby />
      </div>
    </Provider>
  );
}

export default App;
