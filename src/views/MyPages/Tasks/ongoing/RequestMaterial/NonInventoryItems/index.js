import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import {
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
import { ArrowLeft, Camera, Plus, X } from "react-feather";
import { TextInput } from "../../../../../Generic/AllInputs";
import { useForm, Controller } from "react-hook-form";
const NonInventoryItems = ({ changeHandler }) => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const nonInventoryToggle = useSelector(
    (state) => state.popup.nonInventoryItems.status
  );

  // console.log("toggle", nonInventoryToggle);
  const [centeredModal, setCenteredModal] = useState(false);
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
      <div className="d-flex  p-2">
        <ArrowLeft onClick={() => dispatch(closeRiseMainPagePopUp())} />
        <h1 className="m-auto">Non-Inventory</h1>
      </div>
      <div className=" d-flex justify-content-end align-align-items-center">
        {/* <Button.Ripple
          onClick={() => changeHandler(2)}
          className="mx-1"
          color="info"
          outline
        >
          Non Inventory Items
        </Button.Ripple> */}
        <Button.Ripple color="primary"> Non Inventory Items</Button.Ripple>
      </div>
      <div className="my-2">
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
      </div>
      <h6 className="my-2">Set Priority</h6>
      <div className="d-flex justify-content-around align-items-center col-8">
        <p>Normal</p>
        <p style={{ color: "orange" }}>Urgent </p>
        <p>Very Urgent </p>
      </div>
      <Button.Ripple onClick={() => changeHandler(4)} color="secondary" outline>
        <span className="mx-1">
          <Camera />
        </span>
        Take Images
      </Button.Ripple>
      <div className="d-flex justify-content-end my-2 align-items-center">
        <Button.Ripple onClick={() => changeHandler(3)} color="primary">
          <span>
            <Plus />
          </span>
          Add item
        </Button.Ripple>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <Button
          color="primary"
          onClick={() => dispatch(closeRiseMainPagePopUp())}
        >
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

export default NonInventoryItems;
