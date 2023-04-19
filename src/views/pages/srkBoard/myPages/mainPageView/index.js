import { useContext } from "react";

import { ThemeColors } from "@src/utility/context/ThemeColors";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardImgOverlay,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { useSkin } from "@hooks/useSkin";
import "flatpickr/dist/themes/material_green.css";

import srkLogo from "../../../../../assets/images/srkimages/path1.png";
import { FiTrendingUp } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaShuttleVan } from "react-icons/fa";
import AllVechicalBrowserState from "../allVechicalBrowserState";
import "@styles/react/libs/charts/apex-charts.scss";
import CustomersIssueSlips from "../IssueSlips";
import ProductOrdersCard from "../purchaseRequestsCard";
import AttendanceHorizontalBarChart from "../attendanceHorizantal";
const SrkDashBoardMainPage = () => {
  const context = useContext(ThemeColors);

  const trackBgColor = "#e9ecef";
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    tooltipShadow = "rgba(0, 0, 0, 0.25)",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    lineChartPrimary = "#666ee8",
    lineChartDanger = "#ff4961",
    warningColorShade = "#ffbd1f",
    warningLightColor = "#FDAC34",
    successColorShade = "#28dac6",
    primaryColorShade = "#836AF9",
    infoColorShade = "#299AFF",
    yellowColor = "#ffe800",
    greyColor = "#4F5D70",
    blueColor = "#2c9aff",
    blueLightColor = "#84D0FF",
    greyLightColor = "#EDF1F4";
  return (
    <>
      <Row className="match-height">
        <Col xl="12" md="12">
          <Card className="mb-3">
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
                  Tasks
                </h3>
                <p style={{ color: "#6e6b7b" }} className="mx-1">
                  Updated 1 month ago
                </p>
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
                      <h3 style={{ fontWeight: "600", fontSize: "18px" }}>
                        100
                      </h3>
                      <p>Total Tasks</p>
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
                      <GrNotes style={{ color: "orange" }} size={"20px"} />
                    </div>
                    <div className="m-1">
                      <h3 style={{ fontWeight: "600", fontSize: "18px" }}>
                        720K
                      </h3>
                      <p>Ongoing</p>
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
                      <GrNotes
                        style={{ color: "green" }}
                        color="green"
                        size={"20px"}
                      />
                    </div>
                    <div className="m-1">
                      <h3 style={{ fontWeight: "600", fontSize: "18px" }}>
                        620K
                      </h3>
                      <p>Pending Tasks</p>
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
                      <GrNotes style={{ color: "red" }} size={"20px"} />
                    </div>
                    <div className="m-1">
                      <h3 style={{ fontWeight: "600", fontSize: "18px" }}>
                        34
                      </h3>
                      <p>Completed</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="match-height">
        <Col xl="8">
          <AllVechicalBrowserState
            colors={colors}
            trackBgColor={trackBgColor}
          />
        </Col>
        <Col xl="4">
          <Card className="d-flex justify-content-center align-items-center">
            <div
              className="d-flex flex-column justify-content-around  align-items-center"
              style={{ width: "90%" }}
            >
              <div
                style={{ width: "90%" }}
                className="d-flex  justify-content-between align-items-center p-3"
              >
                <h1
                  style={{
                    transform: `skewY(145deg)`,
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#5E58733D",
                  }}
                >
                  Clock
                </h1>
                <h1
                  style={{
                    transform: `skewY(145deg)`,
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#5E58733D",
                  }}
                >
                  Clock
                </h1>
              </div>
              <img src={srkLogo} alt="img" />
              <div
                style={{ width: "90%" }}
                className="d-flex  justify-content-between align-items-center p-3"
              >
                <h1
                  style={{
                    transform: `skewY(145deg)`,
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#5E58733D",
                  }}
                >
                  Clock
                </h1>
                <h1
                  style={{
                    transform: `skewY(140deg)`,
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#5E58733D",
                  }}
                >
                  Clock
                </h1>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="match-height">
        <Col sm="12" md="6" xl="6">
          <Card>
            <CustomersIssueSlips
              primary={context.colors.primary.main}
              warning={context.colors.warning.main}
              danger={context.colors.danger.main}
            />
          </Card>
        </Col>
        <Col sm="12" md="6" xl="6">
          <Card>
            <ProductOrdersCard
              primary={context.colors.primary.main}
              warning={context.colors.warning.main}
              danger={context.colors.danger.main}
            />
          </Card>
        </Col>
      </Row>
      <Row className="match-height">
        <Col sm="12">
          <AttendanceHorizontalBarChart
            info={colors.info.main}
            labelColor={labelColor}
            warning={colors.warning.main}
            gridLineColor={gridLineColor}
          />
        </Col>
      </Row>
    </>
  );
};

export default SrkDashBoardMainPage;
