import React from "react";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  openPendingViewDetails,
  closePendingViewDetails,
  openMaterialReceivedPopUp,
  closeMaterialReceivedPopUp,
} from "../../../../../redux/slices/popup";

import { Button, Card, Col, Row, Badge } from "reactstrap";
import pic from "../../../../../assets/images/srkimages/avatar1.jpg";
import VehicleReportedDetails from "../../Pending/VehicleReportedDetails";
import MaterialReceived from "../MaterialReceived";

const CompletedCard = (props) => {
  const { handlerChange } = props;

  const dispatch = useDispatch();
  const OffcanvasToggle = useSelector(
    (state) => state.popup.pendingViewDetails.status
  );

  return (
    <Row className="match-height">
      <Col sm="12">
        <Card>
          <div className="  d-flex justify-content-between ">
            <div style={{ flexGrow: "1" }} className="">
              <img
                className="rounded-circle my-2 mx-2"
                style={{ width: "50px", height: "50px" }}
                src={pic}
                alt="pic"
              />
            </div>

            <div
              className="p-2 mx-2 "
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "1fr",
                gap: "40px",
                flexGrow: "2",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gap: "10px",
                }}
              >
                <div>Assign By </div>
                <div>Sudheer</div>
                <div>Repair Approval</div>
                <div>
                  <Button.Ripple
                    onClick={() => dispatch(openPendingViewDetails())}
                    color="success"
                    outline
                  >
                    View Details
                  </Button.Ripple>{" "}
                </div>
                <div>Shift Details</div>
                <div>
                  <Button.Ripple
                    onClick={() => dispatch(openPendingViewDetails())}
                    color="success"
                    outline
                  >
                    View Details
                  </Button.Ripple>{" "}
                </div>
                <div>Issued Material</div>
                <div>
                  <Button.Ripple
                    onClick={() => dispatch(openMaterialReceivedPopUp())}
                    color="success"
                    outline
                  >
                    View Details
                  </Button.Ripple>{" "}
                </div>
              </div>
              <div
                className=" mx-2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gap: "10px",
                  flexGrow: "2",
                }}
              >
                <div>Vehicle Details </div>
                <div>Bharath Benz 3128 C AP 02 DE 2345 </div>
                <div>Chainage no</div>
                <div>000 - 250 000 - 350 </div>
                <div>Status</div>
                <div className="text-danger">Repair Approval Pending </div>
              </div>
              <div
                className=" mx-2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(2, 1fr)",
                  gap: "10px",
                  flexGrow: "2",
                }}
              >
                <div>Chainage no </div>
                <div>000 - 250 , 000 - 350</div>
                <div>inspection</div>
                <div>
                  {" "}
                  <Button.Ripple
                    onClick={() => dispatch(openPendingViewDetails())}
                    color="success"
                    outline
                  >
                    View Details
                  </Button.Ripple>{" "}
                </div>
              </div>

              <div className="d-flex flex-column justify-content-between align-items-center  g-1">
                <Badge className="rounded-3" color="danger">
                  Breakdown
                </Badge>
                <Button
                  onClick={() => handlerChange(2)}
                  color="gradient-success"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
          <VehicleReportedDetails />
          <MaterialReceived />
        </Card>
      </Col>
    </Row>
  );
};

export default CompletedCard;
