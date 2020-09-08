import AboutData from '../../../../../resouces/images/AboutImages/AboutDataSet';
import React from 'react';

export default function CustomersData() {
  const AboutDataItem = AboutData.map(function (data, i) {
    return (
      <div className="about-component-customer " key={i}>
        <div className="col-lg align-self-sm-end p-3 ">
          <div className="testimony overlay">
            <blockquote>
              <p>{data.content}</p>
            </blockquote>
            <div className="author d-flex mt-4">
              <div className="image mr-3 align-self-center">
                <img
                  src={data.src}
                  alt={data.alt}
                  style={{ width: '4em' }}
                  className="rounded-circle"
                />
              </div>
              <div className="name align-self-center">
                {data.name} <span className="position">{data.job}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-lg-row flex-column flex-wrap about-customer-data mt-5">
      {AboutDataItem}
    </div>
  );
}
