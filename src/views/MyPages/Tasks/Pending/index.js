import { pendingData } from "../../data/data.js";
import { useSelector, useDispatch } from "react-redux";

import {
  openPendingFilterPopUp,
  closePendingFilterPopUp,
} from "../../../../redux/slices/popup.js";
import {
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

import { useState } from "react";
import TaskPendingCard from "./taskPendingCard";
import AssignDetails from "../../AllVehicle/AllVehicleComponent/ViewDetailsComponent/About/AssignDetails/index.js";
import VehicleReportedDetails from "./VehicleReportedDetails/index.js";
const SrkDashBoardPending = () => {
  const dispatch = useDispatch();

  const taskFilterToggle = useSelector(
    (state) => state.popup.taskPending.status
  );

  return (
    <div>
      <AssignDetails />
      <VehicleReportedDetails />
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
                  onClick={() => dispatch(openPendingFilterPopUp())}
                >
                  <Filter />
                  Filter
                  <ChevronDown />
                </Button>
                <Modal
                  isOpen={taskFilterToggle}
                  toggle={() => dispatch(closePendingFilterPopUp())}
                  className="modal-dialog-centered"
                >
                  <ModalHeader
                    toggle={() => dispatch(closePendingFilterPopUp())}
                  >
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
                        vehicle type
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
                        onClick={() => dispatch(closePendingFilterPopUp())}
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
        {pendingData.map((item) => (
          <TaskPendingCard key={item?.id} pendingData={item} />
        ))}
      </Row>
      <div className="d-flex flex-column">
        <Pagination className=" mt-3 align-self-end">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default SrkDashBoardPending;
