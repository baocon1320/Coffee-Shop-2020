import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import axios from 'axios';

import './style.scss';
function NavBar() {

/*  
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);
  const accessToken = JSON.parse(localStorage.getItem('user'));

  const authAxios = axios.create({
    headers: {
      'auth-token': accessToken,
      'Content-Type': 'application/json',
    },
  });
  let handleGetCartProducts = async () => {
    await authAxios
      .get('http://localhost:5000/orders')
      .then((response) => {
        setCount(response.data.count);
        setLoad(true);
      })
      .catch((error) => {
        console.log(error);
        setLoad(false);
      });
  };
  const logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userID');

    window.location.reload(false);
  };
  useEffect(() => {
    handleGetCartProducts();
  }, []);
  */
  /*
  const renderElement = () => {
    let userId = accessToken;
    if (userId) {
      return (
        <Nav>
          <NavLink className="nav-link" to="/home" onClick={logOut}>
            logout
          </NavLink>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavLink className="nav-link" to="/register">
            register
          </NavLink>

          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </Nav>
      );
    }
  };
  */

  return (
    <Navbar
      bg="black"
      expand="lg"
      variant="dark"
      className="ftco-navbar-light"
      fixed="top"
    >
      <Navbar.Brand href="/">
        GOC <small>Cafe</small>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink
            exact="true"
            to="/home"
            className="nav-link"
            activeClassName="link-active"
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/menu"
            className="nav-link"
            activeClassName="link-active"
          >
            Menu
          </NavLink>
          {
          //<NavLink
          //  to="/Service"
          //  className="nav-link"
          //  activeClassName="link-active"
          //>
          //  Service
          //</NavLink>
          //<NavLink
          //  to="/Blog"
          // className="nav-link"
          //  activeClassName="link-active"
          //>
          //  Blog
          //</NavLink>
          
          //<NavLink
          //  to="/About"
          //  className="nav-link"
          //  activeClassName="link-active"
          //>
          // About
          //</NavLink>
          }
          <NavLink className="nav-link" to="/contact" activeClassName="link-active" >
            Liên hệ
          </NavLink>
          {
          //<NavLink className="nav-link" to="/Cart">
          //  <ShoppingCartIcon />
          //  {count}
          // </NavLink>
          }
        </Nav>

        {
        //renderElement()
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
