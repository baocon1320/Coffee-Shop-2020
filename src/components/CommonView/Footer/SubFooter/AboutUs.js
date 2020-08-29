import React, { useRef } from 'react';
//import '../Footer.scss';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

function AboutUs() {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  // Animation for fading in
  const fadeInAbout = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 10,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOutAbout = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOutAbout('.fadeInAbout')
    : fadeInAbout('.fadeInAbout');
  return (
    <div>
      <h4>About Us</h4>
      <p>Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.</p>
    </div>

    /*
    <div ref={sectionRef} className="d-flex flex-column footer-item">
      <h2 className="text-uppercase mb-4 footer-intro">ABOUT US</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className="about-icon fadeInAbout">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </div>
    */
  );
};

export default AboutUs;
