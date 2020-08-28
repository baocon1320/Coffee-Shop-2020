import React from 'react';

export default function ContactForm() {
  return (
    <div className="Contact-info">
      <h3>Get In Touch</h3>
      <form className="Contact-form">
        <div className="d-flex flex-row mb-1">
          <input
            className="mr-4"
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>{' '}
          <input type="email" placeholder="Email Please"></input>
        </div>

        <input type="text" name="subject" placeholder="Subject"></input>
        <textarea
          class="mb-3 mt-3"
          style={{ height: '10rem' }}
          placeholder="message"
        ></textarea>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
}
