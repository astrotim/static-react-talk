import React from 'react';
import { createClient } from 'contentful';

class Post extends React.Component {
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
    if (!this.state.data) return null;

    return (
      <div>
        <h1>{this.state.data.title}</h1>
        {this.state.data.content}
      </div>
    );
  }
}

export default Post;
