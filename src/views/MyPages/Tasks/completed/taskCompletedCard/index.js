import React from "react";

import { Card, Col, Badge, Button } from "reactstrap";
import CompletedViewDetails from "../CompletedViewDetails";

const TaskCompleteCard = (props) => {
  const { pendingData } = props;
  const {
    id,
    vehicle_status: vehicle_status,
    model_name,
    vehicle_number,
    condition_vehicle,
  } = pendingData;
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
          <Button.Ripple color="success" outline>
            View Details
          </Button.Ripple>
          {/* <CompletedViewDetails /> */}
          <Button color="gradient-success">Assign</Button>
        </div>
      </Card>
    </Col>
  );
};

export default TaskCompleteCard;
