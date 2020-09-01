import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingpage';

const App = (props) => {
    return (
     <Router>
        <Switch>
            <Route path="/" exact component={LandingPage} />
      </Switch>
     </Router>
    );
};

export default App;
