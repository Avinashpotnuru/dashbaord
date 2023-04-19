import React from "react";
import { ArrowLeft, X, Camera, Plus } from "react-feather";

import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { closeRiseMainPagePopUp } from "../../../../../../redux/slices/popup";
import { TextInput } from "../../../../../Generic/AllInputs";
import { useForm, Controller } from "react-hook-form";

import imgg from "../../../../../../assets/images/srkimages/Rectangle 962.jpg";

const NonInventoryImage = ({ changeHandler }) => {
  const dispatch = useDispatch();
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="overflow-auto">
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
          placeholder={"tiers"}
        />
        <TextInput
          fieldTitle={"Required Quantity"}
          fieldName={"required_quantity"}
          control={control}
          errors={errors}
          placeholder={"05"}
        />
        <TextInput
          fieldTitle={"Vehicle Use"}
          fieldName={"vehicle_use"}
          control={control}
          errors={errors}
          placeholder={"Yes"}
        />
        <TextInput
          fieldTitle={"Repair Use"}
          fieldName={"repair_use"}
          control={control}
          errors={errors}
          placeholder={"No"}
        />
      </div>
      <h6 className="my-2">Set Priority</h6>
      <div className="d-flex justify-content-around align-items-center col-8">
        <p>Normal</p>
        <p style={{ color: "orange" }}>Urgent </p>
        <p>Very Urgent </p>
      </div>
      <h5>images</h5>
      <div className="d-flex justify-content-around align-items-center my-2">
        <img style={{ height: "208px", width: "208px" }} src={imgg} alt="img" />
        <Button.Ripple color="secondary" outline>
          <span className="mx-1">
            <Camera />
          </span>
          Re Take
        </Button.Ripple>
      </div>

      <div className="d-flex justify-content-end my-2 align-items-center">
        <Button.Ripple onClick={() => changeHandler(3)} color="primary">
          <span>
            <Plus />
          </span>
          Add item
        </Button.Ripple>
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <Button color="primary" onClick={() => changeHandler(6)}>
          Preview
        </Button>
        <Button.Ripple
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          color="secondary"
          outline
        >
          Cancel
        </Button.Ripple>
      </div>
    </div>
  );
};

export default NonInventoryImage;
