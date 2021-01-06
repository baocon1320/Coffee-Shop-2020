import SubMenuView from "./SubMenuView/SubMenuView.jsx";
import IntroComponent from "../CommonView/IntroComponent/IntroComponent";
import React from "react";

export default function MenuView(props) {
  return (
    <div>
      <IntroComponent introDetail={props.introDetail} />
      <SubMenuView />
    </div>
  );
}
