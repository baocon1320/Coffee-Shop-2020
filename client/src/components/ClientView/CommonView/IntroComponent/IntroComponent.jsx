import React from 'react';
import './IntroComponent.scss';

function IntroTest(props) {
  //console.log(props.introDetail);
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active"></div>
      </div>
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="overlay"></div>
            <img className="d-block w-100 h-80" src={props.introDetail.src} alt={props.introDetail.alt} />
          </div>
          <div className="carousel-caption justify-content-center d-none d-md-block">
            <h1 className="text-uppercase font-weigth-bold">{props.introDetail.text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroTest;