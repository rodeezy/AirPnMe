import { connect } from 'react-redux';
import { createBooking } from '../../../actions/spot_actions.js';

import BookingForm from './booking_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
