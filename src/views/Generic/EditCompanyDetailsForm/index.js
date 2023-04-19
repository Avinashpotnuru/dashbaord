// ** Custom Components
import Sidebar from "@components/sidebar";
import { Edit, PlusCircle } from "react-feather";
import { Button, Card, Col, Form, Input, Label, Row } from "reactstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { closeEditSalesProjectCompanyDetailsPopup } from "../../../redux/slices/salesProject";
import { useEditSalesProjectCompanyDetailsBySlugMutation } from "../../../redux/apis/restApi";
import {
  TextInput,
  TextAreaInput,
  OptionsInput,
  EmailInput,
  PhoneNumberInput,
  NumberInput,
} from "../AllInputs/index";

const EditCompanyDetailsForm = ({ slug }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const popupStatus = useSelector(
    (state) => state.salesProject.editSalesProjectCompanyDetailsPopup.status
  );

  const helperData = useSelector(
    (state) => state.salesProject.editSalesProjectCompanyDetailsPopup.helperData
  );
  console.log("helperData:", helperData);

  const [editData] = useEditSalesProjectCompanyDetailsBySlugMutation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  const resetForm = () => {
    reset();
    setValue("name", "");
    setValue("email", "");
    setValue("description", "");
    setValue("phone", "");
    setValue("industry", "");
    setValue("life_cycle_status", "");
    setValue("no_of_employees", "");
    setValue("annual_revenue", "");
    setValue("time_zone", "");
  };

  // ** Auto Filling Data --start
  let autoFieldData = {
    name: helperData?.data?.name,
    email: helperData?.data?.email,
    description: helperData?.data?.description,
    phone: helperData?.data?.phone_number,
    industry: helperData?.data?.industry,
    life_cycle_status: helperData?.data?.life_cycle_status,
    no_of_employees: helperData?.data?.no_of_employees,
    annual_revenue: helperData?.data?.annual_revenue,
    time_zone: helperData?.data?.time_zone,
  };

  useEffect(() => {
    if (!helperData) return;

    const keys = Object.keys(autoFieldData);

    keys.forEach((k) => {
      setValue(k, autoFieldData[k]);
    });
  }, [helperData]);

  // ** Auto Filling Data --end

  //** Close Popup */
  const handleClose = () => {
    dispatch(closeEditSalesProjectCompanyDetailsPopup());
    resetForm();
  };

  // ** Submit Form
  const onSubmit = (data) => {
    const backendFormate = {
      name: data.name,
      description: data.description,
      email: data.email,
      phone_number: data.phone,
      industry: data.industry,
      life_cycle_status: data.life_cycle_status,
      no_of_employees: data.no_of_employees,
      annual_revenue: data.annual_revenue,
      time_zone: data.time_zone,
    };

    editData({
      slug: helperData?.data?.slug,
      data: backendFormate,
    }).then((response) => {
      if (response.data) {
        toast.success("Company details updated successfully");
        handleClose();
      }

      if (response.error) {
        toast.error(JSON.stringify(response.error.data));
      }
    });
  };

  return (
    <Sidebar
      size="lg"
      open={popupStatus}
      title="Company Details Form"
      headerClassName="mb-1"
      contentClassName="p-0"
      toggleSidebar={handleClose}
    >
      <div className="d-flex justify-content-between gap-1 align-items-start mb-1">
        <div className="d-flex align-items-center">
          <Edit
            size={15}
            className="text-primary"
            style={{ marginRight: "5px" }}
          />
          <p className="text-primary m-0 ">Create</p>
        </div>

        <div className="d-flex gap-1">
          <p>Draft</p>
          <div className="form-check form-switch">
            <Input type="switch" name="customSwitch" id="exampleCustomSwitch" />
          </div>
        </div>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-1">
          <TextInput
            fieldTitle={"Company Name"}
            fieldName="name"
            required={true}
            placeholder={"Company Name"}
            control={control}
            errors={errors}
          />
        </div>

        <div className="mb-1">
          <TextAreaInput
            fieldTitle={"Description"}
            fieldName="description"
            required={true}
            placeholder={"Description"}
            control={control}
            errors={errors}
          />
        </div>

        <div className="mb-1">
          <EmailInput
            fieldTitle={"Email"}
            fieldName="email"
            required={true}
            placeholder={"Email"}
            control={control}
            errors={errors}
          />
        </div>

        <div className="mb-1">
          <PhoneNumberInput
            fieldTitle={"Phone Number"}
            fieldName="phone"
            required={true}
            placeholder={"Phone Number"}
            control={control}
            errors={errors}
          />
        </div>

        <div className="mb-1">
          <OptionsInput
            fieldTitle={"Industry"}
            fieldName={"industry"}
            required={true}
            control={control}
            errors={errors}
            options={[
              { id: 1, title: "TRANSPORT", value: "TRANSPORT" },
              { id: 2, title: "AGRICULTURAL", value: "AGRICULTURAL" },
              { id: 3, title: "AEROSPACE", value: "AEROSPACE" },
              { id: 4, title: "COMPUTER", value: "COMPUTER" },

              { id: 5, title: "GARMENTS", value: "GARMENTS" },
              { id: 6, title: "TEXTILES", value: "TEXTILES" },
              { id: 7, title: "CONSTRUCTION", value: "CONSTRUCTION" },
              { id: 8, title: "HEALTH_CARE", value: "HEALTH_CARE" },
              { id: 9, title: "FINANCE", value: "FINANCE" },
              { id: 10, title: "LOGISTICS", value: "LOGISTICES" },
              { id: 11, title: "RETAIL", value: "RETAIL" },
              { id: 12, title: "CHEMICAL", value: "CHEMICAL" },
              {
                id: 13,
                title: "HOTEL AND RESTAURANT",
                value: "HOTEL_AND_RESTAURENT",
              },
              { id: 14, title: "TELECOM", value: "TELECOM" },
              { id: 15, title: "CONSUMER GOODS", value: "CONSUMER_GOODS" },
              { id: 16, title: "OIL AND GAS", value: "OIL_AND_GAS" },
              { id: 17, title: "ADVERTISING", value: "ADVERTICING" },
            ]}
            showDefaultOption={true}
            isDefaultDisabled={true}
          />
        </div>

        <div className="mb-1">
          <OptionsInput
            fieldTitle={"Life Cycle Status"}
            fieldName={"life_cycle_status"}
            required={true}
            control={control}
            errors={errors}
            options={[
              { id: 1, title: "PENDING", value: "PENDING" },
              { id: 2, title: "CLIENT", value: "CLIENT" },
              { id: 3, title: "PROSPECT", value: "PROSPECT" },
            ]}
            showDefaultOption={true}
            isDefaultDisabled={true}
          />
        </div>

        <div className="mb-1">
          <OptionsInput
            fieldTitle={"Time Zone"}
            fieldName={"time_zone"}
            required={true}
            control={control}
            errors={errors}
            options={[
              { id: 1, title: "GMT", value: "GMT" },
              { id: 2, title: "UTC", value: "UTC" },
              { id: 3, title: "ECT", value: "ECT" },
              { id: 4, title: "EET", value: "EET" },

              { id: 5, title: "ART", value: "ART" },
              { id: 6, title: "EAT", value: "EAT" },
              { id: 7, title: "MET", value: "MET" },
              { id: 8, title: "NET", value: "NET" },
              { id: 9, title: "PLT", value: "PLT" },
              { id: 10, title: "IST", value: "IST" },
              { id: 11, title: "BST", value: "BST" },
              { id: 12, title: "VST", value: "VST" },
              {
                id: 13,
                title: "CTT",
                value: "CTT",
              },
              { id: 14, title: "JST", value: "JST" },
              { id: 15, title: "ACT", value: "ACT" },
              { id: 16, title: "AET", value: "AET" },
              { id: 17, title: "SST", value: "SST" },
              {
                id: 18,
                title: "CAT",
                value: "CAT",
              },
              { id: 19, title: "NST", value: "NST" },
              { id: 20, title: "MIT", value: "MIT" },
              { id: 21, title: "HST", value: "HST" },
              { id: 22, title: "AST", value: "AST" },
              {
                id: 23,
                title: "PST",
                value: "PST",
              },
              { id: 24, title: "PNT", value: "PNT" },
              { id: 25, title: "MST", value: "MST" },
              { id: 26, title: "CST", value: "CST" },

              { id: 27, title: "EST", value: "EST" },
              { id: 28, title: "IET", value: "IET" },
              { id: 29, title: "PRT", value: "PRT" },
              { id: 30, title: "CNT", value: "CNT" },
              { id: 31, title: "AGT", value: "AGT" },
              { id: 32, title: "BET", value: "BET" },
            ]}
            showDefaultOption={true}
            isDefaultDisabled={true}
          />
        </div>

        <div className="mb-1">
          <NumberInput
            fieldTitle={"Number of Employees"}
            fieldName={"no_of_employees"}
            required={true}
            placeholder={"Number of Employees"}
            control={control}
            errors={errors}
          />
        </div>

        <div className="mb-1">
          <NumberInput
            fieldTitle={"Annual Revenue"}
            fieldName="annual_revenue"
            required={true}
            placeholder={"Annual Revenue"}
            control={control}
            errors={errors}
          />
        </div>

        <div className="d-flex flex-wrap justify-content-end pb-2 pt-1">
          <Button
            className="me-1"
            color="secondary"
            outline
            onClick={(e) => handleClose()}
            type="button"
          >
            Cancel
          </Button>

          <Button color="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Sidebar>
  );
};

export default EditCompanyDetailsForm;
