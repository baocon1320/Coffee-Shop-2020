import React from "react";
import SubMenuDesserts from "./SubMenuDesserts";
import SubMenuDrinks from "./SubMenuDrinks";
import "./SubMenu.css";
const SubMenuView = () => {
  return (
    <div className="SubMenu">
      <div class="col-md-7 mx-auto">
        <span className="subheading">Discover</span>
        <h2 className="intro-menu">Our Products</h2>
        <p className="description-menu">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-list">
            <li className="menu-list">
              <a>Desserts</a>
            </li>
            <li className="menu-list">
              <a>Drinks</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className="navbar ">
        <div className="collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Desserts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Drinks</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <SubMenuDesserts />
      <SubMenuDrinks />
    </div>
  );
};

export default SubMenuView;
