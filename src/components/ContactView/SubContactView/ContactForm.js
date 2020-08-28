import React from 'react';

export default function ContactForm() {
  return (
    <div className="Contact-info">
      <h3>Get In Touch</h3>
      <form className="Contact-form">
        <div className="d-flex flex-row mb-2">
          <input
            className="mr-2"
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>{' '}
          <input type="email" placeholder="Email Please"></input>
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className=" w-100"
        ></input>
        <textarea
          className="mb-2 mt-2 d-block w-100"
          style={{ height: '10rem' }}
          placeholder="message"
        ></textarea>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
