import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { TextAreaInput, TextInput } from "../../../Generic/AllInputs";
import vehicle1 from "../../../../assets/images/srkimages/tyre1.png";
import vehicle2 from "../../../../assets/images/srkimages/trye2.jpg";
import vehicle3 from "../../../../assets/images/srkimages/trye3.png";
import vehicle4 from "../../../../assets/images/srkimages/Rectangle 792.png";
import vehicle5 from "../../../../assets/images/srkimages/tyre1.png";

import video1 from "../../../../assets/images/srkimages/videoImage (1).jpg";
import video2 from "../../../../assets/images/srkimages/videoImage (2).jpg";

import {
  openDriverUploadedData,
  closeDriverUploadedData,
} from "../../../../redux/slices/popup";

const DriverDetailsForm = () => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formModal, setFormModal] = useState(false);
  return (
    <div>
      <Button color="primary" outline onClick={() => setFormModal(!formModal)}>
        Get Data
      </Button>
      <Modal
        isOpen={formModal}
        toggle={() => setFormModal(!formModal)}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={() => setFormModal(!formModal)}>
          Driver Uploaded Details
        </ModalHeader>
        <ModalBody>
          <div className="mb-2">
            <TextInput
              fieldTitle={"Category"}
              fieldName={"Category"}
              placeholder="Breakdown"
              control={control}
              errors={errors}
            />
            <TextAreaInput
              fieldTitle={"Description"}
              fieldName={"description"}
              placeholder="This Vehicle has been breakdown"
              control={control}
              errors={errors}
            />
          </div>
          <p>Images</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "1fr",

              gridColumnGap: "10px",
            }}
          >
            <img
              style={{ height: "50px", width: "80px" }}
              src={vehicle1}
              alt="img1"
            />
            <img
              style={{ height: "50px", width: "80px" }}
              src={vehicle2}
              alt="img1"
            />
            <img
              style={{ height: "50px", width: "80px" }}
              src={vehicle3}
              alt="img1"
            />
            <img
              style={{ height: "50px", width: "80px" }}
              src={vehicle4}
              alt="img1"
            />
            <img
              style={{ height: "50px", width: "80px" }}
              src={vehicle4}
              alt="img1"
            />
          </div>
          <p>Videos</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "1fr",

              gridColumnGap: "10px",
            }}
          >
            <img src={video1} alt="video1" />
            <img src={video2} alt="video2" />
          </div>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center align-items-center">
          <Button color="primary" onClick={() => setFormModal(!formModal)}>
            Submit
          </Button>
          <Button color="primary" onClick={() => setFormModal(!formModal)}>
            Cancel
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DriverDetailsForm;
