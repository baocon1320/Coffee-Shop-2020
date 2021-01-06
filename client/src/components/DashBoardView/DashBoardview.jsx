import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import DashSideBoard from "./DashSideBoard/DashSideBoard";
import DashMainBoard from "./DashMainBoard/DashMainBoard";
import "./DashBoardView.scss";
import { isAuthenticated } from "../auth";

const DashBoardview = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();
  const token = isAuthenticated().token;

  // const init = (userId, token) => {
  //   getPurchaseHistory(userId, token).then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setHistory(data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   init(_id, token);
  // }, []);
  return (
    <div>
      <div className="dashboard-intro">
        <h1>Welcome Back</h1>
        <h3>{`G'day ${name}!`}</h3>
      </div>
      <div className="dashboard-container">
        <div class="dashboardMain__title">Account Infomation</div>
        <DashSideBoard UserInfo={[name, email]} />
      </div>
    </div>
  );
};

export default DashBoardview;
