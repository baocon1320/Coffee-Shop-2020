import React from "react";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import DashAccInfo from "../DashMainBoard/DashAccInfo";
import AddCategory from "../DashMainBoard/AddCategory";
import AddProduct from "../DashMainBoard/AddProduct";
import Orders from "../DashMainBoard/Orders";
import ManageProducts from "../DashMainBoard/ManageProducts";
export default function DashSideBoard(props) {
  console.log();

  return (
    <div className="dashboardMain">
      <div className="container">
        <Tab.Container
          aria-expanded="true"
          id="left-tabs-example"
          defaultActiveKey="first"
        >
          <Row>
            <Col sm={3}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="dash-dropdown stay-open"
                >
                  Admin menu
                </Dropdown.Toggle>
                <Dropdown.Menu className="stay-open dash-menu" show>
                  <Nav variant="pills" className="flex-column dash-nav-color">
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="first">
                        Account Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="second">
                        Create Category
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="third">
                        Create Product
                      </Nav.Link>
                    </Nav.Item>{" "}
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="fourth">
                        View Orders
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="dash-nav-color" eventKey="fifth">
                        Manage Products
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <DashAccInfo userInfo={props} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <AddCategory />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <AddProduct />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Orders />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <ManageProducts />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
