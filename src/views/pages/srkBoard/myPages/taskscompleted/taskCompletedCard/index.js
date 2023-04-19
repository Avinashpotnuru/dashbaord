import React from "react";

import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardImgOverlay,
  CardText,
  Row,
  Col,
  Badge,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";

const TaskCompleteCard = (props) => {
  const { pendingData } = props;
  const {
    id,
    vechical_status,
    model_name,
    vechical_number,
    condition_vechical,
  } = pendingData;
  return (
    <Col xs="12" sm="6" md="6" lg="4">
      <Card className="p-2">
        <div className="d-flex justify-content-between align-items-center my-1">
          <h5>Vechical Details</h5>
          <Badge style={{ borderRadius: "20px" }} color="danger">
            {vechical_status}
          </Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>{model_name}</p>
            <p>{vechical_number}</p>
          </div>
          <div>
            <h5>
              Status : <span className="text-danger">{condition_vechical}</span>
            </h5>
          </div>
        </div>
        <h6 className="my-1">Report Details:</h6>
        <div className="d-flex justify-content-between align-items-center">
          <Button.Ripple color="success" outline>
            View Details
          </Button.Ripple>
          <Button color="gradient-success">Assign</Button>
        </div>
      </Card>
    </Col>
  );
};

export default TaskCompleteCard;
