import { useState } from "react";

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

import UsersCard from "./usersCard";

import {
  TrendingUp,
  User,
  Search,
  Filter,
  ChevronDown,
  MapPin,
} from "react-feather";

const UsersViewPage = () => {
  const [formModal, setFormModal] = useState(false);
  return (
    <div>
      <Row className="match-height">
        <Col lg="8" sm="12">
          <UsersCard cols={{ md: "3", sm: "6", xs: "12" }} />
        </Col>
        <Col lg="4" sm="12">
          {" "}
          <div
            className="d-flex flex-column m-auto p-2 w-75 justify-content-center align-items-center"
            style={{
              borderRadius: "10px",
              backgroundColor: "#00a7ff",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <User color="white" size="40px" />
            <h3 className="">
              Register an <br />
              Technician
            </h3>
          </div>
        </Col>
      </Row>

      <Row className="match-height">
        <Col sm="12">
          <Card>
            <Row className="match-height">
              <div className="d-flex justify-content-around align-items-center p-2">
                <Col sm="8" className="">
                  <InputGroup className="input-group-merge mx-2 ">
                    <InputGroupText>
                      <Search size={14} />
                    </InputGroupText>
                    <Input />
                  </InputGroup>
                </Col>
                <Col sm="4">
                  <div className="mx-5">
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
                      <div className="">
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
              </div>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UsersViewPage;
