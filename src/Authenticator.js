import React, { Component } from 'react';
import Auth from './Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    console.log(auth.handleAuthentication());
  }
}

class Authenticator extends Component {
  componentDidMount() {
    handleAuthentication(this.props);
  }

  render() {
    return <h1>Hi</h1>
  }
}

export default Authenticator