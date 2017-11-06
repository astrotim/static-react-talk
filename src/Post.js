import React, { Component } from 'react';
import { createClient } from 'contentful';
import Helmet from 'react-helmet';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
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
        <Helmet title={title} />
        <h1>{title}</h1>
        {content}
      </div>
    );
  }
}

export default Post;
