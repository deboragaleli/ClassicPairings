import React, { Component } from 'react';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Carousel from '../../components/HomeCarousel';
import UserActions from '../../components/UserActionsModal';
import WineItem from './WineItem';

import wine1 from '../../images/wine1@2x.png';
import wine2 from '../../images/wine2@2x.png';
import wine3 from '../../images/wine3@2x.png';
import wine4 from '../../images/wine4@2x.png';

import './home.scss';

const featuredWines = [
  {
    title: 'Cantina Riff Pinot Grigio delle Venezie',
    subtitle: 'Pinot Grigio',
    image: wine1,
    code: '201-premiere-alois-lageder-pinot-grigio-cantina-riff-2011'
  },
  {
    title: 'Alamos Chardonnay, Mendoza',
    subtitle: 'Chardonnay',
    image: wine2,
    code: 'alamos-chardonnay-2015-2'
  },
  {
    title: 'The Pinot Project California ',
    subtitle: 'Pinot Noir',
    image: wine3,
    code: 'the-pinot-project-california-pinot-noir-2012'
  },
  {
    title: 'Chateau Peyrassol Côtes de Provence',
    subtitle: 'Rosé',
    image: wine4,
    code: 'chateau-de-peyrassol-cotes-de-provence-rose-nv'
  }
]

class Home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      typeModal: 'sign-up',
      showModal: false
    };
  }

  toggleModal(action) {
    this.setState({
      showModal: !this.state.showModal,
      typeModal: action
    });
  }

  render() {
    const { showModal, typeModal } = this.state;

    return (
      <div className="Home">
        <Nav>
          <h1>Wine, Recipe &amp; Movie Pairing</h1>
          <h2>Wine, Recipe &amp; Movie recommendations for hundreds of dishes and films.</h2>
        </Nav>

        <UserActions
          showModal={showModal}
          typeModal={typeModal}
          toggleModal={() => this.toggleModal('')}
        />

        <div className="container main-content">
          <Carousel />

          <div className="row">
            <div className="col-sm-12">
              <h2 className="featured-title">Featured Wines</h2>
            </div>
          </div>

          <div className="row featured-wines">

            { featuredWines.map((wine, key) => {
              return (
                <div key={key} className="col-md-3">
                  <WineItem
                    title={wine.title}
                    subtitle={wine.subtitle}
                    image={wine.image}
                    code={wine.code}
                  />
                </div>
              )
            }) }
            
          </div>

        </div>

        

        <Footer />  
      </div>
    );
  }
}

export default Home;