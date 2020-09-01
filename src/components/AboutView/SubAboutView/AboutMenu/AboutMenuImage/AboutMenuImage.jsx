import React from 'react';
import menu4 from '../../../../../resouces/images/AboutImages/menu-4.jpg';
import menu1 from '../../../../../resouces/images/AboutImages/menu-1.jpg';
import menu2 from '../../../../../resouces/images/AboutImages/menu-2.jpg';
import menu3 from '../../../../../resouces/images/AboutImages/menu-3.jpg';
export default function AboutMenuImage() {
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-6">
          <div className="menu-entry">
            <img
              src={menu1}
              className="img"
              style={{ width: '100%' }}
              alt="menu1"
            />{' '}
          </div>
        </div>
        <div className="col-md-6">
          <div className="menu-entry mt-lg-4">
            <img
              alt="menu2"
              className="img"
              src={menu2}
              style={{ width: '100%' }}
            />{' '}
          </div>
        </div>
        <div className="col-md-6">
          <div className="menu-entry">
            <img
              className="img"
              src={menu3}
              alt="menu3"
              style={{ width: '100%' }}
            />{' '}
          </div>
        </div>
        <div className="col-md-6">
          <div className="menu-entry mt-lg-4">
            <img
              className="img"
              src={menu4}
              alt="menu4"
              style={{ width: '100%' }}
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
