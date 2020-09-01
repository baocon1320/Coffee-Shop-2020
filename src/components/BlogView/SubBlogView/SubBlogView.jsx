import React from 'react';
import drinkImage from '../../../resouces/images/menuImages/drinkImages';
export default function SubBlogView() {
  const blog = drinkImage.map(function (image) {
    return (
      <div class="card m-3 curved" style={{ width: ' 25rem' }}>
        <img
          class="card-img-top"
          src={image.src}
          alt={image.date}
          style={{ height: ' 18rem' }}
        />
        <div class="card-body">
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
          <h5 class="card-title">{image.title}</h5>
          <p class="card-text">{image.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {blog}
        </div>
      </div>
    </div>
  );
}
