import { Col, Row, Card } from "reactstrap";

import { useState } from "react";

import {
  useGetEmployeeDataQuery,
  useGettingDataQuery,
  useGettingSingleProductDataQuery,
} from "../../../redux/api/restApis";

import { useSelector, useDispatch } from "react-redux";

import { useContext } from "react";

import { ThemeColors } from "@src/utility/context/ThemeColors";

import AllVechicalsBlock from "./allVechicalsBlock";

import IssueSlipsBlock from "./issueSlipsBlock";

import PurchaseRequestBlock from "./purchaseRequestBlock";

import SknLogoCard from "./srkLogoCard";

import { useSkin } from "@hooks/useSkin";

import TasksBlock from "./tasksBlock";

import AttendanceStatBlock from "./attendanceStatBlock";

import { incrementCount, displayName } from "../../../redux/slices/counter";

function index() {
  const [searchInput, setSearchInput] = useState("");

  const count = useSelector((state) => state.counter.count);

  const text = useSelector((state) => state.counter.display);

  console.log(text);

  const [index, setIndex] = useState("");

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

  const { data: fetchingData } = useGettingDataQuery();
  const { data: singleData } = useGettingSingleProductDataQuery({ id: index });

  const { data: employeeData } = useGetEmployeeDataQuery();

  // console.log("Employee Data", employeeData);

  // console.log("data", fetchingData);
  // console.log("singleData", singleData);/2
  const dispatch = useDispatch();
  const addCount = () => {
    dispatch(incrementCount());
    // console.log(index);
    // dispatch(displayName(searchInput));
  };

  return (
    <div className="col-12 overflow-auto">
      <Row className="match-height">
        <Col col-12>
          <Card>
            <div>
              <h1>{singleData?.title}</h1>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="match-height">
        <Col sm="12">
          <TasksBlock />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="8" xl="8">
          <AllVechicalsBlock />
        </Col>
        <Col lg="4">
          <SknLogoCard />
        </Col>
      </Row>
      <Row className="match-height">
        <Col sm="12" md="6" xl="6">
          <IssueSlipsBlock
            primary={context.colors.primary.main}
            warning={context.colors.warning.main}
            danger={context.colors.danger.main}
          />
        </Col>
        <Col sm="12" md="6" xl="6">
          <PurchaseRequestBlock
            primary={context.colors.primary.main}
            warning={context.colors.warning.main}
            danger={context.colors.danger.main}
          />
        </Col>
      </Row>
      <Row className="match-height">
        <Col>
          <AttendanceStatBlock
            info={colors.info.main}
            labelColor={labelColor}
            warning={colors.warning.main}
            gridLineColor={gridLineColor}
          />
        </Col>
      </Row>
    </div>
  );
}

export default index;
