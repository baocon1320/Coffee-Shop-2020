import React from 'react';
import bg3 from '../../../resouces/images/backgroundImages/bg_3.jpg';
import './IntroComponent.scss';

export default function IntroTest(intro) {
  console.log(intro);
  return (
    <div>
      <div class="carousel-inner">
        <div class="carousel-item active"></div>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-80" src={bg3} alt="First slide" />
          </div>
          <div class="carousel-caption justify-content-center d-none d-md-block">
            <h1>{intro.introDetail.intro}</h1>
            <p class="breadcrumbs">
              <span class="mr-2">
                <a href="/#">{intro.introDetail.home}</a>
              </span>{' '}
              <span>
                <a href="/#">{intro.introDetail.intro}</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
