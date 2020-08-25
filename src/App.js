// REACT IMPORTS
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// STYLE IMPORTS
import './App.css';

// COMPONENT IMPORT
import HomePage from './pages/homepage/Homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/hats' component={ HatsPage }/>
      </Switch>
    </div>
  );
}

export default App;
