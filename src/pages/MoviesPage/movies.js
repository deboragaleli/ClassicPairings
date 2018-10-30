import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/NavBar';
import MovieCards from '../../components/MovieCards';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import './movies.css';

const apiKey = 'bb8fc13dd42a95bd2852111e40ea8f23';

class Movies extends Component {

  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      movies: [],
      movie_id: '',
      purchase_web_sources: '',
      purchase_android_sources: '',
      purchase_ios_sources: '',
      genres: '',

    }
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=1950&sort_by=vote_average.desc&api_key=${apiKey}`)
    .then(res => {

      this.setState({
        movies: res.data.results
      });

    });
  }

  handleFilter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  render() {
    const { movies } = this.state;

    return (
      <div className="Movies">
        <Nav>
          <h1 className="page-title">Movies</h1>
        </Nav>

        <div className="container main-content">
          <div className="box2">
          {!movies.length &&
            <Loader />
          }
          {movies.length && 
            <div className="movie-cards">
              <MovieCards movies={movies} />
            </div> 
          }
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Movies;