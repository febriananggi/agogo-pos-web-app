import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import decode from 'jwt-decode';

import SplashScreen from './components/containers/SplashScreen';
import Login from './components/Login';
import SaldoAwal from './components/SaldoAwal';

const isTokenExpired = (token) => {
  try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
          return true;
      }
      else
          return false;
  }
  catch (err) {
      return false;
  }
}

const isLoggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = sessionStorage.getItem('token') // GEtting token from localstorage
  return !!token && !isTokenExpired(token) // handwaiving here
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn() === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
);

class App extends Component {

  render() {
    console.log(isLoggedIn())

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={SplashScreen}/>
            <Route path='/login/:user_index' component={Login} />
            <ProtectedRoute path='/saldo' component={SaldoAwal} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
