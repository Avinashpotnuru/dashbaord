import { Row, Card, Col, Badge, Button } from "reactstrap";
import {
  openAssignReportDetails,
  openPendingViewDetails,
} from "../../../../../../redux/slices/popup";
import { useSelector, useDispatch } from "react-redux";

import logo1 from "../../../../../../assets/images/srkimages/Vector1.jpg";
import logo2 from "../../../../../../assets/images/srkimages/Vector2.jpg";
import logo3 from "../../../../../../assets/images/srkimages/Vector3.jpg";
import logo4 from "../../../../../../assets/images/srkimages/Vector4.png";
import logo5 from "../../../../../../assets/images/srkimages/Vector5.png";
import logo6 from "../../../../../../assets/images/srkimages/Vector.png";
import logo7 from "../../../../../../assets/images/srkimages/Vector8.png";

const cardsData = [
  {
    id: 1,
    img_name: logo1,
    title: "Power",
    details: "326.30 HP",
  },
  {
    id: 2,
    img_name: logo2,
    title: "GVW",
    details: "28000 Kg",
  },
  {
    id: 3,
    img_name: logo2,
    title: "GVW",
    details: "28000 Kg",
  },
  {
    id: 4,
    img_name: logo3,
    title: "Engine",
    details: "320 H ",
  },
  {
    id: 5,
    img_name: logo4,
    title: "Fuel Tank",
    details: "300 Ltr.",
  },
  {
    id: 6,
    img_name: logo5,
    title: "Max Torque",
    details: "1200 Nm",
  },
  {
    id: 7,
    img_name: logo6,
    title: "Max Speed",
    details: "60 KMPH",
  },
  {
    id: 8,
    img_name: logo7,
    title: "No of Tyres",
    details: "14",
  },
];

import VehicleReportedDetails from "../../../../Tasks/Pending/VehicleReportedDetails";
import AssignDetails from "./AssignDetails";

const DetailCard = (props) => {
  const dispatch = useDispatch();
  const { cardsData } = props;
  const { img_name, title, details } = cardsData;
  return (
    <div
      className=" mx-1 my-1 d-flex flex-column justify-content-center align-items-center  "
      style={{
        backgroundColor: "#e6f7ff",
        height: "100px",
        width: "117px",
        borderRadius: "10px",
      }}
    >
      <img className="my-1" src={img_name} alt="pic" />
      <h5>{title}</h5>
      <h6>{details}</h6>
    </div>
  );
};

const About = () => {
  const dispatch = useDispatch();
  return (
    <div className="col-12 overflow-auto">
      <Row className="match-height">
        <Col className="col-4">
          <Card>
            <div className="mx-2">
              <div
                className="my-2"
                style={{
                  display: "grid",

                  gridTemplateAreas: "repeat(2, 1fr)",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "10px",
                }}
              >
                <div>Vehicle Details :</div>
                <div className="d-flex justify-content-center align-items-center">
                  <Badge color="danger" className="badge-glow">
                    Breakdown
                  </Badge>
                </div>
                <div>
                  Bharath Benz 400 C <br /> AP 02 BD 3456
                </div>
                <div>
                  Status :<span className="text-danger fw-bolder">Pending</span>
                </div>
              </div>
              <h4 className="">Report Details :</h4>
              <div className="d-flex justify-content-between align-items-center my-2">
                <Button.Ripple
                  onClick={() => dispatch(openPendingViewDetails())}
                  color="success"
                  outline
                >
                  View Details
                </Button.Ripple>
                <Button.Ripple
                  onClick={() => dispatch(openAssignReportDetails())}
                  color="success"
                >
                  Assign
                </Button.Ripple>
              </div>
            </div>
            <AssignDetails />
            <VehicleReportedDetails />
          </Card>
        </Col>
      </Row>
      <Row className="match-height">
        <Col className="col-12">
          <Card>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "1fr",
              }}
            >
              <div className="p-2">
                <div className="my-1">
                  <h4 className="font-weight-bold">Brand : </h4>
                  <p>Ashok Leyand</p>
                </div>
                <div className="my-1">
                  <h4>Model : </h4>
                  <p>Ashok Leyland 3532 8x4 Tipper</p>
                </div>
                <div className="my-1">
                  <h4>Date of Purchase : </h4>
                  <p>15 - 05 - 2019</p>
                </div>
                <div className="my-1">
                  <h4>Registration Number </h4>
                  <p>AP 02 BD 2234</p>
                </div>
                <div className="my-1">
                  <h4>Location</h4>
                  <p>Anantapuram</p>
                </div>
                <div className="my-1">
                  <h4>Engine : </h4>
                  <p>
                    A series CRS with i-Gen6 Technology 320 H Engine Brakes
                    available
                  </p>
                </div>
                <div className="my-1">
                  <h4>Load Body Size : </h4>
                  <p>23 m3, 19 m3</p>
                </div>
              </div>
              <div className=" d-flex justify-content-center align-items-center">
                <div
                  // className="d-flex flex-column justify-content-center align-items-center"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridTemplateRows: "repeat(4, 1fr)",
                    padding: "20px",

                    // gap: "15px",
                  }}
                >
                  {cardsData.map((item) => (
                    <DetailCard key={item.id} cardsData={item} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
