import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { asArray } from '../../../reducers/selectors';

const mapStateToProps = state => {
  console.log(state);
  return {bookings: Object.values(state.session.currentUser.bookings)}
};

export default connect(
  mapStateToProps,
  null
)(BookingIndex);
