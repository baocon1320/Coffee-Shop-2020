import React from "react";
//import '../Footer.scss';
import { Room, PhoneForwarded, MailOutlineSharp} from "@material-ui/icons";

function Contact() {
  const info = {
    address: "203 Fake St. Mountain View, San Francisco, California, USA",
    phoneNumber: "0905 151545",
    email: "baocon1320@gmail.com"
  }

  return (
    <div>
      <h4>Contact Us</h4>
      <ul className="list-unstyled">
        <li className="d-flex mb-2">
          <span className="mr-4"><Room /></span>
          <span>{info.address}</span>
        </li>
        <li className="d-flex mb-3">
          <span className="mr-4"><PhoneForwarded /></span>
          <span>{info.phoneNumber}</span>
        </li>
        <li className="d-flex">
          <span className="mr-4"><MailOutlineSharp /></span>
          <span>{info.email}</span>
        </li>
      </ul>
    </div>


    /*
    <div className="questions footer-item">
      <h2 className="text-uppercase mb-4 footer-intro">have a questions?</h2>
      <ul>
        <li>
          <span>
            {' '}
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <span>
            203 Fake St. Mountain View, San Francisco, California, USA
          </span>
        </li>
        <li>
          <span>
            {' '}
            <i class="fas fa-phone-alt"></i>
          </span>
          <span>+2 392 3929 210</span>
        </li>
        <li>
          <span>
            {' '}
            <i class="fas fa-envelope"></i>
          </span>
          <span> info@yourdomain.com</span>
        </li>
      </ul>
    </div>
    */
  );

};

export default Contact;
