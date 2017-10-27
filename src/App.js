import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import logo from './logo.svg';
import './App.css';

const { SPACE_ID, ACCESS_TOKEN } = process.env;
const apiUrl = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`;

class App extends Component {
  constructor() {
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
