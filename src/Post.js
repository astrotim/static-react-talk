import React, { Component } from 'react';

class Post extends Component {
  render() {
    // console.log('Post render', this.props);

    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Post;
