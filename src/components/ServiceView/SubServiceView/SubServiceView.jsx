import React, { useRef } from 'react';
import serviceImages from '../../../resouces/images/serviceImages/serviceImages';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
export default function SubServiceView() {
  //create animation onscroll
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });
  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.1
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn');
  const service = serviceImages.map(function (image, i) {
    return (
      <React-Fragment>
        <div
          ref={sectionRef}
          className="card m-5 p-1 fadeIn"
          style={{ width: '18rem' }}
        >
          <img
            className="card-img-top rounded img-fluid img-thumbnail"
            src={image.src}
            alt={image.alt}
            style={{ height: '15rem' }}
          />
          <div className="card-body">
            <h5 className="card-title">{image.title}</h5>
            <p className="card-text">{image.content}</p>
          </div>
        </div>
      </React-Fragment>
    );
  });
  return (
    <div className="d-flex justify-content-center  flex-column   flex-lg-row align-items-center mt-5">
      {service}
    </div>
  );
}
