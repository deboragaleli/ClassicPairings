import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';
import Loader from '../../components/Loader';
import './recipes.css';

const apiKey = 'a7065834b36529e3cf15043f9180d627';

class Recipes extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);

    this.state = {
      filterCriteria:'',
      recipes: [],
      page: 1
    }
  }

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    const { recipes, page } = this.state;

    axios.get(`https://www.food2fork.com/api/search?key=${apiKey}&q=&page=${page}`)
      .then(res => {
        if(!res.data.error) {
          this.setState({
            recipes: recipes.concat(res.data.recipes.filter(recipe => recipe.recipe_id !== '47024' && recipe.recipe_id !== '54489'))
          });
        }
      });
  }

  loadMore = () => {
    let { page } = this.state;

    this.setState({
      page: page + 1
    }, () => {
      this.loadRecipes();
    });
  }

  handleFilter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    const { recipes } = this.state;
    
    return (
      <div className="">
        <Nav />
        <div className="Container">
          <div className="box2">
            <div className="wine-cards">
              <RecipeCards recipes={recipes} />
              
                <div className="text-center load-more">
                { recipes.length ? 
                  <button onClick={() => this.loadMore()} className="btn btn-primary">Load More</button>
                : <Loader />}
                </div>
            </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Recipes;