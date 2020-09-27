import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/Counter';
import { Route, Switch, BrowserRouter as Router, Link, } from 'react-router-dom';
import Gallery from './components/Gallery';
import About from './components/About';
import HitDetails from './components/HitDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <nav className="navbar navbar-expand navbar-brand ">

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/details/:id">details-route</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/home"></Route>
            <Route path="/counter" component={Counter}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/details/:id" component={HitDetails}></Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
