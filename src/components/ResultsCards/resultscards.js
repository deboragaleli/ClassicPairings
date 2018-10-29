import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const ResultsCards = (props) => {
  return (
    <Card>
      <CardImg top width="100%" src={props.image} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle><span dangerouslySetInnerHTML={{__html: props.subtitle}} /></CardSubtitle>
        <CardText><span dangerouslySetInnerHTML={{__html: props.description}} /></CardText>
        {props.link && <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">More Info</a>}
      </CardBody>
    </Card>
  );
};

export default ResultsCards;
