import React, { Component } from 'react';
import Auth from '../../Auth';
import './winecards.css';
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const auth = new Auth();


class WineCards extends Component {

  getRegion = (region) => {
    region = region.split('>');

    return region[0] || '';
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.wines.map(wine => (
            <Card key={wine.code} className="wine-card">
              <CardImg top width="100%" src={wine.image || 'http://ei.isnooth.com/multimedia/7/2/8/image_610047_square.png'} alt={wine.name} />
              <CardBody>
                <CardTitle>{wine.name}</CardTitle>
                
                <div className="wine-body">
                  <div className="wine-details">
                    <CardSubtitle>
                      <strong>Vintage:</strong> {wine.vintage}
                    </CardSubtitle>
                    <CardSubtitle>
                      <strong>Region:</strong> { this.getRegion(wine.region) }
                    </CardSubtitle>
                  </div>

                  { auth.isAuthenticated() && <Button className="select-wine" onClick={() => this.props.selectWine(wine)}>Select Wine</Button>}
                </div>
              </CardBody>
            </Card>
          ))
        }
        
      </React.Fragment>
    );
  }
  
};

export default WineCards;