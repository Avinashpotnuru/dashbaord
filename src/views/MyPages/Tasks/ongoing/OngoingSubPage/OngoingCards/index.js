import profilePic from "../../../../../../assets/images/avatars/10-small.png";

import { Badge, Card, Row, Col, Button } from "reactstrap";

import { TabContent, TabPane } from "reactstrap";

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { openPendingViewDetails } from "../../../../../../redux/slices/popup";

import VehicleReportedDetails from "../../../Pending/VehicleReportedDetails";
import Details from "../../../../AllVehicle/AllVehicleComponent/ViewDetailsComponent/ServiceHistory/Details";

const OnGoingCards = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Row className="match-height">
      <Col sm="12">
        <Card>
          <div className="  d-flex justify-content-between ">
            <div style={{ flexGrow: "1" }} className="">
              <img
                className="rounded-circle my-2 mx-2"
                style={{ width: "50px", height: "50px" }}
                src={profilePic}
                alt="pic"
              />
            </div>

            <div
              className="p-2 mx-2 "
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
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
                <div>Reported By</div>
                <div>Deekshith</div>
                <div>Inspection</div>
                <div>
                  <Button.Ripple
                    onClick={() => dispatch(openPendingViewDetails())}
                    color="success"
                    outline
                  >
                    View Details
                  </Button.Ripple>{" "}
                </div>
                <div>Report Details</div>
                <div>
                  <Button.Ripple color="success" outline>
                    View Details
                  </Button.Ripple>{" "}
                </div>
                <div>Issued Material</div>
                <div>
                  <Button.Ripple color="success" outline>
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
              <div className="d-flex flex-column justify-content-between align-items-center  g-1">
                <Badge className="rounded-3" color="danger">
                  Breakdown
                </Badge>
                <Button
                  onClick={() => history.push(`/tasks/ongoing/requestmaterial`)}
                  color="gradient-success"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      {/* <VehicleReportedDetails /> */}
      {/* <Details /> */}
    </Row>
  );
};

export default OnGoingCards;
