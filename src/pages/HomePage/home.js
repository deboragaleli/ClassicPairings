import React, { Component } from 'react';
import './home.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Carousel from '../../components/HomeCarousel';
import UserActions from '../../components/UserActionsModal';

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
        <Nav />

        <UserActions
          showModal={showModal}
          typeModal={typeModal}
          toggleModal={() => this.toggleModal('')}
        />

        <div className="Container">
        <Carousel />
        </div>
        <div className="pack2">
          <div className="wine-info">
            <h1 className="wine-info-title">Wine, Recipe & Movie Pairing</h1>
          <div className="wines-texts">
            <h2 className="wine-info-subtitle">Wine, Recipe & Movie recommendations for hundreds of dishes and films.</h2>
            <h3 className="wine-info-text">Pair you favorite wine, a delicious dish and a classic movie that compliments its mood and nuances and you'll have an unforgettable experience.</h3>
            <button className="getstarted btn btn-secondary" onClick={() => this.toggleModal('sign-up')}>Get Started</button>
          </div>  
          </div>  
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Home;