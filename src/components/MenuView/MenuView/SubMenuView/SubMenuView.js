import React, { useState, useRef } from 'react';
import SubMenuDesserts from './SubMenuDesserts';
import SubMenuDrinks from './SubMenuDrinks';
import './SubMenu.scss';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const SubMenuView = () => {
  const [isShown, setIsShown] = useState(false);

  //create animation onscroll
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '100px',
    threshold: 0.1,
  });
  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 10,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.1
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn');
  return (
    <div ref={sectionRef} className="SubMenu">
      <div class="col-md-7 mx-auto">
        <span className="subheading fadeIn">Discover</span>
        <h2 className="intro-menu fadeIn">Our Products</h2>
        <p className="description-menu fadeIn">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="navbar-menu">
        <div className="navbar-container">
          <ul className="navbar-list fadeIn">
            <li
              className="menu-list "
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <a>Desserts</a>
            </li>
            <li className="menu-list">
              <a>Drinks</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fadeIn">
        {isShown && <SubMenuDesserts />}
        <SubMenuDrinks />
      </div>
    </div>
  );
};

export default SubMenuView;
