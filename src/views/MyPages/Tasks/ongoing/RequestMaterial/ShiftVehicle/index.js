import { useState } from "react";

import { useForm, Controller } from "react-hook-form";

import {
  openShiftVehiclePopup,
  closeShiftVehiclePopup,
} from "../../../../../../redux/slices/popup";

import { useSelector, useDispatch } from "react-redux";

import { TextInput, TextAreaInput } from "../../../../../Generic/AllInputs";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const ShiftVehicle = () => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const shiftVehicleToggle = useSelector(
    (state) => state.popup.shiftVehicle.status
  );

  return (
    <Modal
      isOpen={shiftVehicleToggle}
      toggle={() => dispatch(closeShiftVehiclePopup())}
      className="modal-dialog-centered"
    >
      <ModalHeader
        toggle={() => dispatch(closeShiftVehiclePopup())}
      ></ModalHeader>
      <h1 className="text-center my-1">Shift Vehicle</h1>
      <ModalBody>
        <div className="mb-2">
          <TextInput
            fieldTitle={"Reason"}
            fieldName={"reason"}
            control={control}
            errors={errors}
            placeholder={"Enter"}
          />
        </div>
        <div className="mb-2">
          <TextAreaInput
            fieldTitle={"Description"}
            fieldName={"description"}
            control={control}
            errors={errors}
            placeholder={"Enter Description"}
          />
        </div>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-around">
        <Button
          color="primary"
          onClick={() => dispatch(closeShiftVehiclePopup())}
        >
          Shift
        </Button>{" "}
        <Button.Ripple
          onClick={() => dispatch(closeShiftVehiclePopup())}
          color="dark"
          outline
        >
          Cancel
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  );
};

export default ShiftVehicle;
