import React from 'react';
import StarRating from 'react-star-rating';
import { withRouter } from 'react-router';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.imageStyle = this.imageStyle.bind(this);
  }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`);
  }

  // imageStyle(imgUrl) {
  //   return (
  //     {'background-image': `url(${imgUrl})`}
  //   )
  // }

  render() {
    //debugger;
    const { average_rating, description, image_url } = this.props.spot;

    return (
      <div className="spot-index-item"
           onClick={this.handleClick}>
           <div className='img-container'>
             <img src={image_url} />
           </div>

        <div className="index-item-info">
          <span className='index-item-price'>{(this.props.spot.price ? `$${this.props.spot.price}` : "Free")}  </span>
          <span className="index-item-description">
            {description}
          </span>
          <br />
          <span className="index-item-privacy">
            {this.props.spot.price? 'Private' : 'Public'}
          </span>
          <br />
          <span className="index-item-rating">
            {average_rating || "No reviews yet"}
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
