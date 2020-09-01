import React, { useState, useRef } from 'react';
import SubMenuDesserts from './SubMenuDesserts.jsx';
import SubMenuDrinks from './SubMenuDrinks.jsx';
import './SubMenu.scss';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import MenuIntro from './MenuIntro/MenuIntro';
// import SubMenuData from './SubMenuData/SubMenuData';
// import DessertImages from '../../../../resouces/images/menuImages/dessertImages';
// import DrinkImages from '../../../../resouces/images/menuImages/drinkImages';
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
    <div ref={sectionRef} className="SubMenu p-5">
      <MenuIntro />
      <div className="navbar-menu">
        <div className="navbar-container">
          <ul className="navbar-list fadeIn">
            <li
              className="menu-list "
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <a href="/#">Desserts</a>
            </li>
            <li className="menu-list">
              <a href="/#">Drinks</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fadeIn">
        {isShown && <SubMenuDesserts />}
        <SubMenuDrinks />
        {/* <SubMenuData menuData={[DessertImages]} /> */}
      </div>
    </div>
  );
};

export default SubMenuView;
