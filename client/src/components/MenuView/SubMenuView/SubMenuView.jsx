import React, { useState, useRef, useEffect } from "react";
import "./SubMenu.scss";
import { useIntersection } from "react-use";
import {
  getProducts,
  getCategories,
  getFilteredProducts,
} from "../../Core/apiCore";

import gsap from "gsap";
import MenuIntro from "./MenuIntro/MenuIntro";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "./MenuCard";
const SubMenuView = () => {
  const [isShown, setIsShown] = useState(false);
  const [drinkIsShow, drinkIsShown] = useState(true);
  //create animation onscroll
  const sectionRef = useRef(null);
  const [error, setError] = useState(false);
  const [filteredDrinkResults, setFilteredDrinkResults] = useState([]);
  const [filteredDessertResults, setFilteredDessertResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);

  const loadFilteredResultsDessert = (newFilters) => {
    getFilteredProducts(skip, limit, {
      category: "5fee5d2992a86042c49974bd",
    }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data.data);
        setFilteredDessertResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  const loadFilteredResultsDrink = (newFilters) => {
    getFilteredProducts(skip, limit, {
      category: "5fee5d2992a86042c49974bd",
    }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data.data);
        setFilteredDrinkResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
    loadFilteredResultsDessert(skip, limit, "asd");
    loadFilteredResultsDrink(skip, limit, "asd");
  }, []);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
  });
  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 10,
      ease: "power4.out",
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
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.1
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
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
      {/* show menu from client */}
      {/* <div className="fadeIn">
        {isShown && <SubMenuDesserts />}
        {drinkIsShow && <SubMenuDrinks />}
      </div> */}
      {/* show menu from server */}
      <div className="fadeIn">
        {/* {isShown && <Desserts />}
        {drinkIsShow && <Drinks />} */}

        <h2 className="mb-4">asd</h2>
        <div className="row">
          {filteredDrinkResults.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
      <h2 className="mb-4">Products</h2>
      <div className="row">
        {filteredDessertResults.map((product, i) => (
          <div key={i} className="col-4 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubMenuView;
