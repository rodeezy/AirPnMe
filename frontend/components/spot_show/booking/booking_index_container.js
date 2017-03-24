import { connect } from 'react-redux';
import BookingIndex from './booking_index';
import { asArray } from '../../../reducers/selectors';


const mapStateToProps = state => ({
  bookings: Object.values(state.session.currentUser.bookings)
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  null
)(BookingIndex);
