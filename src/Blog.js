import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

const { SPACE_ID, ACCESS_TOKEN } = {
  SPACE_ID: 'hdp0fun8agz7',
  ACCESS_TOKEN:
    '714ce8678f77fcda557192a68152f3807461a9795c870ade7fd285f1b14d9c46'
};

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      posts: null
    };
  }

  componentDidMount() {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    });

    client
      .getEntries()
      .then(response => {
        const posts = response.items;
        this.setState({ posts });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        {this.state.posts &&
          this.state.posts.map(post => {
            console.log(post);
            return (
              <Link key={post.sys.id} to={post.sys.id}>
                {post.fields.title}
              </Link>
            );
          })}
      </div>
    );
  }
}

export default Blog;
