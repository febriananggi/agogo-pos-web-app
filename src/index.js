import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import { Provider, Subscribe } from 'unstated'

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.scss';
import './sass/Forms.scss';
import { Button } from 'reactstrap';

import CounterContainer from './containers/counter'
import App from './App';

import * as serviceWorker from './serviceWorker';

const logout = () => {
  console.log("LOGOUT")
  sessionStorage.setItem('token', '');
  sessionStorage.clear();
  return (<Redirect to={'/'} />);
}

ReactDOM.render(
  <Provider>

    <Subscribe to={[CounterContainer]}>
      {counterContainer => (
        <header className="Header">Count: { counterContainer.state.count }</header>
      )}
    </Subscribe>

    <App />

    <footer className="Footer"><Button onClick={logout}>Logout</Button></footer>

  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
