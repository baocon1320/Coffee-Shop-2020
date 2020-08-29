import React from 'react';
import Background from '../../../resouces/images/AboutImages/bg_2.jpg';
import './SubAbout.scss';
let sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: '0em - 15em',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  // backgroundRttachment: 'fixed',
  opacity: ' 0.9',
};

export default function AboutNetwork() {
  const random = function () {
    return Math.floor(Math.random() * 100000);
  };

  const Network = [
    {
      icon: 'fas fa-mug-hot',
      data: 100,
      content: 'Coffee Branches',
    },
    {
      icon: 'fas fa-mug-hot',
      data: 85,
      content: 'number of awards',
    },
    {
      icon: 'fas fa-mug-hot',
      data: random(),
      content: 'happy customer',
    },
    {
      icon: 'fas fa-mug-hot',
      data: 1000,
      content: 'staff',
    },
  ];
  const netWorkRender = Network.map(function (data) {
    return (
      <div class="text-center">
        <div class="text p-4 m-5">
          <div class="icon network-icon">
            <i
              className={data.icon}
              style={{
                fontSize: '3em',

                border: '1px solid  rgb(177, 140, 89)',
                padding: '.5em',
              }}
            ></i>
          </div>
          <h3
            style={{
              color: ' rgb(177, 140, 89)',
            }}
          >
            {data.data}
          </h3>
          <span
            style={{
              color: 'lightgrey',
            }}
          >
            {data.content}
          </span>
        </div>
      </div>
    );
  });
  return (
    // <div class="container opacity-5">
    //   <div class="d-flex flex-row flex-md-column justify-content-center">
    //     <div class="col-md-10">
    //       <div class="row justify-content-center align-items-center">
    //
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    // <div className="container">
    // <div className="row">
    <div style={sectionStyle}>
      <div class="d-flex flex-md-row flex-column justify-content-center flex-wrap ">
        {netWorkRender}
      </div>
    </div>
    // </div>
  );
}
