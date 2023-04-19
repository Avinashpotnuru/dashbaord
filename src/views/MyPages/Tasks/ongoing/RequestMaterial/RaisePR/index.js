import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useForm, Controller } from "react-hook-form";

import {
  openRaisePR,
  closeRaisePR,
  openNonInventoryItemsPopup,
  closeNonInventoryItemsPopup,
  closeRiseMainPagePopUp,
} from "../../../../../../redux/slices/popup";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { TextInput } from "../../../../../Generic/AllInputs";
import { Plus, X } from "react-feather";
import NonInventoryItems from "../NonInventoryItems";
const RisePR = ({ changeHandler }) => {
  const dispatch = useDispatch();

  const prToggle = useSelector((state) => state.popup.risePR.status);
  //   console.log("toggle", prToggle);
  const [centeredModal, setCenteredModal] = useState(false);

  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div style={{ backgroundColor: "white", position: "relative" }}>
        <X
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          style={{
            padding: "4px",
            backgroundColor: "white",
            position: "absolute",
            left: "100%",
            bottom: "2px",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
      </div>
      <h1 className="text-center">Rise PR</h1>
      <div className=" d-flex justify-content-end align-align-items-center">
        <Button.Ripple
          onClick={() => changeHandler(2)}
          className="mx-1"
          color="info"
          outline
        >
          Non Inventory Items
        </Button.Ripple>
      </div>
      <TextInput
        fieldTitle={"Material"}
        fieldName={"material"}
        control={control}
        errors={errors}
        placeholder={"Material name Enter"}
      />
      <TextInput
        fieldTitle={"Required Quantity"}
        fieldName={"required_quantity"}
        control={control}
        errors={errors}
        placeholder={"Enter"}
      />
      <TextInput
        fieldTitle={"Vehicle Use"}
        fieldName={"vehicle_use"}
        control={control}
        errors={errors}
        placeholder={"Enter"}
      />
      <TextInput
        fieldTitle={"Repair Use"}
        fieldName={"repair_use"}
        control={control}
        errors={errors}
        placeholder={"Enter"}
      />
      <h6 className="my-2">Set Priority</h6>
      <div className="d-flex justify-content-around align-items-center col-8">
        <p>Normal</p>
        <p style={{ color: "orange" }}>Urgent </p>
        <p>Very Urgent </p>
      </div>
      <div className="d-flex justify-content-end align-items-center my-1">
        <Button.Ripple onClick={() => changeHandler(3)} color="info">
          <span className="mx-1">
            <Plus />
          </span>
          Add Item
        </Button.Ripple>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <Button color="primary" onClick={() => dispatch(closeRaisePR())}>
          Accept
        </Button>
        <Button.Ripple
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          color="secondary"
          outline
        >
          Close
        </Button.Ripple>
      </div>
    </div>
  );
};

export default RisePR;
