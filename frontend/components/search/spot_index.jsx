import React from 'react';
import SpotIndexItem from './spot_index_item';
// import { receiveSpots } from '../../actions/spot_actions';

class SpotIndex extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     displaySpots: this.props.spots.slice(0,18),
  //     page: 0
  //   };
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  // }

  // componentWillMount(nextProps) {
  //   this.setState({displaySpots: nextProps.spots.slice(0,18)});
  // }

  //next and previous need to be redux'd (turned into actions and such)

  // next() {
  //   // console.log(i);
  //   // receiveSpots(spots.slice(18,36));
  //   // console.log(page);
  //   this.setState({page: this.state.page + 1, displaySpots: this.props.spots.slice(this.state.page*18,
  //     (this.state.page+1)*18)});
  // }
  //
  // previous() {
  //   this.setState({page: this.state.page - 1, displaySpots: this.props.spots.slice(this.state.page*18,
  //     (this.state.page+1)*18)});
  // }

  render() {
    const length = this.props.spots.length
    return (
      <div className="spot-results-container">
        <div className='spot-results'>
          <div className='left-half-results'>
            {this.props.spots.slice(0, length/2).map(spot => (
              <SpotIndexItem spot={spot} key={spot.id} />
            ))}
          </div>
          <div className='right-half-results'>
            {this.props.spots.slice(length/2).map(spot => (
              <SpotIndexItem spot={spot} key={spot.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SpotIndex;

// spots.slice(0,spots.length/2)
// spots.slice(spots.length/2)
