// REACT IMPORTS
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// STYLE IMPORTS
import './App.css';

// COMPONENT IMPORT
import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shopPage/ShopPage.component';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './components/Sign-in-and-sign-up/Sign-in-and-sign-up.component';

// FIREBASE AUTHENTICATION IMPORT
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // RUNS WHENEVER AUTHENTICATION STATE CHANGES
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route path='/signin' component={ SignInAndSignUpPage }/>
        </Switch>
      </div>
    );
  }
}

export default App;
