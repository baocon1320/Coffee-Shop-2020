import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView/HomeView";
//import MenuView from '../MenuView/MenuView/MenuView';
import DashBoardView from "../DashBoardView/DashBoardview";
import NavBar from "../CommonView/NavBar/NavBar";
import ServiceView from "../ServiceView/ServiceView";
import BlogView from "../BlogView/BlogView";
import ContactView from "../ContactView/ContactView";
import AboutView from "../AboutView/AboutView";
import React, { useState, Suspense, useEffect } from "react";
import introDetail from "../../resouces/Text/Intro/introDetail.js";
import Footer from "../CommonView/Footer/Footer";
import SpinnerView from "../CommonView/SpinnerView/SpinnerView";
import AlertPanel from "../CommonView/AlertPanel/AlertPanel"; // handle error
import useHttpClient from "../../share/hook/http-hook";
import CartView from "../Cart/CartView/CartView";
import RegisterView from "../Register/RegisterView/RegisterView";
import LoginView from "../Login/LoginView/LoginView";
import CheckOutView from "../CheckOutView/CheckOutView";
import PrivateRoute from "../auth/PrivateRoute";
import AdminRoute from "../auth/AdminRoute";
import AdminDashBoardView from "../AdminDashBoardView/AdminDashBoardview";
import ShowProduct from "../MenuView/SubMenuView/ShowProduct";
import Orders from "../AdminDashBoardView/DashMainBoard/Orders";
import Profile from "../DashBoardView/DashMainBoard/Profile";
import UpdateProduct from "../AdminDashBoardView/DashMainBoard/UpdateProduct";
import UpdateCategory from "../AdminDashBoardView/DashMainBoard/updateCategory";
// Spliting code using lazy
const MenuView = React.lazy(() => import("../MenuView/MenuView"));

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
          process.env.REACT_APP_BACKEND_URL + "/info"
        );
        setInfoData(responseData);
      } catch (err) {}
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
            <Switch>
              <Route exact path={`/`}>
                <HomeView infoData={infoData} />
              </Route>
              <Route exact path={`/home`}>
                <HomeView infoData={infoData} />
              </Route>
              <Route exact path={`/menu`}>
                <MenuView introDetail={introDetail.menu} />
              </Route>
              <Route exact path={`/service`}>
                <ServiceView introDetail={introDetail.services} />
              </Route>
              <Route exact path={`/blog`}>
                <BlogView introDetail={introDetail.blog} />
              </Route>
              <Route exact path={`/about`}>
                <AboutView introDetail={introDetail.about} />
              </Route>
              <Route exact path={`/contact`}>
                <ContactView introDetail={introDetail.contact} />
              </Route>
              <Route exact path={`/cart`}>
                <CartView introDetail={introDetail.cart} />
                <Route />
              </Route>
              <Route exact path={`/register`}>
                <RegisterView introDetail={introDetail.contact} />
                <Route />
              </Route>
              <Route exact path={`/login`}>
                <LoginView introDetail={introDetail.contact} />
              </Route>
              <Route exact path={`/checkout`}>
                <CheckOutView introDetail={introDetail.checkout} />
              </Route>
              <AdminRoute exact path={`/admin/dashboard`}>
                <AdminDashBoardView introDetail={introDetail.dashboard} />
              </AdminRoute>

              <AdminRoute path={"/admin/orders"} exact component={Orders} />
              <Route exact path={`/user/dashboard`}>
                <DashBoardView introDetail={introDetail.dashboard} />
              </Route>
              <Route
                path={"/product/:productId"}
                exact
                component={ShowProduct}
              />
              <PrivateRoute
                path={"/profile/:userId"}
                exact
                component={Profile}
              />
              <AdminRoute
                path="/admin/product/update/:productId"
                exact
                component={UpdateProduct}
              />
              <AdminRoute
                path="/admin/category/update/:categoryId"
                exact
                component={UpdateCategory}
              />
            </Switch>
          </Suspense>
          <Footer infoData={infoData} />
        </Router>
      )}
      {isLoading && <SpinnerView role="loading" />}
    </React.Fragment>
  );
}

export default App;
