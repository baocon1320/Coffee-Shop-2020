import React from 'react';
import BlogImages from '../../../../resouces/images/blogs/BlogImages';
// console.log(BlogImages);
const Blog = () => {
  let test = function (image) {
    console.log(image);
    return (
      <React-Fragment>
        <div class="media pb-2">
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
  };

  let image = [];
  for (let i = 0; i < 3; i++) {
    image = BlogImages[i];
  }
  // const BlogImage = BlogImages.map(function (image, index) {

  // return (
  //   <React-Fragment>
  //     <div class="media ">
  //       <img
  //         src={image.src}
  //         class="mr-3"
  //         alt="..."
  //         width={100}
  //         height={100}
  //         style={{ borderRadius: '0%' }}
  //       />
  //       <div class="media-body text-secondary">
  //         <h5 class="mt-0">{image.title} </h5>

  //         <p>
  //           <i class="far fa-calendar-alt mr-4">
  //             <span> {image.date}</span>
  //           </i>
  //           <i class="fas fa-user mr-4">
  //             <span> {image.admin}</span>
  //           </i>
  //           <i class="far fa-comment-dots">
  //             <span> {image.comments}</span>
  //           </i>
  //         </p>
  //       </div>
  //     </div>
  //   </React-Fragment>
  // );
  // });
  return (
    <div className="blogs footer-item ">
      <h2 className="text-uppercase mb-4 footer-intro">recent blog</h2>
      {/* {BlogImage} */}
      {test(image)}
      {test(image)}
    </div>
  );
};

export default Blog;
