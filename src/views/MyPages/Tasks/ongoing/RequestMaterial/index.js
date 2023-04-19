import { useSelector, useDispatch } from "react-redux";
import { ArrowLeft } from "react-feather";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

import { useHistory } from "react-router-dom";

import tyre from "../../../../../assets/images/srkimages/image 2.jpg";
import ShiftVehicle from "./ShiftVehicle";
import {
  openShiftVehiclePopup,
  openRaiseIssueSlipPopup,
  openRaisePR,
  openRiseMainPagePopUp,
} from "../../../../../redux/slices/popup";
import RaiseIssueSlip from "./RaiseIssueSlip";
import RisePR from "./RaisePR";
import NonInventoryItems from "./NonInventoryItems";
import RaisePRMainPage from "./RaisePRMainPage";
const TyreCard = () => {
  return (
    <Col>
      <div
        style={{
          // border: "solid 2px red",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          margin: "auto 20px",
        }}
      >
        <Card className="d-flex justify-content-center align-items-center p-2 shadow-lg">
          <CardBody className="d-fl">
            <img className="my-1 " height={"40px"} width={"40px"} src={tyre} />
            <h6>Material : Benz tyre</h6>
            <h6>Quantity :02</h6>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

const RequestMaterial = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Row className="col-12">
      <Col className="col-12">
        <Card>
          <div className="d-flex justify-content-between align-items-center">
            <div className=" mx-2 d-flex justify-content-around align-items-center">
              <ArrowLeft onClick={() => history.push(`/tasks/ongoing`)} />
              <h1 className="mx-1 my-1">Issued Material : (1)</h1>
            </div>

            <h4 className="mx-3">Reported By : Deekshith </h4>
          </div>
          <Row className="d-flex justify-content-between align-items-center ">
            <Col className=" d-flex ">
              <TyreCard />
              <TyreCard />
              <TyreCard />
            </Col>
          </Row>
          <Row>
            <Col className="col-12">
              <div className="d-flex justify-content-between align-items-center  mx-3 my-3">
                <h1>Requested Material : (2)</h1>
                <Button.Ripple color="info">Check Availability</Button.Ripple>
              </div>
              <div className="d-flex justify-content-end align-content-center mx-2">
                <h4>Reported By : Deekshith </h4>
              </div>
            </Col>
            <Col className="col-12">
              <Row className="d-flex justify-content-between align-items-center ">
                <Col className=" d-flex ">
                  <TyreCard />
                  <TyreCard />
                  <TyreCard />
                </Col>
              </Row>
            </Col>
            <Col className="col-12 d-flex justify-content-evenly align-items-center my-3">
              <Button.Ripple
                color="success"
                onClick={() => dispatch(openRiseMainPagePopUp())}
                outline
              >
                Raise PR
              </Button.Ripple>
              <Button.Ripple
                onClick={() => dispatch(openRaiseIssueSlipPopup())}
                color="success"
                outline
              >
                Raise Issue Slip
              </Button.Ripple>
              <Button.Ripple
                onClick={() => dispatch(openShiftVehiclePopup())}
                color="success"
                outline
              >
                Shift Vehicle
              </Button.Ripple>
            </Col>
            <ShiftVehicle />
            <RaiseIssueSlip />

            <RaisePRMainPage />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default RequestMaterial;
