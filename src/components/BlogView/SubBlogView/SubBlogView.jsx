import React from 'react';
import drinkImage from '../../../resouces/images/menuImages/drinkImages';
import { Card } from 'react-bootstrap';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/Message';
export default function SubBlogView() {
  const blog = drinkImage.map(function (image, i) {
    return (
      <Card
        key={i}
        style={{ width: '18rem' }}
        className="m-2 bg-transparent border-transparent"
      >
        <Card.Img
          variant="top"
          src={image.src}
          alt={image.date}
          width={300}
          height={300}
        />
        <Card.Body>
          <p>
            <CalendarTodayIcon />
            <span> {image.date}</span>
            <GroupIcon />
            <span> {image.admin}</span>
            <MessageIcon />
            <span> {image.comments}</span>
          </p>
          <Card.Title>{image.title}</Card.Title>
          <Card.Text>{image.content}</Card.Text>
        </Card.Body>{' '}
      </Card>
    );
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-flex flex-row flex-wrap justify-content-center mb-5">
          {blog}
        </div>
      </div>
    </div>
  );
}
