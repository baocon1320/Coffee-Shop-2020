import React from 'react';
import BlogImages from '../../../../resouces/images/blogs/BlogImages';
const Blog = () => {
  const BlogImage = BlogImages.map(function (image) {
    const newImage = [];
    // if (image.length === 1) {
    //   newImage = [...image];
    // }
    console.log(image);
    // console.log(newImage)
    return (
      <React-Fragment>
        <div class="media ">
          <img
            src={image.src}
            class="mr-3"
            alt="..."
            width={100}
            height={100}
            style={{ borderRadius: '0%' }}
          />
          <div class="media-body text-secondary">
            <h5 class="mt-0">{image.title} </h5>

            <p>
              <i class="far fa-calendar-alt mr-4">
                <span> {image.date}</span>
              </i>
              <i class="fas fa-user mr-4">
                <span> {image.admin}</span>
              </i>
              <i class="far fa-comment-dots">
                <span> {image.comments}</span>
              </i>
            </p>
          </div>
        </div>
      </React-Fragment>
    );
  });
  return (
    <div className="blogs footer-item ">
      <h2 className="text-uppercase mb-4 footer-intro">recent blog</h2>
      {BlogImage}
    </div>
  );
};

export default Blog;
