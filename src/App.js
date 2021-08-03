import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ActorListing from "./containers/ActorListing";
import Header from "./containers/Header";
import "./App.css";
import ActorDetails from "./containers/ActorDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteProductState from "./context/favoriteProduct/favoriteProductState";
import FavoriteProducts from "./pages/favoriteProducts/FavoriteProducts";
import View from "./containers/View";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <FavoriteProductState>
          <Switch>
            <Route path="/" exact component={ActorListing} />
        
            <Route path="/actor/:productId" component={ActorDetails} />

            <Route path="/favorites" component={FavoriteProducts} />
            <Route path="/actor/:productId" component={ActorDetails} />
            <Route path="/view" component={View} />

            <Route>404 Not Found!</Route>
          </Switch>
        </FavoriteProductState>
      </Router>
    </div>
  );
}

export default App;
