import React from 'react';
import serviceImages from '../../../resouces/images/serviceImages/serviceImages';
export default function SubServiceView() {
  const service = serviceImages.map(function (image, i) {
    return (
      <React-Fragment>
        <div className="card m-5 p-1 " style={{ width: '18rem' }}>
          <img
            className="card-img-top rounded img-fluid img-thumbnail"
            src={image.src}
            alt="Card image cap"
            style={{ height: '15rem' }}
          />
          <div className="card-body">
            <h5 className="card-title">{image.title}</h5>
            <p className="card-text">{image.content}</p>
          </div>
        </div>
      </React-Fragment>
    );
  });
  return (
    <div className="d-flex flex-row justify-content-center">{service}</div>
  );
}
