import React from 'react';

export default function AboutMenuSection() {
  return (
    <div>
      <div className="col-md-6 pr-md-5">
        <div className="heading-section text-md-right ">
          <span className="subheading">Discover</span>
          <h2 className="mb-4">Our Menu</h2>
          <p className="mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>

          <input
            style={{ height: '100%' }}
            className="btn btn-primary btn-outline-primary px-4 py-3"
            placeholder="View Full Menu"
          />
        </div>
      </div>
    </div>
  );
}
