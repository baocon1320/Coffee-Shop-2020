// import React from "react";
// import "../Footer.scss";
// const AboutUs = () => {
//   return (
//     <div className="about">
//       <h1>ABOUT US</h1>
//       <p>
//         Far far away, behind the word mountains, far from the countries Vokalia
//         and Consonantia, there live the blind texts.
//       </p>
//       <div className="about-icon">
//         <i className="fab fa-facebook-f"></i>
//         <i className="fab fa-instagram"></i>
//         <i className="fab fa-twitter"></i>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from 'react';
import '../Footer.scss';
const AboutUs = () => {
  return (
    <div className="d-flex flex-column footer-item">
      <h2 className="text-uppercase mb-4 footer-intro">ABOUT US</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="about-icon">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
  );
};

export default AboutUs;
