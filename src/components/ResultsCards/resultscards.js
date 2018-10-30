import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

  class ResultsCards extends Component {
  getRegion = (region) => {
    region = region.split('>');

    return region[0] || '';
  }

  render() {
    const props = this.props;

    return (
      <Card>
        <div className="card-image">
          <CardImg top width="100%" src={props.image} />
        </div>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>

          { !(props.vintage && props.region) && (
            <React.Fragment>
              <CardSubtitle><span dangerouslySetInnerHTML={{__html: props.subtitle}} /></CardSubtitle>
              <CardText><span dangerouslySetInnerHTML={{__html: props.description}} /></CardText>
            </React.Fragment>
          )}


          { (props.vintage && props.region) && (
            <div className="wine-body">
              <div className="wine-details">
                <CardSubtitle>
                  <strong>Vintage:</strong> {props.vintage}
                </CardSubtitle>
                <CardSubtitle>
                  <strong>Region:</strong> { this.getRegion(props.region) }
                </CardSubtitle>
              </div>
            </div>
          )}

          {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">More Info</a>}
        </CardBody>
      </Card>
    );
  }
};

export default ResultsCards;
