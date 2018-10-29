import React, { Component } from 'react';
import axios from 'axios';
import './results.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import ResultsCards from '../../components/ResultsCards/resultscards';

const apiKey = 'a7065834b36529e3cf15043f9180d627';
const apiKeyMovie = 'bb8fc13dd42a95bd2852111e40ea8f23';

class Results extends Component {
  constructor() {
    super();

    this.state = {
      recipe: null,
      movie: null
    }
  }

  componentWillMount() {
    this.loadRecipes();
    this.loadMovies();
  }

  getRegion = (region) => {
    region = region.split('>');

    return region[0] || '';
  }

  loadRecipes = () => {
    axios.get(`https://www.food2fork.com/api/search?key=${apiKey}&q=&page1`)
      .then(res => {
        if(!res.data.error) {
          const noCoffeeRecipes = res.data.recipes.filter(recipe => recipe.recipe_id !== '47024' && recipe.recipe_id !== '54489');
          this.setState({
            recipe: noCoffeeRecipes[Math.floor(Math.random()*noCoffeeRecipes.length)]
          });
        }
      });
  }

  loadMovies = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=1950&sort_by=vote_average.desc&api_key=${apiKeyMovie}`)
      .then(res => {
        const moviesWithPoster = res.data.results.filter(movie => movie.poster_path);
        this.setState({
          movie: moviesWithPoster[Math.floor(Math.random()*moviesWithPoster.length)]
        });

      });
  }

  render() {
    const { wine } = this.props;
    const { recipe, movie } = this.state;

    
    return (
      <div className="Results">
        <Nav />
        
          <div className="storage">
              <div className="capsule">
                <div className="hero-banner"></div> 
                  {(!recipe || !movie) &&
                    <Loader />
                  }

                  {(recipe && movie && wine) && 
                    <div className="results-cards">
                      <h1>Your perfect match...</h1>

                      <div className="cards-container">
                        <ResultsCards
                          title={wine.name}
                          subtitle={`<strong>Vintage:</strong> ${wine.vintage}`}
                          image={wine.image || 'http://ei.isnooth.com/multimedia/7/2/8/image_610047_square.png'} description={`<strong>Region:</strong> ${this.getRegion(wine.region)}`}
                        />
                        
                        <ResultsCards
                          title={recipe.title}
                          subtitle={recipe.publisher}
                          image={recipe.image_url}
                          link={recipe.source_url}
                        />
                        
                        <ResultsCards
                          title={movie.original_title}
                          image={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
                        />
                      </div>
                    </div>
                  }  
                </div> 
          </div>

        <Footer />  
      </div>
    );
  }
}

export default Results;