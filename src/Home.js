import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { createClient } from 'contentful';
import { Cards, Card } from './Card';

class Home extends Component {
  state = {
    posts: null
  };

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
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

  render() {
    return (
      <Cards>
        <Helmet title="Index page for static React site" />
        {this.state.posts &&
          this.state.posts.map(post => (
            <Link key={post.sys.id} to={`post/${post.sys.id}/`}>
              <Card
                src={post.fields.image.fields.file.url}
                title={post.fields.title}
              />
            </Link>
          ))}
      </Cards>
    );
  }
}

export default Home;
