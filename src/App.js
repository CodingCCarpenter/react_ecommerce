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
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // PROPERTY SET ON CLASS TO ALLOW US TO MONITOR WHEN WE CLOSE OUT THE AUTH 
  unsubscribeFromAuth = null

  // RUNS WHENEVER AUTHENTICATION STATE CHANGES
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // EXECUTE CREATEUSERPROFILEDOCUMENT IF LOGGED IN
      if (userAuth) {
        
        // AFTER DOCUMENT AND SNAPSHOT REFERENCE ARE CREATE, UPDATE STATE VIA SETSTATE
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }

      // TO BE DELETED 
      console.log(this.state);
    });
  }

  // RUNS WHEN COMPONENT PREPARES TO UNMOUNT -UNSUBSCRIBES FROM AUTH
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        
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
