import React from "react";

import { useState } from "react";

import classnames from "classnames";

import { useSelector, useDispatch } from "react-redux";

import { openAssignReportDetails } from "../../../../../redux/slices/popup";

import {
  openPendingViewDetails,
  closePendingViewDetails,
} from "../../../../../redux/slices/popup";

import profile1 from "../../../../../assets/images/avatars/10-small.png";

import locationLogo from "../../../../../assets/images/srkimages/locationlogo.jpg";

import tyres1 from "../../../../../assets/images/srkimages/tyre1.png";
import tyres4 from "../../../../../assets/images/srkimages/trye2.jpg";
import tyres2 from "../../../../../assets/images/srkimages/trye3.png";
import tyres3 from "../../../../../assets/images/srkimages/trye4.jpg";

import videoImage1 from "../../../../../assets/images/srkimages/videoImage (1).jpg";

import videoImage2 from "../../../../../assets/images/srkimages/videoImage (2).jpg";

import {
  Card,
  Col,
  Badge,
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import { useGettingDataQuery } from "../../../../../redux/api/restApis";
import { X } from "react-feather";
import VehicleReportedDetails from "../VehicleReportedDetails";
import AssignDetails from "../../../AllVehicle/AllVehicleComponent/ViewDetailsComponent/About/AssignDetails";

const TaskPendingCard = (props) => {
  const dispatch = useDispatch();

  const OffcanvasToggle = useSelector(
    (state) => state.popup.pendingViewDetails.status
  );

  const [canvasPlacement, setCanvasPlacement] = useState("end");
  // const [canvasOpen, setCanvasOpen] = useState(false);

  const { data: fetchingData } = useGettingDataQuery();

  const { pendingData } = props;
  const { id, vehicle_status, model_name, vehicle_number, condition_vehicle } =
    pendingData;

  return (
    <Col xs="12" sm="6" md="6" lg="4">
      <Card className="p-2">
        <div className="d-flex justify-content-between align-items-center my-1">
          <h5>Vehicle Details</h5>
          <Badge style={{ borderRadius: "20px" }} color="danger">
            {vehicle_status}
          </Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>{model_name}</p>
            <p>{vehicle_number}</p>
          </div>
          <div>
            <h5>
              Status : <span className="text-danger">{condition_vehicle}</span>
            </h5>
          </div>
        </div>
        <h6 className="my-1">Report Details:</h6>
        <div className="d-flex justify-content-between align-items-center">
          <Button.Ripple
            color="success"
            outline
            onClick={() => dispatch(openPendingViewDetails())}
          >
            View Details
          </Button.Ripple>
          <Button
            onClick={() => dispatch(openAssignReportDetails())}
            color="gradient-success"
          >
            Assign
          </Button>
        </div>

        {/* <VehicleReportedDetails /> */}
      </Card>
    </Col>
  );
};

export default TaskPendingCard;
