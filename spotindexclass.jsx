import React from 'react';
import SpotIndexItem from './spot_index_item';
// import { receiveSpots } from '../../actions/spot_actions';

class SpotIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displaySpots: this.props.spots.slice(0, 18)
    };
    this.page = 0;
    this.next = this.next.bind(this);
  }

  // componentDidMount() {
  //   // page = 0;
  //   console.log('ayy');
  // }

  next() {
    // console.log(i);
    // receiveSpots(spots.slice(18,36));
    // console.log(page);
    this.page++;
    this.setState({displaySpots: this.props.spots.slice(this.page*18,
      (this.page+1)*18)});
  }

  previous() {
      if (page > 0) {
        page--;
      }
  }

  return (
    <div className="spot-results-container">
      <div className='spot-results'>
        <div className='left-half-results'>
          {this.state.displaySpots.slice(0, 9).map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))}
        </div>
        <div className='right-half-results'>
          {this.state.displaySpots.slice(9,18).map(spot => (
            <SpotIndexItem spot={spot} key={spot.id} />
          ))}
        </div>
      </div>
      <br />
      <button onClick={previous}>Previous</button>
      <button onClick={this.next}>Next</button>
    </div>
  );
}

export default SpotIndex;

// spots.slice(0,spots.length/2)
// spots.slice(spots.length/2)
