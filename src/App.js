import React, { Component } from 'react';
// import logo from './logo.svg';
import Routes from './routes';
//import {ApolloProvider,} from 'react-apollo';
import './App.css';



//import createClient from './apollo/create-client';
//import RepoInfoWithData from './react/repo-info-issues';

//const token = 'YOUR TOKEN HERE';
//const client = createClient(token);

// class App extends Component {
//   render() {
 
//     return (
 
//       <div className="App">
//           <div className="App-header">
//            <img src={logo} className="App-logo" alt="logo" />
//            <h2>Welcome to React</h2>
//           </div>
//           <p className="App-intro">
//               To get started, edit <code>src/App.js</code> and save to reload.
//           </p>
//       </div>
//       );
//   }
// }

//dynamically populated by either the HomePage or the Results component
  class App extends Component {
    render() {
      return (
        <div>
          <Routes />        
        </div>
    );
  }
}


export default App;







      