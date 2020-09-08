import React, { Component } from 'react';

import Footer from '../CommonView/Footer/Footer';
import SubBlogView from './SubBlogView/SubBlogView.jsx';
import IntroComponent from '../CommonView/IntroComponent/IntroComponent';
class BlogView extends Component {
  render() {
    return (
      <div>
        <IntroComponent introDetail={this.props.introDetail} />
        <SubBlogView />
        <Footer />
      </div>
    );
  }
}

export default BlogView;
