import React, { Component } from 'react';
import { createClient } from 'contentful';

const { SPACE_ID, ACCESS_TOKEN } = {
  SPACE_ID: 'hdp0fun8agz7',
  ACCESS_TOKEN:
    '714ce8678f77fcda557192a68152f3807461a9795c870ade7fd285f1b14d9c46'
};

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null
    };
  }

  // componentDidMount() {
  //   const client = createClient({
  //     space: SPACE_ID,
  //     accessToken: ACCESS_TOKEN
  //   });
  //
  //   client
  //     .getEntries()
  //     .then(response => {
  //       const posts = response.items;
  //       this.setState({ posts });
  //     })
  //     .catch(console.error);
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <p>blog post...</p>
      </div>
    );
  }
}

export default Post;
