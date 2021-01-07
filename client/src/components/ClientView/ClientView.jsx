import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './HomeView/HomeView/HomeView';
import NavBar from './CommonView/NavBar/NavBar';
import ContactView from './ContactView/ContactView';

// Unused imports
/*
import HomeView from '../ClientView/HomeView/HomeView/HomeView';
//import MenuView from '../MenuView/MenuView/MenuView';
import NavBar from '../ClientView/CommonView/NavBar/NavBar';
import ServiceView from '../ClientView/ServiceView/ServiceView';
import BlogView from '../ClientView/BlogView/BlogView';
import ContactView from '../ClientView/ContactView/ContactView';
import AboutView from '../ClientView/AboutView/AboutView';
import introDetail from '../../resouces/Text/Intro/introDetail.js';
import CartView from '../ClientView/Cart/CartView/CartView'
import RegisterView from '../ClientView/Register/RegisterView/RegisterView'
import LoginView from '../ClientView/Login/LoginView/LoginView'
import CheckOutView from '../ClientView/CheckOutView/CheckOutView'
*/


// Spliting code using lazy
const MenuView = React.lazy(() => import('../ClientView/MenuView/MenuView'));
function ClientView(props){
    const infoData = props.infoData;
    return (
        <React.Fragment>
          <NavBar />
            <Routes>
              <Route path="/*" element={<HomeView infoData={infoData} />} />
              <Route path="/home" element={<HomeView infoData={infoData} />} />
              <Route
                path="/menu"
                element={<MenuView menuInfo={infoData.info.menuImage} />}
              />
              <Route
                path="/contact"
                element={<ContactView infoData={infoData} />}
              />
              {
                /*
                <Route path="/home" element={<HomeView infoData={infoData} />} />
              <Route
                path="/menu"
                element={<MenuView menuInfo={infoData.info.menuImage} />}
              />
              <Route
                path="/service"
                element={<ServiceView introDetail={introDetail.services} />}
              />
              <Route
                path="/blog"
                element={<BlogView introDetail={introDetail.blog} />}
              />
              <Route
                path="/about"
                element={<AboutView introDetail={introDetail.about} />}
              />
              <Route
                path="/contact"
                element={<ContactView infoData={infoData} />}
              />
               <Route
                path="/cart"
                element={<CartView introDetail={introDetail.cart} />}
              />
               <Route
                path="/register"
                element={<RegisterView introDetail={introDetail.contact} />}
              />
               <Route
                path="/login"
                element={<LoginView introDetail={introDetail.contact} />}
              />
                <Route
                path="/checkout"
                element={<CheckOutView introDetail={introDetail.checkout} />}
              />
               */
              }
            </Routes>
        </React.Fragment>
        

        
        );
}

export default ClientView;