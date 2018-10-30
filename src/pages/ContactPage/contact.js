import React, { Component } from 'react';
import './contact.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer/footer';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Nav />
        <div className="Container">
          <div className="item">25</div>
          <div className="item">26</div>
          <div className="item">27</div>
          <div className="item">28</div>
        </div> 
        <Footer /> 
      </div>
    );
  }
}

export default Contact;