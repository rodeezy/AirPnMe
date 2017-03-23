import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SearchContainer from './search/search_container';
import SpotFormContainer from './spot_form/spot_form_container';
import SpotShowContainer from './spot_show/spot_show_container';
import ReviewFormContainer from './spot_show/review_form_container';
import BookingFormContainer from './spot_show/booking/booking_form_container';
import SessionFormContainer from './session_form/session_form_container';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} />
          <Route path="/spots/new" component={SpotFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/spots/:spotId" component={SpotShowContainer}>
            <Route path="review" component={ReviewFormContainer} onEnter={_ensureLoggedIn} />
            <Route path="booking" component={BookingFormContainer} onEnter={_ensureLoggedIn} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
