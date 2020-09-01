import React, { useRef } from 'react';
import serviceImages from '../../../resouces/images/serviceImages/serviceImages';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { Card } from 'react-bootstrap';
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
      <Card
        key={i}
        ref={sectionRef}
        style={{ width: '18rem' }}
        className="m-2 fadeIn bg-transparent border-transparent"
      >
        <Card.Img
          variant="top"
          src={image.src}
          alt={image.date}
          width={300}
          height={300}
          className="bg-white"
        />
        <Card.Body>
          <Card.Title>{image.title}</Card.Title>
          <Card.Text>{image.content}</Card.Text>
        </Card.Body>{' '}
      </Card>
    );
  });
  return (
    <div className="d-flex justify-content-center  flex-column   flex-lg-row align-items-center mt-5 mb-5">
      {service}
    </div>
  );
}
