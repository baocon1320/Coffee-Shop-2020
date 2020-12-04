import React, { Component } from 'react';
import SubBlogView from './SubBlogView/SubBlogView.jsx';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
class BlogView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <SubBlogView />
      </div>
    );
  }
}

export default BlogView;
