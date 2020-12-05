import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import DashMainBoard from '../DashMainBoard/DashMainBoard';
import DashAccInfo from '../DashMainBoard/DashAccInfo';
export default function DashSideBoard() {
  return (
    <div className="dashboardMain">
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dash-dropdown"
                >
                  menu
                </Dropdown.Toggle>
                <Dropdown.Menu className="dash-menu">
                  <Nav variant="pills" className="flex-column dash-nav-color">
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="first">
                        Account Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="second">
                        Address
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="third">
                        Orders
                      </Nav.Link>
                    </Nav.Item>{' '}
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="fourth">
                        Sign Out
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <DashAccInfo />
                </Tab.Pane>
                <Tab.Pane eventKey="second">address</Tab.Pane>
                <Tab.Pane eventKey="third">
                  <DashMainBoard />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">sign out</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
