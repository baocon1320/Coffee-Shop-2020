import React, { useState } from 'react';
import SubMenuDesserts from './SubMenuDesserts';
import SubMenuDrinks from './SubMenuDrinks';
import './SubMenu.scss';
const SubMenuView = () => {
  const [isShown, setIsShown] = useState(false);

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
      <div className="navbar-menu">
        <div className="navbar-container">
          <ul className="navbar-list">
            <li
              className="menu-list"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <a>Desserts</a>
            </li>
            <li className="menu-list">
              <a>Drinks</a>
            </li>
          </ul>
        </div>
      </div>

      {isShown && <SubMenuDesserts />}
      <SubMenuDrinks />
    </div>
  );
};

export default SubMenuView;
