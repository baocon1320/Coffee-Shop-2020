import React from 'react';
import '../Footer.scss';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
const Questions = () => {
  return (
    <div className="questions footer-item">
      <h2 className="text-uppercase mb-4 footer-intro">have a questions?</h2>
      <ul className="list-unstyled">
        <li className="pt-2 h6">
          <span className="mr-1">
            {' '}
            <LocationOnIcon />
          </span>
          <span>
            203 Fake St. Mountain View, San Francisco, California, USA
          </span>
        </li>
        <li className="pt-2 h6">
          <span className="mr-1">
            {' '}
            <PhoneIcon />
          </span>
          <span>+2 392 3929 210</span>
        </li>
        <li className="pt-2 h6">
          <span className="mr-1">
            {' '}
            <MailIcon />
          </span>
          <span> info@yourdomain.com</span>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
