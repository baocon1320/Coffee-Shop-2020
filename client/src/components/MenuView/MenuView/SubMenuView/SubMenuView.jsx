import React, { useState, useRef } from 'react';
import SubMenuDesserts from './SubMenuDesserts.jsx';
import SubMenuDrinks from './SubMenuDrinks.jsx';
import './SubMenu.scss';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import MenuIntro from './MenuIntro/MenuIntro';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// import SubMenuData from './SubMenuData/SubMenuData';
// import DessertImages from '../../../../resouces/images/menuImages/dessertImages';
// import DrinkImages from '../../../../resouces/images/menuImages/drinkImages';
const SubMenuView = () => {
  const [isShown, setIsShown] = useState(false);
  const [drinkIsShow, drinkIsShown] = useState(true);

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
    <div ref={sectionRef} className="p-5 text-center">
      <MenuIntro />
      <ButtonGroup aria-label="Basic example" className="mt-5 mb-5 fadeIn">
        <Button
          variant="outline-light"
          size="lg"
          className="mr-5 rounder"
          onMouseEnter={() => setIsShown(true)}
          onMouseOver={() => drinkIsShown(false)}
        >
          Desserts
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          className=" rounder"
          onMouseEnter={() => setIsShown(false)}
          onMouseOver={() => drinkIsShown(true)}
        >
          Drinks
        </Button>
      </ButtonGroup>

      <div className="fadeIn">
        {isShown && <SubMenuDesserts />}
        {drinkIsShow && <SubMenuDrinks />}
      </div>
    </div>
  );
};

export default SubMenuView;
