import React from "react";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";

import { closeOngoingFilterPopUp } from "../../../../../../../redux/slices/popup";

const OngoingFilter = () => {
  const dispatch = useDispatch();

  const filterToggle = useSelector((state) => state.popup.onGoing.status);

  return (
    <Modal
      isOpen={filterToggle}
      // toggle={() => setFormModal(!formModal)}
      className="modal-dialog-centered"
    >
      <ModalHeader toggle={() => dispatch(closeOngoingFilterPopUp())}>
        Filter
      </ModalHeader>
      <ModalBody>
        <div className="mb-2">
          <Label className="form-label" for="email">
            status
          </Label>
          <Input type="email" id="email" />
        </div>
      </ModalBody>
      <div className="d-flex justify-content-center align-items-center">
        <ModalFooter>
          <Button
            color="info"
            style={{ backgroundColor: "#3dc2f3" }}
            onClick={() => dispatch(closeOngoingFilterPopUp())}
          >
            Done
          </Button>{" "}
        </ModalFooter>
      </div>
    </Modal>
  );
};

export default OngoingFilter;
