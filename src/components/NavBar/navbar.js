import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../Auth';
// import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import UserActions from '../UserActionsModal';
// import userInfo from '../userInfo';
import logo from '../../images/logo-wine.png';

import './navbar.css';

const auth = new Auth();

class Nav extends Component {
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

 logout() {
   auth.logout();
 }

 render() {
   const { showModal, typeModal } = this.state;
   return (
     <div>
       <UserActions
          showModal={showModal}
          typeModal={typeModal}
          toggleModal={() => this.toggleModal('')}
        />
       <div className="header">

         <div className="logo">
           <img alt="logo" src={logo}/>
         </div>
         <ul className="navigation">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/wines">Wines</Link></li>
           <li><Link to="/recipes">Recipes</Link></li>
           <li><Link to="/movies">Movies</Link></li>

           { !auth.isAuthenticated() ? (
            <React.Fragment>
              <li className='userInfo' onClick={() => this.toggleModal('sign-in')}>
                <span>
                  Sign In
                </span>
              </li>
              <li className='userInfo' onClick={() => this.toggleModal('sign-up')}>
                <span>
                  Sign Up
                </span>
              </li>
            </React.Fragment>
            ) : (
              <li className='userInfo' onClick={() => this.logout()}>
                <span>
                  Logout
                </span>
              </li>
            )}
         </ul>
       </div>
     </div>
   );
 }
}

export default Nav;