import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

import { useEditContactUserProfileBySlugMutation } from "../../../redux/apis/restApi";
import { closeEditSalesProjectContactPopup } from "../../../redux/slices/salesProject";

export default function EditContactProfileImagePopup({ slug }) {
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  const dispatch = useDispatch();

  const popupStatus = useSelector(
    (state) => state.salesProject.editSalesProjectContactPopup.status
  );

  const helperData = useSelector(
    (state) => state.salesProject.editSalesProjectContactPopup.helperData
  );

  // * Image Preview
  const profileImgRef = useRef(null);

  const {
    handleSubmit,
    control,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // * close modal popup
  const handleClose = () => {
    dispatch(closeEditSalesProjectContactPopup());
    setProfileImage(null);
    setProfilePreview(null);
  };

  const [imagePost] = useEditContactUserProfileBySlugMutation();

  // * Submit
  const onSubmit = (values) => {
    if (!profileImage) {
      toast.error("please upload image");
      return;
    }

    let formdata = new FormData();
    formdata.append("image", profileImage, profileImage.name);

    imagePost({ slug: helperData?.slug, data: formdata }).then((response) => {
      if (response.data) {
        toast.success("User image uploaded successfully");
        handleClose();
      }

      if (response.error) {
        toast.error(JSON.stringify(response.error.data));
      }
    });
  };

  // * ImageProfile
  const handleProfileImage = (e) => {
    const img = e.target.files[0];

    setProfileImage(img);

    const reader = new FileReader();
    if (img) {
      reader.readAsDataURL(img);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfilePreview(reader.result);
        }
      };
    }
  };

  return (
    <Modal
      isOpen={popupStatus}
      toggle={handleClose}
      className="modal-dialog-centered"
      backdrop={true}
    >
      <ModalHeader toggle={handleClose}>Edit Contact User Image</ModalHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <Row>
            <Col md="12" lg="8" sm="12" className="">
              <FormGroup>
                <img
                  src={profilePreview}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
                <div>
                  <Label>Upload Image</Label>
                  <Input
                    name="profile_image"
                    type="file"
                    onChange={(e) => handleProfileImage(e)}
                    innerRef={profileImgRef}
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type={"submit"}>
            Upload
          </Button>{" "}
        </ModalFooter>
      </Form>
    </Modal>
  );
}
