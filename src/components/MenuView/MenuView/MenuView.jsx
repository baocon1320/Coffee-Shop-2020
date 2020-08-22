import React, { Component } from "react";

import { Image } from "react-bootstrap";
import image3 from "../../../resouces/images/backgroundImages/bg_3.jpg";
import Desserts from "./Desserts";
import Drinks from "./Drinks.js";
import SubMenuView from "./SubMenuView/SubMenuView";
class MenuView extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Image src={image3} fluid />
        <div class="container-md mt-5">
          <div class="row">
            <div class="col">
              <Desserts />
            </div>
            <div class="col">
              <Drinks />
            </div>
          </div>
        </div>
        <SubMenuView />
      </div>
    );
  }
}

export default MenuView;
