import React from 'react';
import Gallery from './pages/Gallery'
import Categories from './pages/Categories'
import Category from './pages/Category'
import SinglePhoto from './pages/SinglePhoto';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Gallery />
    </Route>
    <Route exact path="/categories">
      <Categories />
    </Route>
    <Route
          path="/photos/:id"
          children={<SinglePhoto />}
        />
     <Route
           path="/categories/:id"
       component={Category} />

    </Switch>
   </Router>
  );
}

export default App;
