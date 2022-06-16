import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import noImage from '../../media/img/noimageavailable.png';

class Card extends Component {
  render() {
    const {image, description, date, type} = this.props;
    return (
      <div className="movies-card">
        <div className="movies-container-image">
          <img src={image === 'N/A' ? noImage : image} alt="#"/>
        </div>
        <div className="movies-card_info-box">
          <div className="movies-card_title">
            {description}
          </div>
          <div className="movies-card_description">
            Date: {date}
            <br/>
            Type: {type}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
