import React, { Component } from 'react';
import './events.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';

class Events extends Component {
  render() {
    return (
      <div className="Events">
        <Nav />
        <div className="Container">
          <div className="item">21</div>
          <div className="item">22</div>
          <div className="item">23</div>
          <div className="item">24</div>
        </div> 
        <Footer />  
      </div>
    );
  }
}

export default Events;