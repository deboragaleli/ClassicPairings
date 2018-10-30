import React from 'react';
import './recipecards.css';
import { Card, CardBody } from 'reactstrap';

const WineCards = (props) => {
  return (
    <React.Fragment>
      {
        props.recipes.map(recipe => (
          <Card key={recipe.recipe_id} onClick={() => window.open(recipe.source_url)} className="recipe-card">
            <div className="recipe-img" style={{backgroundImage: `url(${recipe.image_url})`}}></div>
            <CardBody>
              <h6>{recipe.publisher}</h6>
              <h5>{recipe.title}</h5>
            </CardBody>
          </Card>
        ))
      }
      
    </React.Fragment>
  );
};

export default WineCards;