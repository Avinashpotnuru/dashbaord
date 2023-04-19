import React from "react";
import { Button, ModalBody } from "reactstrap";
import { TextInput } from "../../../../../Generic/AllInputs";
import { useForm, Controller } from "react-hook-form";
import { Plus, X } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import {
  openAddItemPopUp,
  closeAddItemPopUp,
  closeRiseMainPagePopUp,
} from "../../../../../../redux/slices/popup";

const AddItem = ({ changeHandler }) => {
  const addItemToggle = useSelector((state) => state.popup.addItemPopUp.status);
  const dispatch = useDispatch();
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="col-12 ">
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
      <div
        className="my-2 col-12 p-2"
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        <table className=" w-100 border solid ">
          <thead>
            <tr className="border solid p-2 ">
              <th style={{ backgroundColor: "#B3E5FF" }}>Materials</th>
              <th style={{ backgroundColor: "#B3E5FF" }}>Required quantity</th>
              <th style={{ backgroundColor: "#B3E5FF" }}>Repair Use</th>
              <th style={{ backgroundColor: "#B3E5FF" }}>Vehicle Use</th>
              <th style={{ backgroundColor: "#B3E5FF" }}>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border solid ">
              <td className="border solid ">Brightstone 225/50 tire</td>
              <td className="border solid ">02</td>
              <td className="border solid ">02</td>
              <td className="border solid ">02</td>
              <td className="border solid ">Urgent</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" d-flex justify-content-end  p-2 align-align-items-center">
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
        <Button
          color="primary"
          onClick={() => dispatch(closeRiseMainPagePopUp())}
        >
          Raise PR
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

export default AddItem;
