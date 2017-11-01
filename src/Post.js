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

  render() {
    let title;
    let content;

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
  }
}

export default Post;
