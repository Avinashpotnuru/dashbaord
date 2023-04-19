import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  Input,
  Label,
} from "reactstrap";
import Avatar from "@components/avatar";
import classnames from "classnames";
import { Plus } from "react-feather";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { useState } from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import { AsyncSelectInput, TextAreaInput } from "../CardList/AllInputs";
import {
  useAddLeadCallReminderMutation,
  useAddSalesProjectReminderMutation,
  useGetAllUsersQuery,
} from "../../../redux/apis/restApi";
import { toast } from "react-toastify";

const Card6 = ({ showInput, showSwitch, title, slug, customHook }) => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [toggleSelect, setToggleSelect] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      users: "",
      message: "",
    },
  });

  // const [addSalesProjectReminderTrigger] = useAddLeadCallReminderMutation();
  const [addPost] = customHook();

  const handleReset = () => {
    reset();
    setDate(new Date(Date.now()));
  };

  const onSubmit = (data) => {
    if (toggleSelect) {
      toast.warning("confirm the date Selected");
      return;
    }

    const backendFormat = {
      message: data?.message,
      date_of_reminding: date,
      reminding_users: data?.users?.map((u) => u.value),
    };

    addPost({ data: backendFormat, slug: slug }).then((res) => {
      if (res?.data) {
        toast.success("Reminder Added Successfully");
        handleReset();
      }

      if (res.error) {
        toast.error(JSON.stringify(res.error.data));
      }
    });
  };

  return (
    <Card>
      {/* <CardHeader className="d-flex">
       
      </CardHeader> */}
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-between w-100">
            <h5>{title}</h5>
            {showSwitch && (
              <div className="d-flex gap-1">
                <p>Contact</p>
                <div className="form-check form-switch">
                  <Input
                    type="switch"
                    name="customSwitch"
                    id="exampleCustomSwitch"
                  />
                </div>
              </div>
            )}
          </div>

          {showInput && (
            <div className="design-group">
              <h6 className="section-label ">Users To Remind</h6>
              <Input />
            </div>
          )}

          <div className="design-group pt-25 my-1">
            <h6 className="section-label ">Users To Remind</h6>
            {/* {avatarArr.map((obj, index) => {
            return (
              <Avatar
                key={index}
                className={classnames({
                  "me-75": index !== avatarArr.length - 1,
                })}
                {...obj}
              />
            );
          })}

          <Button
            className="btn-icon rounded-circle"
            style={{ marginLeft: "10px" }}
          >
            <Plus size={13} />
          </Button> */}

            <AsyncSelectInput
              control={control}
              errors={errors}
              fieldName={"users"}
              isMulti={true}
              required={true}
              searchHook={useGetAllUsersQuery}
              searchLabel={(v) => v?.profile?.name}
              searchValue={(v) => v?.id}
            />
          </div>

          <div className="mb-1">
            <h6>Message</h6>
            <TextAreaInput
              control={control}
              errors={errors}
              placeholder="Internal Payment Note"
              required={true}
              rows={5}
              fieldName={"message"}
            />
          </div>

          <div className="apply-job-package bg-light-primary rounded d-flex justify-content-between p-1">
            <div>
              {toggleSelect ? (
                <Flatpickr value={date} onChange={([date]) => setDate(date)} />
              ) : (
                <h2 className="d-inline me-25">
                  {moment(date).format("DD/MM/YYYY")}
                </h2>
              )}
            </div>

            <Button
              color="primary"
              className="opacity-50 round"
              size="sm"
              onClick={() => setToggleSelect(!toggleSelect)}
            >
              {toggleSelect ? "Set" : "Select Date"}
            </Button>
          </div>

          <Button className="mt-1 w-100" color={"danger"}>
            Add Remainder
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Card6;
