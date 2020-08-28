import React from 'react';
import AboutData from '../../../resouces/images/AboutImages/AboutDataSet';
// import bg_1 from '../../../resouces/images/AboutImages/bg_1.jpg';
import './SubAbout.scss';
export default function AboutCustomers() {
  const AboutDataItem = AboutData.map(function (data) {
    console.log(data);
    return (
      <div className="about-component-customer  " style={{ width: '20%' }}>
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
    <div className="about-main-customer">
      <div class="col-md-7 mx-auto about-customer text-center">
        <div className="about-sub-customer">
          <span className="">Testimony</span>
          <h2 className=" fadeIn">CUSTOMERS SAYS</h2>
          <p className="fadeIn">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap about-customer-data mt-5">
        {AboutDataItem}
      </div>
    </div>
  );
}
