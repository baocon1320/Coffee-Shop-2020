import React from 'react';
import '.././SubAbout.scss';
import AboutMenuSection from './AboutMenuSection/AboutMenuSection';
import AboutMenuImages from './AboutMenuImage/AboutMenuImage';
export default function AboutMenu() {
  return (
    <div class="container mt-5 mb-5">
      <div class="row align-items-center">
        <div class="col-md">
          <AboutMenuSection />
        </div>
        <div class="col-md">
          <AboutMenuImages />
        </div>
      </div>
    </div>
  );
}
