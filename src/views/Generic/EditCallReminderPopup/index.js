// ** Custom Components
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import {
  AsyncSelectInput,
  TextInput,
  DateTimeInput,
} from "../../Generic/AllInputs";
import {
  useGetAllUsersQuery,
  useEditCallReminderBySlugMutation,
} from "../../../redux/apis/restApi";
import { closeEditCallReminderPopup } from "../../../redux/slices/generic";
import ISTFormat from "../../Generic/ISTFormat2";
import { useEffect } from "react";

const EditCallReminderPopup = (props) => {
  const dispatch = useDispatch();

  const popupStatus = useSelector(
    (state) => state.generic.editCallReminderPopup.status
  );

  const helperData = useSelector(
    (state) => state.generic.editCallReminderPopup.helperData
  );

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    register,
  } = useForm();

  const resetForm = () => {
    reset();
    setValue("message", "");
    setValue("data", "");
    setValue("assign_user", "");
  };

  // ** Auto Filling Data --start

  let autoFieldData = {
    message: helperData?.message,
    date: helperData?.date_of_reminding,
    assign_user: helperData?.reminding_users?.map((u) => ({
      label: u?.user_profile?.name,
      value: u?.id,
    })),
  };

  useEffect(() => {
    if (!helperData) return;

    const keys = Object.keys(autoFieldData);

    keys.forEach((k) => {
      setValue(k, autoFieldData[k]);
    });
  }, [helperData]);

  // ** Auto Filling Data --end

  const handleClose = () => {
    dispatch(closeEditCallReminderPopup());
    resetForm();
  };

  const [editData] = useEditCallReminderBySlugMutation();

  const onSubmit = (data) => {
    const backendFormate = {
      message: data.message,
      date_of_reminding: data.date,
      reminding_users: data.assign_user.map((u) => u.value),
    };

    editData({ slug: helperData?.slug, data: backendFormate }).then(
      (response) => {
        if (response.data) {
          toast.success("Call Reminder updated successfully");
          handleClose();
        }

        if (response.error) {
          toast.error(JSON.stringify(response.error.data));
        }
      }
    );
  };

  return (
    <Modal
      isOpen={popupStatus}
      toggle={handleClose}
      className={"modal-dialog-centered "}
    >
      <ModalHeader toggle={handleClose}>Update Call Reminder</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)} className="mb-2">
          <div className="mb-1">
            <TextInput
              fieldTitle={"Message"}
              fieldName="message"
              required={true}
              placeholder={"Message"}
              control={control}
              errors={errors}
            />
          </div>

          <div className=" mb-1">
            <DateTimeInput
              fieldTitle={"Date"}
              fieldName={"date"}
              required={true}
              control={control}
              errors={errors}
            />
          </div>

          <div className="mb-1">
            <AsyncSelectInput
              fieldTitle={"Assign Users"}
              fieldName={"assign_user"}
              required={true}
              placeholder={"Assign User"}
              control={control}
              errors={errors}
              isMulti={true}
              searchHook={useGetAllUsersQuery}
              searchLabel={(v) => v.profile.name}
              searchValue={(v) => v.id}
            />
          </div>

          <div className="d-flex flex-wrap justify-content-end  pt-1">
            <Button color="primary" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default EditCallReminderPopup;
