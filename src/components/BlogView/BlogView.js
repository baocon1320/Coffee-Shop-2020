import React, { Component } from 'react';
import image3 from '../../resouces/images/backgroundImages/bg_3.jpg';
import { Image } from 'react-bootstrap';
import Footer from '../CommonView/Footer/Footer';
import SubBlogView from './SubBlogView/SubBlogView';

class BlogView extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Image src={image3} fluid />
        <SubBlogView />
        <Footer />
      </div>
    );
  }
}

export default BlogView;
