import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  openUserDateFilterViewDetails,
  closesUserDateFilterViewDetails,
} from "../../../../../redux/slices/popup";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

import React from "react";
import { Filter } from "react-feather";

const TaskDetailsFilter = () => {
  const dispatch = useDispatch();

  const dateFormToggle = useSelector((state) => state.popup.filterDate.status);

  //   const [formModal, setFormModal] = useState(false);
  return (
    <div>
      <Button
        color="primary"
        onClick={() => dispatch(openUserDateFilterViewDetails())}
      >
        Filter
        <span className="mx-2">
          <Filter />
        </span>
      </Button>
      <Modal isOpen={dateFormToggle} className="modal-dialog-centered">
        <ModalHeader toggle={() => dispatch(closesUserDateFilterViewDetails())}>
          Login Form
        </ModalHeader>
        <ModalBody>
          <div className="mb-2">
            <Label className="form-label" for="email">
              Enter Date:
            </Label>
            <Input type="date" id="date" placeholder="Enter Date" />
          </div>
        </ModalBody>
        <ModalFooter className=" d-flex justify-content-center align-items-center">
          <Button
            color="primary"
            onClick={() => dispatch(closesUserDateFilterViewDetails())}
          >
            Done
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TaskDetailsFilter;
