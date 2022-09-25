import React from "react";
import { Link } from "react-router-dom";
import { Tab, Row, Col, Nav } from "react-bootstrap";

const Test = () => {
  return (
    <div>
      <div className="pages-tabs">
        <div className="container">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col xs={12} md={12} lg={3} xl={3}>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Menu</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Women</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12} md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="row">
                      <h1 className="content-heading">Data Science and AI</h1>
                      <div className="col-xs-12 col-md-4 ">
                        <div
                          className="card mt-3 mb-3"
                          style={{ width: "18rem", height: "25rem" }}
                        >
                          <div className="card-body">
                            <h1>Certified Data Scientist</h1>
                            <h3>Basic - Advanced Level </h3>{" "}
                            <h3>
                              Popularly coveted Data Science Certification
                            </h3>
                            <p>
                              Certified Data Scientist is a job program that
                              ensures quality foundation in data science to
                              novice and intermediate learners who want to
                              explore the promptly moving data science domain.
                            </p>
                            <div
                              className="d-flex justify-content-between"
                              style={{ marginTop: "85px" }}
                            >
                              <img src="images/IABAC1.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default Test;
