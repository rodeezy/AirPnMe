import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';
import {signup, login, logout} from './util/session_api_util'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  $("#pac-input").appendTo(".filter-form");
  ReactDOM.render(<Root store={store}/>, root);
});
