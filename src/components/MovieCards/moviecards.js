import React from 'react';
import './moviecards.css';
import { Card, CardBody } from 'reactstrap';

const MovieCard = (props) => {
  return (
    <React.Fragment>
      {
        props.movies.map(movie => {
          if (!movie.poster_path) return null;
          return (<Card key={movie.id} className="movie-card">
            <div className="movie-img">
              { movie.poster_path && 
                <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`} alt={movie.title} />
              }
            </div>
            <CardBody>
              <h5>{movie.title}</h5>
            </CardBody>
          </Card>)
      })
      }
      
    </React.Fragment>
  );
};

export default MovieCard;