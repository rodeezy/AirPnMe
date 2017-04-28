import React from 'react';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router';

const greenIcon = new google.maps.MarkerImage(
  "https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png",
  null,
  null,
  null,
  new google.maps.Size(22, 40)
);

const redIcon = new google.maps.MarkerImage(
  "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi_hdpi.png",
  null,
  null,
  null,
  new google.maps.Size(22, 40)
);

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectIcon = this.selectIcon.bind(this);
    this.unSelectIcon = this.unSelectIcon.bind(this);
    // this.imageStyle = this.imageStyle.bind(this);
  }


  handleClick() {
    const spotId = this.props.spot.id;
    this.props.router.push(`spots/${spotId}`);
  }

  selectIcon(){
    this.props.spot.marker.setIcon(greenIcon);
  }

  unSelectIcon(){
    this.props.spot.marker.setIcon(redIcon);
  }

  // imageStyle(imgUrl) {
  //   return (
  //     {'background-image': `url(${imgUrl})`}
  //   )
  // }

  render() {
    //debugger;
    const { average_rating, description, image_url } = this.props.spot;
    const starRating = <ReactStars value={average_rating} edit={false} />;
    // const priv = <img src='https://i.imgur.com/pfYggxk.png' />;
    return (
      <div className="spot-index-item" id={this.props.key}
           onClick={this.handleClick} onMouseOver={this.selectIcon}
            onMouseOut={this.unSelectIcon}>
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
            {average_rating? starRating : "No reviews yet"}
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
