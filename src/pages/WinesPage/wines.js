import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../../components/NavBar';
import './wines.css';
import Footer from '../../components/Footer';
import WineCards from '../../components/WineCards';
import Results from '../ResultsPage/results';
import Loader from '../../components/Loader';

const apiKey = 'bzd8dn636bwpjnzlqwxpl2u8s060jdzpgb8mpw71q11z6zuc';

class Wines extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      lwin: '',
      wineName: '',
      wineColor: 'red',
      wines: [],
      selectedWine: null
    }
  }

  componentDidMount() {
    this.loadWines();
  }

  selectWine = wine => {
    this.setState({
      selectedWine: wine
    });
  }

  loadWines = () => {
    const { wineName, wineColor } = this.state;

    axios.get(`http://api.snooth.com/wines/`, {
      params: {
        akey: apiKey,
        q: wineName || 'wine',
        photos: '1',
        color: wineColor,
        t: 'wine',
        n: 100
      }  
    })
    .then(res => {
      this.setState({
        wines: res.data.wines
      });
    });
  }

  handleFilter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.loadWines()
    })
  };

  searchWine = e => {
    e.preventDefault();
    this.loadWines();
  }

  render() {
    const { wineColor, wines, selectedWine } = this.state;

    if (selectedWine) return <Results wine={selectedWine} />;

    const  colorList = ['red', 'white', 'rose', 'amber', 'clear'];

    return (
      <div className="Wines">
        <Nav />

        <div className="Container">
          <div className="box1">
          <div className="filter-search">
            <div className="wine-list">
              <h3>Filter your search</h3>

              {/* <ul className="list">
                <li className="category-name">Search</li>
                <li>
                  <form onSubmit={e => this.searchWine(e)}>
                    <div className="form-group">
                      <input type="text" value={wineName} onChange={e => this.setState({ wineName: e.target.value })} className="form-control" placeholder="Search" />
                    </div>
                  </form>
                </li>
              </ul> */}
              
              <ul className="list">
                <li className="category-name">Color</li>
                {
                  colorList.map(wine => (
                    <li key={wine}>
                      <label>
                        <input 
                          checked={wine === wineColor}
                          value={wine} 
                          type="checkbox" 
                          name="wineColor" 
                          onChange={this.handleFilter} /> {wine}
                      </label>                    
                    </li>
                    )
                  )
                }
              </ul>
            </div>  
          </div>
          </div>
          <div className="box2">
          {!wines.length &&
            <Loader />
          }
          {wines.length &&
            <div className="wine-cards">
              <WineCards wines={wines || []} selectWine={this.selectWine} />
            </div>  
          }
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Wines;