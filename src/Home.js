import React from 'react';
import { Link } from 'react-router-dom';
import { createClient } from 'contentful';

class Home extends React.Component {
  state = {
    posts: []
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
    if (!this.state.posts.length) return null;

    return this.state.posts.map(post => (
      <Link key={post.sys.id} to={`post/${post.sys.id}/`}>
        <img width="100" src={post.fields.image.fields.file.url} alt="" />
        {post.fields.title}
      </Link>
    ));
  }
}

export default Home;
