import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect, Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import { Subscribe } from 'unstated'
import ModalsContainer from './components/containers/ModalsContainer'

import decode from 'jwt-decode';

import SplashScreen from './components/containers/SplashScreen';
import Login from './components/Login';
import SaldoAwal from './components/SaldoAwal';
import Kasir from './components/containers/Kasir';

import Fullscreen from "react-full-screen";


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

const ProtectedRouteLogged = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn() === false
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/saldo',
          state: { from: props.location }
        }} />
  )} />
);

class App extends Component {

  state = {
    isFull: true
  }

  componentWillMount() {
    this.goFull();
  }

  logout = () => {
    console.log("LOGOUT")
    sessionStorage.setItem('token', '');
    sessionStorage.clear();
  }

  setCurrentPage = (page) => {
    this.setState({
      page: page
    })
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

  render() {
    console.log(isLoggedIn())

    return (

      <Fullscreen enabled={this.state.isFull} onChange={isFull => this.setState({isFull})}>

        <footer className="Footer right">              
          <a href="#" className="btn-fullscreen" onClick={this.goFull} >
            <i className="fas fa-expand-arrows-alt"></i>
          </a>
        </footer>

        <Subscribe to={[ModalsContainer]}>
          {modals => (

          <BrowserRouter>
            <div className="App">

              <Switch>
                <ProtectedRouteLogged exact path='/' component={SplashScreen}/>
                <ProtectedRouteLogged path='/login/:user_index' component={Login} />
                <ProtectedRoute path='/saldo' component={SaldoAwal} />
                <Route path="/logout" 
                  render={() => {
                    this.logout();
                    return <Redirect to={{ pathname: "/" }} />;
                  }}
                />
                <ProtectedRoute path='/kasir' component={Kasir} />
              </Switch>
              
            </div>
          </BrowserRouter>

          )}
        </Subscribe>

        

      </Fullscreen>
    );
  }
}

export default App;
