import AboutData from '../../../../../resouces/images/AboutImages/AboutDataSet';
import React from 'react';

export default function CustomersData() {
  const AboutDataItem = AboutData.map(function (data) {
    console.log(data);
    return (
      <div className="about-component-customer  ">
        <div class="col-lg align-self-sm-end p-3 ">
          <div class="testimony overlay">
            <blockquote>
              <p>{data.content}</p>
            </blockquote>
            <div class="author d-flex mt-4">
              <div class="image mr-3 align-self-center">
                <img
                  src={data.src}
                  alt=""
                  style={{ width: '4em' }}
                  className="rounded-circle"
                />
              </div>
              <div class="name align-self-center">
                {data.name} <span class="position">{data.job}</span>
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
