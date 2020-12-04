import React from 'react';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutNetWorkData() {
  const random = function () {
    return Math.floor(Math.random() * 100000);
  };
  const Network = [
    {
      icon: <StoreOutlinedIcon style={{ fontSize: '3em' }} />,
      data: 100,
      content: 'Coffee Branches',
    },
    {
      icon: <VerifiedUserOutlinedIcon style={{ fontSize: '3em' }} />,
      data: 85,
      content: 'number of awards',
    },
    {
      icon: <PeopleAltOutlinedIcon style={{ fontSize: '3em' }} />,
      data: random(),
      content: 'happy customer',
    },
    {
      icon: <FreeBreakfastOutlinedIcon style={{ fontSize: '3em' }} />,
      data: 1000,
      content: 'staff',
    },
  ];

  const netWorkRender = Network.map(function (data, i) {
    return (
      <Col key={i} sm={12} md={6} lg={3}>
        <div className="">
          <div
            className="  "
            style={{
              margin: '2em',
            }}
          >
            <span
              className=" "
              style={{
                padding: '2em',
                border: '1px solid rgb(177, 140, 89)',
                color: 'rgb(177, 140, 89)',
              }}
            >
              {data.icon}
            </span>
          </div>
          <h3
            style={{
              color: ' rgb(177, 140, 89)',
            }}
          >
            {data.data}
          </h3>
          <p
            style={{
              color: 'lightgrey',
            }}
          >
            {data.content}
          </p>
        </div>
      </Col>
    );
  });
  return (
    <Container className="text-center  " style={{ padding: '10em' }}>
      <Row>{netWorkRender} </Row>
    </Container>
  );
}
