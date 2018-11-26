import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Subscribe } from 'unstated'

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.scss';
import './sass/Forms.scss';

import ModalsContainer from './components/containers/ModalsContainer'
import Modals from './components/Modals';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>

    <Subscribe to={[ModalsContainer]}>
      {modalsContainer => (
        <Modals 
          type={modalsContainer.state.modalType} 
          modal={modalsContainer.state.modal} 
          toggle={() => modalsContainer.toggleModal(modalsContainer.state.modalType, modalsContainer.state.modalSize)} 
          toggleModal={modalsContainer.toggleModal} 
          size={modalsContainer.state.modalSize} 
          className="text-center" 
        />
      )}
    </Subscribe>

    <App />

  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();