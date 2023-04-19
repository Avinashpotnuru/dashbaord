import React from "react";

import { Row, Card, Col } from "reactstrap";

import { User } from "react-feather";

const UserAttendanceCards = () => {
  return (
    <Row className="match-height">
      <Col sm="12">
        <Row className="match-height">
          <Col sm="3">
            <Card>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>
                  <h1>0</h1>

                  <p>Total Absents</p>
                </div>
                <div
                  style={{ backgroundColor: "#d9f2ff" }}
                  className="d-flex justify-content-center align-items-center rounded-circle p-2"
                >
                  <User />
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>
                  <h1>365</h1>

                  <p>Total Presents</p>
                </div>
                <div
                  style={{ backgroundColor: "#d9f2ff" }}
                  className="d-flex justify-content-center align-items-center rounded-circle p-2"
                >
                  <User />
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>
                  <h1>0</h1>

                  <p>Total Attendance</p>
                </div>
                <div
                  style={{ backgroundColor: "#d9f2ff" }}
                  className="d-flex justify-content-center align-items-center rounded-circle p-2"
                >
                  <User />
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>
                  <h1>0</h1>

                  <p>Total Approved</p>
                </div>
                <div
                  style={{ backgroundColor: "#d9f2ff" }}
                  className="d-flex justify-content-center align-items-center rounded-circle p-2"
                >
                  <User />
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>
                  <h1>0</h1>

                  <p>Total UnApproved</p>
                </div>
                <div
                  style={{ backgroundColor: "#d9f2ff" }}
                  className="d-flex justify-content-center align-items-center rounded-circle p-2"
                >
                  <User />
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>
                  <h1>0</h1>

                  <p>Total Days</p>
                </div>
                <div
                  style={{ backgroundColor: "#d9f2ff" }}
                  className="d-flex justify-content-center align-items-center rounded-circle p-2"
                >
                  <User />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UserAttendanceCards;
