// REACT IMPORTS
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// STYLE IMPORTS
import './App.css';

// COMPONENT IMPORT
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/shop' component={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
