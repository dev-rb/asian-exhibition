import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Container, Grid } from '@material-ui/core';
import ArtView from './components/ArtView';
import ExhibitView from './components/ExhibitView';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Container maxWidth="xl" style={{ width: '100vw', height: '100vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2rem' }}>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ArtView />
              <ExhibitView />
            </div>
          </div>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
