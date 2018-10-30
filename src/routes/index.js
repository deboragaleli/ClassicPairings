import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authenticator from '../Authenticator';
import Home from '../pages/HomePage';
import Join from '../pages/JoinPage';
import Wines from '../pages/WinesPage';
import Recipes from '../pages/RecipesPage';
import Movies from '../pages/MoviesPage';
// import Events from '../pages/EventsPage';
// import Contact from '../pages/ContactPage';

const Routes = () => (
  <Router>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Authenticator} />
        <Route exact path="/join" component={Join} />

        <Route exact path="/wines" render={ props => <Wines key={Date.now()} {...props} /> } />
        <Route exact path="/wines/:wine_code" render={ props => <Wines key={Date.now()} {...props} /> } />

        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/movies" component={Movies} />
        {/* <Route exact path="/events" component={Events} /> */}
        {/* <Route exact path="/contactus" component={Contact} /> */}
     </Switch>
  </Router> 
 );
 


export default Routes;