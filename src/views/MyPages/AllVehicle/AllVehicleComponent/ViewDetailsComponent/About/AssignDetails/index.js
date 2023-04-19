import React, { useState } from "react";

import TechnicianAssignTable from "./DataTable";

import profile from "../../../../../../../assets/images/avatars/1-small.png";

import {
  openAssignReportDetails,
  closeAssignReportDetails,
} from "../../../../../../../redux/slices/popup";

import { useGetProductsDummyDataQuery } from "../../../../../../../redux/api/restApis";

import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";

import Table from "../AssignDetails/DataTable";

const AssignDetails = () => {
  const [basicModal, setBasicModal] = useState(false);

  const dispatch = useDispatch();

  const handlerChange = useSelector(
    (state) => state.popup.assignReportDetails.status
  );

  const { data: productData } = useGetProductsDummyDataQuery({
    limit: "10",
    offset: "0",
  });

  console.log("dataa", productData);

  const columns = [
    {
      name: "TECHNICIANS",
      cell: (row) => (
        <img
          className="rounded-circle"
          style={{ height: "35px" }}
          src={profile}
        />
      ),
    },
    {
      name: "ASSIGNED",
      cell: (row) => row?.id,
    },
    {
      name: "ACTION",
      cell: (row) => (
        <Button.Ripple color="success" outline>
          Assign
        </Button.Ripple>
      ),
    },
  ];

  return (
    <div className="basic-modal">
      <Modal
        className="modal-dialog-centered "
        isOpen={handlerChange}
        toggle={() => setBasicModal(!basicModal)}
      >
        <ModalHeader
          className="d-flex justify-content-center  "
          //   toggle={() => dispatch(closeAssignReportDetails())}
        >
          <div className="d-flex justify-content-around align-items-center">
            <h4 className="mx-4">Technician Assign</h4>
            <Button.Ripple
              onClick={() => dispatch(closeAssignReportDetails())}
              className="mt-3"
              color="success"
              outline
            >
              done
            </Button.Ripple>
          </div>
        </ModalHeader>
        <ModalBody>
          <TechnicianAssignTable
            // tableTitle={"Technician Assign"}
            dataLooper={(data) => data?.products}
            customHook={useGetProductsDummyDataQuery}
            columns={columns}
            defaultPaginationCount={10}
          />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default AssignDetails;
