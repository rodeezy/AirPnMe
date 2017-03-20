import React from 'react';
import { withRouter } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`);
  }

  render() {
    const { average_rating, description, image_url } = this.props.spot;

    return (
      <div className="spot-index-item"
           onClick={this.handleClick}>
        <img src={image_url}/>
        <div className="index-item-info">
          {/*<span className="index-item-category">Rating: </span>
          <span className="index-item-copy">
            {average_rating || "No reviews yet"}
          </span>*/}
          <span className="index-item-copy">{description}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
