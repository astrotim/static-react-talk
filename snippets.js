// AWS bucket policy
{
    "Version": "2012-10-17",
    "Id": "Policy1508931890211",
    "Statement": [
        {
            "Sid": "Stmt1508931884511",
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::static-react-talk/*"
        }
    ]
}

// React Router

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

<BrowserRouter>
// app is nested inside
</BrowserRouter>

<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/post" component={Post} />
</Switch>

<Link to="/">Home</Link>
<Link to="/post/">Post</Link> // trailing slash is important

// Contentful

// Home.js
import { createClient } from 'contentful';

const { SPACE_ID, ACCESS_TOKEN } = {
  SPACE_ID: 'hdp0fun8agz7',
  ACCESS_TOKEN:
    '714ce8678f77fcda557192a68152f3807461a9795c870ade7fd285f1b14d9c46'
};

componentWillMount() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  client
    .getEntries({})
    .then(response => {
      this.setState({
        posts: response.items
      });
    })
    .catch(console.error);
}

<Link key={post.sys.id} to={`${post.sys.id}/`}>
  <div>{post.fields.title}</div>
</Link>

// Post.js
constructor(props) {
  super(props);

  this.state = {
    data: null
  };
}

componentWillMount() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  client
    .getEntry(this.props.match.params.id)
    .then(response => {
      this.setState({
        data: response.fields
      });
    })
    .catch(console.error);
}

if (this.state.data) {
  title = this.state.data.title;
  content = this.state.data.content;
}

return (
  <div>
    <h1>{title}</h1>
    {content}
  </div>
);

// add Card component

import React from 'react';
import './Card.css';

const Cards = props => <div className="cards">{props.children}</div>;

const Card = props => (
  <div className="card">
    <img src={props.src} alt="" />
    <h2>{props.title}</h2>
  </div>
);

export { Card, Cards };

// with css

.cards {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 30rem) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 50rem) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.card {
  position: relative;
  overflow: hidden;
}

.card img {
  vertical-align: bottom;
  width: 100%;
}

.card h2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  margin: 0;
  padding: 1rem;
}
