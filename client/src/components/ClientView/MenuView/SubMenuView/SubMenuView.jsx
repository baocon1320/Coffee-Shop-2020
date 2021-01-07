import React, { useState, useRef, useEffect } from 'react';
import './SubMenu.scss';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import MenuIntro from './MenuIntro/MenuIntro';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Products from './Products/Products';

import AlertPanel from '../../CommonView/AlertPanel/AlertPanel';// handle error
import SpinnerView from '../../CommonView/SpinnerView/SpinnerView'; // For Spinner View
//import Drinks from './Products/Drinks';
//import Desserts from './Products/Dessert';


// For send request and handle request error
import useHttpClient from '../../../../share/hook/http-hook';

function SubMenuView(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [shownItems, setShownItems] = useState([]);
  const [categories, setCategories] = useState([]);

  // Handle reuests
  const {isLoading, alert, error, sendRequest, alertHandler} = useHttpClient();

  // useEffect to fetch the data for the first time only without redenring
  useEffect(() => {
    const fetchData = async () => {
      try{
        const responseCategories = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/category', 'GET', null, {});
        setCategories(responseCategories.category);
        //console.log('category ');
        //console.log(responseCategories);

        const responseMenuItems = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/products', 'GET', null, {});
        setMenuItems(responseMenuItems.products);
        //console.log("menu items");
        //console.log(responseMenuItems);
        
        // Set initial shownItems
        if(responseCategories.category.length > 0){
          const initialShownItem = responseMenuItems.products.filter(item => item.category._id === responseCategories.category[0].id);
          setShownItems(initialShownItem);
        }
        
      }  catch (err){

      };
    };
    fetchData();

  }, [sendRequest]);

  // Function to filter the menu items based on catefory
  function filterShowItems(category){
    const filterItems = menuItems.filter((item) => item.category._id === category);
    setShownItems(filterItems);
  }


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

  //TODO: Recheck Fade In Fade Out
  if(document.getElementsByClassName('fadeIn').length > 0){
    intersection && intersection.intersectionRatio < 0.1
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn');
  }
 
  return (
    <React.Fragment>
      <AlertPanel onClose={alertHandler} heading="Menu Loading Error" content={error} alert={alert}></AlertPanel>
      <div ref={sectionRef} className="p-5 text-center">
        <MenuIntro />
        {isLoading && <SpinnerView role="loading" />}
        {!isLoading && categories.length > 0 && ( 
          <ButtonGroup aria-label="Basic example" className="mt-5 mb-5 fadeIn">
            {categories.map((category) => {
              return (
                <Button
                  key={category.id}
                  variant="outline-light"
                  size="lg"
                  className="mr-5 rounder"
                  onMouseDown={() => {
                    filterShowItems(category.id);
                    //log(shownItems); 
                  }}>{category.name}</Button>
              );
            })}
          </ButtonGroup>
        )}
        <div className="fadeIn">
          
          {!isLoading && menuItems.length > 0 &&  shownItems.length > 0 && ( 
            
            <Products items={shownItems} />
          )}
          {!isLoading && menuItems.length > 0 &&  shownItems.length == 0 && ( 
            
            <h4 className="text-warning">Sản phẩm sẽ sớm cập nhập thôi, bạn quay lại sau nhé!</h4>
          )}
        </div>
      </div>
      
    </React.Fragment>



    /*
    <div ref={sectionRef} className="p-5 text-center">
      <MenuIntro />
      <ButtonGroup aria-label="Basic example" className="mt-5 mb-5 fadeIn">
      <Button
          variant="outline-light"
          size="lg"
          className="mr-5 rounder"
          onMouseDown={() => {
            setIsShown(false)
            drinkIsShown(true)
          }}
          //onMouseOver={() => drinkIsShown(true)}
        >
          Drinks
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          className="rounder"
          onMouseDown={() => {
            setIsShown(true)
            drinkIsShown(false)
          }}
          //onMouseEnter={() => setIsShown(true)}
          //onMouseOver={() => drinkIsShown(false)}
        >
          Desserts
        </Button>
      </ButtonGroup>
      <div className="fadeIn">
        {drinkIsShow && <Drinks />}
        {isShown && <Desserts />}        
      </div>
    </div>
  */
  );
};

export default SubMenuView;
