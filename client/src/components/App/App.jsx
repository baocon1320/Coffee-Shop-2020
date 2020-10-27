import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../HomeView/HomeView/HomeView';
//import MenuView from '../MenuView/MenuView/MenuView';
import NavBar from '../CommonView/NavBar/NavBar';
import ServiceView from '../ServiceView/ServiceView';
import BlogView from '../BlogView/BlogView';
import ContactView from '../ContactView/ContactView';
import AboutView from '../AboutView/AboutView';
import React, { useState, Suspense, useEffect } from 'react';
import introDetail from '../../resouces/Text/Intro/introDetail.js';
import Footer from '../CommonView/Footer/Footer';
import SpinnerView from '../CommonView/SpinnerView/SpinnerView';
import CartView from '../Cart/CartView/CartView'
import RegisterView from '../Register/RegisterView/RegisterView'
import LoginView from '../Login/LoginView/LoginView'
import CheckOutView from '../CheckOutView/CheckOutView'
// Spliting code using lazy
const MenuView = React.lazy(() => import('../MenuView/MenuView'));

//export default class App extends Component {
function App() {
  const [infoData, setInfoData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to fetch the data for the first time only without redenring
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + '/info'
        );
        const responseData = await response.json();

        // Thow error if the response code is 400 or 500 level
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setInfoData(responseData);

        // catching error
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      {!isLoading && infoData && (
        <Router>
          <NavBar />
          <Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomeView infoData={infoData} />} />
              <Route path="/home" element={<HomeView infoData={infoData} />} />
              <Route
                path="/menu"
                element={<MenuView introDetail={introDetail.menu} />}
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
                path="/About"
                element={<AboutView introDetail={introDetail.about} />}
              />
              <Route
                path="/contact"
                element={<ContactView introDetail={introDetail.contact} />}
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
            </Routes>
          </Suspense>
          <Footer infoData={infoData} />
          <SpinnerView role="loading" />
        </Router>
      )}
      {isLoading && <SpinnerView role="loading" />}
    </React.Fragment>
  );
}

export default App;
