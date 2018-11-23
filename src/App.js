import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import decode from 'jwt-decode';

import SplashScreen from './components/containers/SplashScreen';
import Login from './components/Login';

// const getToken = {
//   // Retrieves the user token from localStorage
//   return (sessionStorage.getItem('token'))
// }

// const isTokenExpired(token) {
//   try {
//       const decoded = decode(token);
//       if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
//           return true;
//       }
//       else
//           return false;
//   }
//   catch (err) {
//       return false;
//   }
// }

const isLoggedIn = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 300);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 300);
  }
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={SplashScreen}/>
          <Route path='/:user_index' component={Login} />
          <ProtectedRoute path='/splash' component={SplashScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
