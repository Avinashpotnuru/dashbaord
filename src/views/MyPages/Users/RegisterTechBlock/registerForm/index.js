import { useDispatch, useSelector } from "react-redux";

import { closeTechnicianPopUp } from "../../../../../redux/slices/popup";

import { useRef, useState } from "react";

import { toast } from "react-toastify";

import {
  TextInput,
  NumberInput,
  PhoneNumberInput,
  DateInput,
  OptionsInput,
} from "../../../../Generic/AllInputs";

import { useForm, Controller } from "react-hook-form";

import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
  Input,
} from "reactstrap";

import { useAddSupervisorRegisterMutation } from "../../../../../redux/api/restApis";

const RegisterFormCard = () => {
  const dispatch = useDispatch();

  const [imgTitle, setTitle] = useState("");

  const [imgSrc, setSrc] = useState("");

  const togglePopup = useSelector((state) => state.popup.technician.status);

  const [supervisorRegister] = useAddSupervisorRegisterMutation();

  const [file, setFile] = useState(null);

  // const [formModal, setFormModal] = useState(false);

  const fileRef = useRef();

  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (e) => {
    const file = e?.target?.files[0];

    setFile(e?.target?.files[0]);

    setTitle(file?.name);

    {
      file && setSrc(URL.createObjectURL(file));
    }
  };
  // console.log(file);

  const onSubmit = (data) => {
    console.log("hello", data);

    // its upto user what to do

    const formData = new FormData();

    formData.append(`profile.image`, file, file.name);
    // formData.append(`address.address_proof`, addressImage, addressImage.name);

    formData.append(`profile.first_name`, data.firstName);

    formData.append(`profile.last_name`, data.lastName);

    formData.append("phone_number", data.phoneNumber);

    formData.append(`profile.date_of_birth`, data.age);

    formData.append(`profile.gender`, data.gender);

    formData.append(`profile.id_Proof`, data.id);

    formData.append(`address.address`, data.addressProof);

    formData.append("address.country", "india");

    // formData.append("address.country", data.country);

    formData.append("address.city", data.city);

    formData.append("address.state", data.state);

    formData.append(`address.pincode`, data.pinCode);

    supervisorRegister({ data: formData }).then((res) => {
      if (res.data) {
        dispatch(closeTechnicianPopUp());
        toast.success("successfully upload profile image");
        // setTitle("");
        // setSrc("");
      }
      if (res.error) {
        toast.error(JSON.stringify(res.error.data));
      }
    });
  };

  return (
    <>
      <Modal isOpen={togglePopup} className="modal-dialog-centered">
        <ModalHeader toggle={() => dispatch(closeTechnicianPopUp())}>
          <h3 className="m-auto">Technician Registration Form</h3>
        </ModalHeader>

        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col>
                <Row>
                  <Col sm="6">
                    <TextInput
                      fieldTitle={"First Number"}
                      fieldName={"firstName"}
                      placeholder={"First Name"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                  <Col sm="6">
                    <TextInput
                      fieldTitle={"Last Name"}
                      fieldName={"lastName"}
                      placeholder={"Last Name"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col sm="6">
                    <PhoneNumberInput
                      fieldTitle={"Mobile Number"}
                      fieldName={"phoneNumber"}
                      placeholder={"Mobile number"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                  <Col sm="3">
                    <DateInput
                      fieldTitle={"Age"}
                      fieldName={"age"}
                      placeholder={"Age"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                  <Col sm="3">
                    <TextInput
                      fieldTitle={"Gender"}
                      fieldName={"gender"}
                      placeholder={"Gender"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col sm="6">
                    <TextInput
                      fieldTitle={"ID Proof"}
                      fieldName={"id"}
                      placeholder={"Id proof"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                  <Col sm="6">
                    <TextInput
                      fieldTitle={"Permanent Address"}
                      fieldName={"address"}
                      placeholder={"address"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col sm="6">
                    <TextInput
                      fieldTitle={"City"}
                      fieldName={"city"}
                      placeholder={"city"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                  <Col sm="6">
                    <TextInput
                      fieldTitle={"State"}
                      fieldName={"state"}
                      placeholder={"state"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col sm="6">
                    <NumberInput
                      fieldTitle={"PinCode"}
                      fieldName={"pinCode"}
                      placeholder={"pinCode"}
                      control={control}
                      errors={errors}
                    />
                  </Col>
                  <Col sm="6">
                    <div
                      className="mb-2"
                      // onClick={() => fileRef.current.click()}
                    >
                      <Label className="form-label" for="email">
                        Photo
                      </Label>

                      <Input
                        type="file"
                        accept="image/*"
                        // ref={fileRef}
                        // className="hidden"
                        onChange={(e) => handleFileUpload(e)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <TextInput
              fieldTitle={"Address Proof"}
              fieldName={"addressProof"}
              placeholder={"addressProof"}
              control={control}
              errors={errors}
            />

            <div className=" d-flex justify-content-center align-items-center my-2">
              <Button
                className="mx-1"
                style={{ backgroundColor: "skyBlue" }}
                color="info"
                type="submit"
              >
                Submit
              </Button>{" "}
              <Button
                style={{ borderColor: "skyBlue" }}
                variant="outlined"
                color="transparent"
                onClick={() => dispatch(closeTechnicianPopUp())}
              >
                Discard
              </Button>
              +
            </div>
          </Form>
        </ModalBody>
        <ModalFooter className=" d-flex justify-content-center align-items-center"></ModalFooter>
      </Modal>
    </>
  );
};

export default RegisterFormCard;
