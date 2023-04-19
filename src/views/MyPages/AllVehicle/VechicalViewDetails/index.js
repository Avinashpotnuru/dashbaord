import { TextInput } from "../../../Generic/AllInputs";

import { useForm } from "react-hook-form";

import avatar from "../../../../assets/images/srkimages/avatar1.jpg";

import DriverDetailsForm from "../DriverUploadedForm";

import { Button } from "reactstrap";

import { useDispatch } from "react-redux";

import location from "../../../../assets/images/srkimages/Location.jpg";

import LocationMap from "../../../../assets/images/srkimages/locationlogo.jpg";

import {
  openPendingViewDetails,
  openServiceViewDetailsPopUp,
} from "../../../../redux/slices/popup";

import VehicleReportedDetails from "../../Tasks/Pending/VehicleReportedDetails";

import Details from "../AllVehicleComponent/ViewDetailsComponent/ServiceHistory/Details";

const VehicleViewDetails = ({ data }) => {
  const dispatch = useDispatch();

  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(data);

  return (
    <div className="p-2">
      <h4 className="bold">Vehicle Details</h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          width: "100%",
          gridColumnGap: "80px",
          gridRowGap: "20px",
        }}
      >
        <div>
          <TextInput
            fieldTitle={"Vehicle Number"}
            fieldName={"vehicle_number"}
            placeholder="Search here...."
            control={control}
            errors={errors}
          />
        </div>
        <div>
          {" "}
          <TextInput
            fieldTitle={"Status"}
            fieldName={"status"}
            placeholder="Breakdown"
            control={control}
            errors={errors}
          />
        </div>
        <div>
          <TextInput
            fieldTitle={"Name"}
            fieldName={"name"}
            placeholder="Bharat Benz 3128c"
            control={control}
            errors={errors}
          />
        </div>
        <div>
          <TextInput
            fieldTitle={"Description"}
            fieldName={"description"}
            placeholder="Tipper-12 T MEC2547BAJ9055026"
            control={control}
            errors={errors}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "1fr",
            width: "100%",
            gridColumnGap: "10px",
            gridRowGap: "10px",
          }}
        >
          <div className="p-2" style={{ backgroundColor: "#cfe8ff" }}>
            <h6>Driver Uploaded Data</h6>

            <div
              style={{ backgroundColor: "#cfe8ff" }}
              className="d-flex justify-content-around align-items-center"
            >
              <img src={avatar} alt="avatar" />
              <DriverDetailsForm />
            </div>
          </div>

          <div className="p-2" style={{ backgroundColor: "#cfe8ff" }}>
            <h6>Inspection Data</h6>

            <div
              style={{ backgroundColor: "#cfe8ff" }}
              className="d-flex justify-content-around align-items-center"
            >
              <img src={avatar} alt="avatar" />
              {/* <VehicleReportedDetails /> */}
              <Button
                color="primary"
                outline
                onClick={() => dispatch(openPendingViewDetails())}
              >
                Get Data
              </Button>

              <VehicleReportedDetails />

              <Details />
            </div>
          </div>
        </div>

        <div>
          <p>Location</p>

          <div
            className="d-flex justify-content-around align-items-center p-2"
            style={{ backgroundColor: "#d0e8ff" }}
          >
            <img src={location} alt="location" />

            <p className="text-center">
              Near Quarry Road Jcb Town Nh16,
              <br /> Hyderabad. 500081.
            </p>

            <img src={LocationMap} alt="location" />
          </div>
          <div className="d-flex justify-content-end align-items-center my-2">
            <Button.Ripple
              onClick={() => {
                dispatch(openServiceViewDetailsPopUp());
              }}
              color="info"
            >
              ViewDetails
            </Button.Ripple>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleViewDetails;
