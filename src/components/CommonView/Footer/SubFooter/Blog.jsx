import React from 'react';
import BlogImages from '../../../../resouces/images/blogs/BlogImages';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
// console.log(BlogImages);
const Blog = () => {
  let test = function (image) {
    return (
      <React-Fragment>
        <div className="media pb-2">
          <img
            src={image.src}
            className="mr-3"
            alt="..."
            width={100}
            height={100}
            style={{ borderRadius: '0%' }}
          />
          <div className="media-body text-secondary">
            <h5 className="mt-0">{image.title} </h5>

            <p className="h6 mt-4">
              <span className="h6">
                <CalendarTodayIcon />
              </span>
              <span className="h6"> {image.date}</span>

              <span className="h6">
                <GroupIcon />
              </span>

              <span className="h6"> {image.admin}</span>

              <span className="h6">
                <MessageIcon />
              </span>

              <span className="h6"> {image.comments}</span>
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

  return (
    <div className="blogs footer-item ">
      <h2 className="text-uppercase mb-4 footer-intro">recent blog</h2>
      {test(image)}
      {test(image)}
    </div>
  );
};

export default Blog;
