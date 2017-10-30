import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Static React</h1>
          </header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog/">Blog</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog/" component={Blog} />
            <Route path="/blog/:id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
