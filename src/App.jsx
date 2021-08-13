import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <div className="layout">
      <h1 aria-label="cartoon">Rick and Morty</h1>
      <img src={`${process.env.PUBLIC_URL}/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png`} width="100%" alt="cartoon" />
     </div>
        <Router>
        <Switch>
          <Route path="/results/:name/:status/:gender">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
