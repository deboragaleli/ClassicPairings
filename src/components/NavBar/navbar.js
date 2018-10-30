import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../Auth';
import UserActions from '../UserActionsModal';

import logo from '../../images/logo.png';

import './navbar.scss';

const auth = new Auth();

class Nav extends Component {
 constructor(props) {
   super(props);

   this.state = {
     typeModal: 'sign-up',
     showModal: false,
     auth: false
   };
 }

 componentDidMount(){
  this.handleAuthentication(this.props);
}

  handleAuthentication = () => {
    if (/access_token|id_token|error/.test(window.location.hash)) {
      auth.handleAuthentication();
      
      setTimeout(() => {
        this.setState({
          auth: true
        });
      }, 500);
    }
  }

 toggleModal(action) {
   this.setState({
     showModal: !this.state.showModal,
     typeModal: action
   });
 }

 logout() {
   auth.logout();
   this.setState({
     auth: !this.state.auth
   }, () => window.location.reload());

 }

 render() {
   const { showModal, typeModal } = this.state;
   const { bg } = this.props;

   let headerStyle = {};

   if(bg) {
     headerStyle = {
       backgroundImage: `url(${bg})`
     }
   }

   return (
     <div>
       <UserActions
          showModal={showModal}
          typeModal={typeModal}
          toggleModal={() => this.toggleModal('')}
        />

       <div className="header" style={headerStyle}>
        <div className="container nav-container">
          <div className="logo">
            <Link to="/">
              <img alt="logo" src={logo}/>
            </Link>
          </div>
          <ul className="navigation">
            <li><Link to="/wines">Wines</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/movies">Movies</Link></li>

            <li className="divider"></li>

            { !auth.isAuthenticated() ? (
              <React.Fragment>
                <li className='userInfo' onClick={() => this.toggleModal('sign-in')}>
                  <span>
                    Sign In
                  </span>
                </li>
                <li onClick={() => this.toggleModal('sign-up')}>
                  <span>
                    Sign Up
                  </span>
                </li>
              </React.Fragment>
              ) : (
                <li onClick={() => this.logout()}>
                  <span>
                    Logout
                  </span>
                </li>
              )}
          </ul>
          
            { this.props.children &&
              <div className="header-title">
              { this.props.children }
              </div>
            }
         </div>
       </div>
     </div>
   );
 }
}

export default Nav;