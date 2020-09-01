import React from 'react';
import about from '../../../../resouces/images/AboutImages/about.jpg';
import '../SubAbout.scss';
export default function AboutStory() {
  return (
    <div className="d-md-flex flex-row about-story">
      <div className="first-half" style={{ backgroundImage: `url(${about})` }}>
        {/* <img src={about} alt="about-img" /> */}
      </div>
      <div class="col-md-7 mx-auto about-intro">
        <div className="about-sub-intro">
          <span className="subheading fadeIn">Discover</span>
          <h2 className="intro-menu fadeIn">Our Products</h2>
          <p className="description-menu fadeIn">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>
      </div>
    </div>
  );
}
