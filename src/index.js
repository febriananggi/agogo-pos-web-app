import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Subscribe } from 'unstated'

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/index.scss';
import './sass/Forms.scss';

import RootContainer from './components/roots/RootContainer'
import ModalsContainer from './components/modals/ModalsContainer'

import Modals from './components/modals/Modals';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>

    <Subscribe to={[RootContainer, ModalsContainer]}>
      {(rootStore, modalStore) => (
        <React.Fragment>
          <Modals 
            type={modalStore.state.modalType} 
            modal={modalStore.state.modal} 
            toggle={() => modalStore.toggleModal(modalStore.state.modalType, modalStore.state.modalSize)} 
            toggleModal={modalStore.toggleModal} 
            size={modalStore.state.modalSize} 
            className="text-center" 
          />

          <App 
            rootStore={rootStore} 
            modalStore={modalStore} 
          />

        </React.Fragment>

      )}
    </Subscribe>

  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();