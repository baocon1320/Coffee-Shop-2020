import React from 'react';
import '../SubAbout.scss';
import AboutNetworkData from './AboutNetWorkData/AboutNetWorkData';
import Background from '../../../../resouces/images/AboutImages/bg_2.jpg';

let sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: '0em - 15em',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '30em',
  // backgroundRttachment: 'fixed',
  opacity: ' 0.9',
};

export default function AboutNetwork() {
  return (
    <div style={sectionStyle}>
      <div>
        <AboutNetworkData />
      </div>
    </div>
  );
}
