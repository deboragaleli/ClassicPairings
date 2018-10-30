import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WineItem extends Component {
  render() {
    const { title, subtitle, image, code } = this.props;
    return (
      <Link to={`/wines/${code}`}>
        <div className="wine-item">
          <div className="wine-image">
            <img src={image} alt="Wine 1" />
          </div>
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
      </Link>
    )
  }
}

export default WineItem;