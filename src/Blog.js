import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';
import { snapshot } from 'react-snapshot';

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

  // must be "Will" not "Did"
  componentWillMount() {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    });

    snapshot(() =>
      client.getEntries().then(response => {
        return response.items;
      })
    )
      .then(posts => {
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
            // console.log(post);
            return (
              <Link
                key={post.sys.id}
                to={{
                  pathname: `${post.sys.id}/`,
                  state: {
                    post: post
                  }
                }}
              >
                {post.fields.title}
              </Link>
            );
          })}
      </div>
    );
  }
}

export default Blog;
