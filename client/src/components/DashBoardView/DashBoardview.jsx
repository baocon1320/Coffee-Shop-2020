import React, { Component } from 'react';
import DashSideBoard from './DashSideBoard/DashSideBoard';
import DashMainBoard from './DashMainBoard/DashMainBoard';
import './DashBoardView.scss';

export default class DashBoardview extends Component {
  render() {
    return (
      <div>
        <div className="dashboard-intro">
          <h1>My Account</h1>
          <h3>get user name</h3>
        </div>
        <div className="dashboard-container">
          <div class="dashboardMain__title">Account Infomation</div>
          <DashSideBoard />
        </div>
      </div>
    );
  }
}
