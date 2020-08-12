import React from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {Nav} from './components/Nav';
import HomePage from './Homepage';

// we are loading the homepage component with a type prop which will determine what posts to show
function App() {
  return (
    <Router>
    <Nav></Nav>
    <Switch>
        <Route path="/" exact key="allPosts" render={() => <HomePage type="all"/>}></Route>
        <Route path="/news" key="newsPosts" render={() => <HomePage type={'News'} />}></Route>
        <Route path="/travel" key="travelPosts" render={() => <HomePage type={'Travel'} /> } ></Route>
        <Route path="/development" key="developmentPosts" render={() => <HomePage type={'Development'} /> }></Route>
    </Switch>        
</Router>
  );
}

export default App;
