import { pendingData } from "../data/data";

import profilePic from "../../../../../assets/images/srkimages/profile.png";

import {
  Badge,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardImgOverlay,
  CardText,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  InputGroup,
  Input,
  InputGroupText,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { Filter, ChevronDown, MapPin } from "react-feather";

import { Search } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
import { useState } from "react";
import TaskPendingCard from "../taskspending/taskPendingCard";
const SrkDashBoardCompleted = () => {
  const [formModal, setFormModal] = useState(false);
  return (
    <div>
      <Row className="match-height">
        <Col sm="12" className="my-1">
          <Row className="match-height">
            <Col sm="6" xl="8">
              <InputGroup className="input-group-merge mb-2">
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
                <Input />
              </InputGroup>
            </Col>
            <Col sm="6" xl="4">
              <div>
                <Button
                  className="d-flex justify-content-around align-items-center"
                  style={{
                    backgroundColor: "#3bc2f3",
                    color: "white",
                    width: "40%",
                  }}
                  color="primary"
                  outline
                  onClick={() => setFormModal(!formModal)}
                >
                  <Filter />
                  Filter
                  <ChevronDown />
                </Button>
                <Modal
                  isOpen={formModal}
                  toggle={() => setFormModal(!formModal)}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={() => setFormModal(!formModal)}>
                    Technical Assign
                  </ModalHeader>
                  <ModalBody>
                    <div className="mb-2">
                      <Label className="form-label" for="email">
                        Project name
                      </Label>
                      <Input type="email" id="email" />
                    </div>
                    <div className="mb-2">
                      <Label className="form-label" for="password">
                        vechical type
                      </Label>
                      <Input type="password" id="password" />
                    </div>
                    <div className="mb-2">
                      <Label className="form-label" for="password">
                        location
                      </Label>
                      <InputGroup className="input-group-merge mb-2">
                        <Input />
                        <InputGroupText>
                          <MapPin size={14} />
                        </InputGroupText>
                      </InputGroup>
                    </div>
                  </ModalBody>
                  <div className="d-flex justify-content-center align-items-center">
                    <ModalFooter>
                      <Button
                        color="primary"
                        style={{ backgroundColor: "#3dc2f3" }}
                        onClick={() => setFormModal(!formModal)}
                      >
                        done
                      </Button>{" "}
                    </ModalFooter>
                  </div>
                </Modal>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="match-height">
        <Col sm="12">
          <Card>
            <div className="d-flex justify-content-between p-2">
              <img
                className="rounded-circle"
                style={{ width: "50px", height: "50px" }}
                src={profilePic}
                alt="pic"
              />
              <div className="g-2">
                <p>
                  Assign By :<span>Sudheer</span>
                </p>
                <p>
                  Repair Approval :{" "}
                  <span>
                    <Button.Ripple color="success" outline>
                      View Details
                    </Button.Ripple>
                  </span>
                </p>
                <p>
                  Status :<span className="text-success">Repair Completed</span>
                </p>
              </div>
              <div className="g-2">
                <div className="d-flex">
                  <p>Vehicle Details :</p>
                  <div style={{ width: "142px" }}>
                    <p>Bharath Benz 3128 C AP 02 DE 2345</p>
                  </div>
                </div>

                <p className="my-1">
                  Repair Approval :{" "}
                  <span>
                    <Button.Ripple color="success" outline>
                      View Details
                    </Button.Ripple>
                  </span>
                </p>
              </div>
              <div>
                <div className="d-flex">
                  <p>Chainage no :</p>
                  <div style={{ width: "95px" }}>
                    <p>000-250,000-350</p>
                  </div>
                </div>
                <p className="my-1">
                  Inspection :{" "}
                  <span>
                    <Button.Ripple color="success" outline>
                      View Details
                    </Button.Ripple>
                  </span>
                </p>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-center  g-1">
                <Badge style={{ borderRadius: "20px" }} color="danger">
                  Breakdown
                </Badge>
                <Button.Ripple color="success">View Details</Button.Ripple>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <div className="d-flex justify-content-between p-2">
              <img
                className="rounded-circle"
                style={{ width: "50px", height: "50px" }}
                src={profilePic}
                alt="pic"
              />
              <div className="g-2">
                <p>
                  Assign By :<span>Sudheer</span>
                </p>
                <p>
                  Repair Approval :{" "}
                  <span>
                    <Button.Ripple color="success" outline>
                      View Details
                    </Button.Ripple>
                  </span>
                </p>
                <p>
                  Status :<span className="text-success">Repair Completed</span>
                </p>
              </div>
              <div className="g-2">
                <div className="d-flex">
                  <p>Vehicle Details :</p>
                  <div style={{ width: "142px" }}>
                    <p>Bharath Benz 3128 C AP 02 DE 2345</p>
                  </div>
                </div>

                <p className="my-1">
                  Repair Approval :{" "}
                  <span>
                    <Button.Ripple color="success" outline>
                      View Details
                    </Button.Ripple>
                  </span>
                </p>
              </div>
              <div>
                <div className="d-flex">
                  <p>Chainage no :</p>
                  <div style={{ width: "95px" }}>
                    <p>000-250,000-350</p>
                  </div>
                </div>
                <p className="my-1">
                  Inspection :{" "}
                  <span>
                    <Button.Ripple color="success" outline>
                      View Details
                    </Button.Ripple>
                  </span>
                </p>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-center  g-1">
                <Badge style={{ borderRadius: "20px" }} color="danger">
                  Breakdown
                </Badge>
                <Button.Ripple color="success">View Details</Button.Ripple>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SrkDashBoardCompleted;
