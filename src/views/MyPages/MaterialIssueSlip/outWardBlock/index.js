import { useSelector } from "react-redux";

import { GrNotes } from "react-icons/gr";
import { FiTrendingUp } from "react-icons/fi";
import { Card, Row, Col } from "reactstrap";
import { DollarSign, User } from "react-feather";

const OutWardBlock = () => {
  const text = useSelector((state) => state.counter.display);
  console.log(text);
  const words = text.split(" ").length - 1;
  const length = text.length;

  const count = useSelector((state) => state.counter.count);
  return (
    <Card>
      <div className=" p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h3
            style={{
              color: "#00b0f0",
              fontSize: "22px",
              fontWeight: "600",
            }}
            className="mx-1"
          >
            Out Ward
          </h3>
        </div>

        <Row>
          <Col sm="6" md="6" lg="3">
            <div className="d-flex  align-items-center">
              <div
                className="rounded-circle d-flex mx-2 justify-content-around align-items-center"
                style={{
                  height: "48px",
                  width: "48px",
                  backgroundColor: "#dbf2ff",
                }}
              >
                <FiTrendingUp style={{ color: "blue" }} size={"20px"} />
              </div>
              <div className="m-1">
                <h3 style={{ fontWeight: "600", fontSize: "18px" }}>100</h3>
                <p>Total Issued Slip’s</p>
              </div>
            </div>
          </Col>
          <Col sm="6" md="6" lg="3">
            <div className="d-flex  align-items-center">
              <div
                className="rounded-circle d-flex mx-2 justify-content-center align-items-center"
                style={{
                  height: "48px",
                  width: "48px",
                  backgroundColor: "#fff3e8",
                }}
              >
                <User style={{ color: "orange" }} size={"20px"} />
              </div>
              <div className="m-1">
                <h3 style={{ fontWeight: "600", fontSize: "18px" }}>720K</h3>
                <p>Material Requested</p>
              </div>
            </div>
          </Col>
          <Col sm="6" md="6" lg="3">
            <div className="d-flex  align-items-center">
              <div
                className="rounded-circle d-flex mx-2 justify-content-center align-items-center"
                style={{
                  height: "48px",
                  width: "48px",
                  backgroundColor: "#e1f4e4",
                }}
              >
                <DollarSign
                  style={{ color: "green" }}
                  color="green"
                  size={"20px"}
                />
              </div>
              <div className="m-1">
                <h3 style={{ fontWeight: "600", fontSize: "18px" }}>620K</h3>
                <p>Material Issued</p>
              </div>
            </div>
          </Col>
          <Col sm="6" md="6" lg="3">
            <div className="d-flex  align-items-center">
              <div
                className="rounded-circle d-flex mx-2 justify-content-center align-items-center"
                style={{
                  height: "48px",
                  width: "48px",
                  backgroundColor: "#ffe0e0",
                }}
              >
                <DollarSign style={{ color: "red" }} size={"20px"} />
              </div>
              <div className="m-1">
                <h3 style={{ fontWeight: "600", fontSize: "18px" }}>34</h3>
                <p>Pending Slip’s</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default OutWardBlock;
