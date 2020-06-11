import React from 'react';
import Gallery from './pages/Gallery'
import Categories from './pages/Categories'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import SinglePhoto from './pages/SinglePhoto';
function App() {

  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Gallery />
    </Route>
    <Route  path="/categories">
      <Categories />
    </Route>
    <Route
          path="/photos/:id"
          children={<SinglePhoto />}
        ></Route>

    </Switch>
   </Router>
  );
}

export default App;
