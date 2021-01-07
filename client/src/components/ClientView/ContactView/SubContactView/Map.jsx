import React from 'react';

export default function Map() {
  return (
    <div className="text-center mt-5 mb-5 ">
      <iframe
        src="https://maps.google.com/maps?q=Tiem%20dien%20xuan%20cuong%20trung%20hoa%20dak%20lak&t=&z=13&ie=UTF8&iwloc=&output=embed"
        class="border border-light rounded"
        style={{ width: '70%', height: '25rem', border: '0' }}
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        title="trung hoa cafe"
      ></iframe>
    </div>
  );
}
//create a link here
//https://www.embedgooglemap.net/