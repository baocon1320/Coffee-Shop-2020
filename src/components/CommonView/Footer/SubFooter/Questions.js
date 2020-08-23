import React from "react";
import "../Footer.scss";
const Questions = () => {
  return (
    <div className="questions">
      <h2>have a questions?</h2>
      <ul>
        <li>
          <span>
            {" "}
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <span>
            203 Fake St. Mountain View, San Francisco, California, USA
          </span>
        </li>
        <li>
          <span>
            {" "}
            <i class="fas fa-phone-alt"></i>
          </span>
          <span>+2 392 3929 210</span>
        </li>
        <li>
          <span>
            {" "}
            <i class="fas fa-envelope"></i>
          </span>
          <span> info@yourdomain.com</span>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
