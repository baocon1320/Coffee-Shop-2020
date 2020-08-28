import React from 'react';
import menu4 from '../../../resouces/images/AboutImages/menu-4.jpg';
import menu1 from '../../../resouces/images/AboutImages/menu-1.jpg';
import menu2 from '../../../resouces/images/AboutImages/menu-2.jpg';
import menu3 from '../../../resouces/images/AboutImages/menu-3.jpg';
import './SubAbout.scss';
export default function AboutMenu() {
  return (
    <div class="container mt-5">
      <div class="row align-items-center">
        <div class="col-md-6 pr-md-5">
          <div class="heading-section text-md-right ftco-animate fadeInUp ftco-animated">
            <span class="subheading">Discover</span>
            <h2 class="mb-4">Our Menu</h2>
            <p class="mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            <input
              style={{ height: '100%' }}
              class="btn btn-primary btn-outline-primary px-4 py-3"
              placeholder="View Full Menu"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div class="menu-entry">
                <img
                  src={menu1}
                  class="img"
                  style={{ width: '100%' }}
                  alt="menu1"
                />{' '}
              </div>
            </div>
            <div class="col-md-6">
              <div class="menu-entry mt-lg-4">
                <img
                  alt="menu2"
                  class="img"
                  src={menu2}
                  style={{ width: '100%' }}
                />{' '}
              </div>
            </div>
            <div class="col-md-6">
              <div class="menu-entry">
                <img
                  class="img"
                  src={menu3}
                  alt="menu3"
                  style={{ width: '100%' }}
                />{' '}
              </div>
            </div>
            <div class="col-md-6">
              <div class="menu-entry mt-lg-4">
                <img
                  class="img"
                  src={menu4}
                  alt="menu4"
                  style={{ width: '100%' }}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
