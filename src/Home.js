import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

const { SPACE_ID, ACCESS_TOKEN } = {
  SPACE_ID: 'hdp0fun8agz7',
  ACCESS_TOKEN:
    '714ce8678f77fcda557192a68152f3807461a9795c870ade7fd285f1b14d9c46'
};

class Home extends Component {
  state = {
    posts: null
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

  render() {
    return (
      <div>
        {this.state.posts &&
          this.state.posts.map(post => (
            <Link key={post.sys.id} to={`post/${post.sys.id}/`}>
              <div>{post.fields.title}</div>
              <img src={post.fields.image.fields.file.url} alt="" />
            </Link>
          ))}
      </div>
    );
  }
}

export default Home;
