import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../HomeView/HomeView/HomeView';
//import MenuView from '../MenuView/MenuView/MenuView';
import DashBoardView from '../DashBoardView/DashBoardview';
import NavBar from '../CommonView/NavBar/NavBar';
import ServiceView from '../ServiceView/ServiceView';
import BlogView from '../BlogView/BlogView';
import ContactView from '../ContactView/ContactView';
import AboutView from '../AboutView/AboutView';
import React, { useState, Suspense, useEffect } from 'react';
import introDetail from '../../resouces/Text/Intro/introDetail.js';
import Footer from '../CommonView/Footer/Footer';
import SpinnerView from '../CommonView/SpinnerView/SpinnerView';
import AlertPanel from '../CommonView/AlertPanel/AlertPanel'; // handle error
import useHttpClient from '../../share/hook/http-hook';
import CartView from '../Cart/CartView/CartView';
import RegisterView from '../Register/RegisterView/RegisterView';
import LoginView from '../Login/LoginView/LoginView';
import CheckOutView from '../CheckOutView/CheckOutView';
// Spliting code using lazy
const MenuView = React.lazy(() => import('../MenuView/MenuView'));

//export default class App extends Component {
function App() {
  const [infoData, setInfoData] = useState();
  //const [error, setError] = useState();
  //const [alert, setAlert] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  const {
    isLoading,
    alert,
    error,
    sendRequest,
    alertHandler,
  } = useHttpClient();

  // useEffect to fetch the data for the first time only without redenring
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/info'
        );
        setInfoData(responseData);
      } catch (err) {}
      /*
      setIsLoading(true);
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + '/info'
        );
        const responseData = await response.json();
        // Thow error if the response code is 400 or 500 level
        if (!response.ok) {
          console.log(responseData.message + " response code " + response.status);
          throw new Error(responseData.message + " response code " + response.status);
        }
        setInfoData(responseData);
        // catching error
      } catch (err) {
        console.log("homepage error " + err.message);
        setAlert(true);
        setError(err.message);
      }
      setIsLoading(false);
      */
    };
    fetchData();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <AlertPanel
        onClose={alertHandler}
        heading="HomePage Loading Error"
        content={error}
        alert={alert}
      ></AlertPanel>
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
              <Route
                path="/dashboard"
                element={<DashBoardView introDetail={introDetail.dashboard} />}
              />
            </Routes>
          </Suspense>
          <Footer infoData={infoData} />
        </Router>
      )}
      {isLoading && <SpinnerView role="loading" />}
    </React.Fragment>
  );
}

export default App;
