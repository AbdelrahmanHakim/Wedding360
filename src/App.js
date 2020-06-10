import React from 'react';
import WeddingIdeas from './pages/WeddingIdeas'
import Categories from './pages/Categories'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <WeddingIdeas />
    </Route>
    
    </Switch>
   </Router>
  );
}

export default App;
