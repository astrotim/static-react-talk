import React, { Component } from 'react';
import { createClient } from 'contentful';
import { snapshot } from 'react-snapshot';

const { SPACE_ID, ACCESS_TOKEN } = {
  SPACE_ID: 'hdp0fun8agz7',
  ACCESS_TOKEN:
    '714ce8678f77fcda557192a68152f3807461a9795c870ade7fd285f1b14d9c46'
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };
  }

  componentDidMount() {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    });

    snapshot(() =>
      client.getEntry(this.props.match.params.id).then(entry => {
        return entry;
      })
    )
      .then(post => {
        this.setState({ post });
      })
      .catch(console.error);
  }

  render() {
    const postHeading = this.state.post
      ? this.state.post.fields.title
      : 'Loading...';

    const postContent = this.state.post ? this.state.post.fields.content : null;

    return (
      <div>
        <h1>{postHeading}</h1>
        {postContent}
      </div>
    );
  }
}

export default Post;
