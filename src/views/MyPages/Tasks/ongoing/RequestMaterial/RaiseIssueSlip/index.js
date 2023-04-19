import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  openRaiseIssueSlipPopup,
  closeRaiseIssueSlipPopup,
} from "../../../../../../redux/slices/popup";

import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { TextInput } from "../../../../../Generic/AllInputs";

const RaiseIssueSlip = () => {
  const [basicModal, setBasicModal] = useState(false);
  const dispatch = useDispatch();

  const formToggle = useSelector((state) => state.popup.raiseIssueSlip.status);
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Modal
      isOpen={formToggle}
      toggle={() => setCenteredModal(!centeredModal)}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader
        toggle={() => dispatch(closeRaiseIssueSlipPopup())}
      ></ModalHeader>
      <h1 className="text-center my-1">Raise Issue Slip</h1>
      <ModalBody>
        <table
          //   style={{ borderCollapse: "collapse", borderWidth: "2px" }}
          className="table col-12"
        >
          <thead>
            <tr>
              <th>Materials</th>
              <th>Required Quantity</th>
              <th>Issue Quantity</th>
              <th>Vehicle Use</th>
              <th>Repair Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brightstone 225/50 tire</td>
              <td>02</td>
              <td>
                <TextInput
                  fieldName={"quantity"}
                  control={control}
                  errors={errors}
                />
              </td>
              <td>
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
              <td>
                {" "}
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
            </tr>

            <tr>
              <td>Rear Bumper</td>
              <td>01</td>
              <td>
                <TextInput
                  fieldName={"quantity"}
                  control={control}
                  errors={errors}
                />
              </td>
              <td>
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
              <td>
                {" "}
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
            </tr>
            <tr>
              <td>Right Mirror</td>
              <td>01</td>
              <td>
                <TextInput
                  fieldName={"quantity"}
                  control={control}
                  errors={errors}
                />
              </td>
              <td>
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
              <td>
                {" "}
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
            </tr>
            <tr>
              <td>Battery</td>
              <td>01</td>
              <td>
                <TextInput
                  fieldName={"quantity"}
                  control={control}
                  errors={errors}
                />
              </td>
              <td>
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
              <td>
                {" "}
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
            </tr>
            <tr>
              <td>Break Pads</td>
              <td>01</td>
              <td>
                <TextInput
                  fieldName={"quantity"}
                  control={control}
                  errors={errors}
                />
              </td>
              <td>
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                  className=""
                ></div>
              </td>
              <td>
                {" "}
                <div
                  style={{
                    backgroundColor: "#e6f7ff",
                    height: "30px",
                    width: "30px",
                    borderRadius: "5px",
                  }}
                ></div>
              </td>
            </tr>
          </tbody>
        </table>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-around align-items-center">
        <Button
          color="primary"
          onClick={() => dispatch(closeRaiseIssueSlipPopup())}
        >
          Issue Slip
        </Button>
        <Button.Ripple
          color="dark"
          outline
          onClick={() => dispatch(closeRaiseIssueSlipPopup())}
        >
          Cancel
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  );
};

export default RaiseIssueSlip;
