import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function AboutMenuSection() {
  return (
    <Card style={{ width: '35rem' }} className="text-right mt-5 bg-dark mb-5">
      <Card.Body>
        <Card.Title style={{ fontSize: '2em' }}>Discover</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '2em' }}>
          Our Menu
        </Card.Subtitle>
        <Card.Text>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </Card.Text>
        <Button
          variant="light"
          className="btn btn-primary btn-outline-primary px-4 py-3"
          placeholder="View Full Menu"
        >
          View Full Menu
        </Button>
      </Card.Body>
    </Card>

    // <div>
    //   <div className="col-md-6 pr-md-5">
    //     <div className="heading-section text-md-right ">
    //       <span className="subheading">Discover</span>
    //       <h2 className="mb-4"></h2>
    //       <p className="mb-4">
    //         Far far away, behind the word mountains, far from the countries
    //         Vokalia and Consonantia, there live the blind texts. Separated they
    //         live in Bookmarksgrove right at the coast of the Semantics, a large
    //         language ocean.
    //       </p>

    //       <input
    //         style={{ height: '100%' }}
    //         className="btn btn-primary btn-outline-primary px-4 py-3"
    //         placeholder="View Full Menu"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
