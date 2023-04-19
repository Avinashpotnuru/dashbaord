import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { closeServiceIssueSlipPopup } from "../../../../../../../redux/slices/popup";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";

const ServiceIssueSlip = () => {
  const [centeredModal, setCenteredModal] = useState(false);

  const dispatch = useDispatch();

  const serviceIssueToggle = useSelector(
    (state) => state.popup.serviceIssueSlip.status
  );

  return (
    <div className="vertically-centered-modal">
      <Modal
        isOpen={serviceIssueToggle}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className=" "
          toggle={() => dispatch(closeServiceIssueSlipPopup())}
        ></ModalHeader>

        <ModalBody>
          <h3 className="text-center"> Out Ward</h3>

          <p>Daily store issue details</p>

          <table class="">
            <thead>
              <tr className="p-2" style={{ backgroundColor: "#f3f2f7" }}>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
                <th>Header 6</th>
                <th>Header 7</th>
                <th>Header 8</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border solid">
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 4</td>
                <td>Row 1, Cell 5</td>
                <td>Row 1, Cell 6</td>
                <td>Row 1, Cell 7</td>
                <td>Row 1, Cell 8</td>
              </tr>
              <tr className="border solid">
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
                <td>Row 2, Cell 4</td>
                <td>Row 2, Cell 5</td>
                <td>Row 2, Cell 6</td>
                <td>Row 2, Cell 7</td>
                <td>Row 2, Cell 8</td>
              </tr>
              <tr className="border solid">
                <td>Row 3, Cell 1</td>
                <td>Row 3, Cell 2</td>
                <td>Row 3, Cell 3</td>
                <td>Row 3, Cell 4</td>
                <td>Row 3, Cell 5</td>
                <td>Row 3, Cell 6</td>
                <td>Row 3, Cell 7</td>
                <td>Row 3, Cell 8</td>
              </tr>
              <tr className="border solid">
                <td>Row 4, Cell 1</td>
                <td>Row 4, Cell 2</td>
                <td>Row 4, Cell 3</td>
                <td>Row 4, Cell 4</td>
                <td>Row 4, Cell 5</td>
                <td>Row 4, Cell 6</td>
                <td>Row 4, Cell 7</td>
                <td>Row 4, Cell 8</td>
              </tr>
              <tr className="border solid">
                <td>Row 5, Cell 1</td>
                <td>Row 5, Cell 2</td>
                <td>Row 5, Cell 3</td>
                <td>Row 5, Cell 4</td>
                <td>Row 5, Cell 5</td>
                <td>Row 5, Cell 6</td>
                <td>Row 5, Cell 7</td>
                <td>Row 5, Cell 8</td>
              </tr>
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ServiceIssueSlip;
