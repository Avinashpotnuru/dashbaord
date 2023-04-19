// ** React Imports
import { useEffect, useState } from "react";

import { useContext } from "react";

import { ThemeColors } from "@src/utility/context/ThemeColors";
// ** Third Party Components

import axios from "axios";

import Chart from "react-apexcharts";

import { Circle } from "react-feather";

import { useSkin } from "@hooks/useSkin";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const PurchaseRequestBlock = (props) => {
  // ** State
  const [data, setData] = useState(null);

  const context = useContext(ThemeColors);

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

  useEffect(() => {
    axios
      .get("/card/card-analytics/product-orders")
      .then((res) => setData(res.data));
  }, []);

  const options = {
      labels: ["Finished", "Pending", "Rejected"],
      plotOptions: {
        radialBar: {
          size: 150,
          hollow: {
            size: "20%",
          },
          track: {
            strokeWidth: "100%",
            margin: 15,
          },
          dataLabels: {
            value: {
              fontSize: "1rem",
              colors: "#5e5873",
              fontWeight: "500",
              offsetY: 5,
            },
            total: {
              show: true,
              label: "Total",
              fontSize: "1.286rem",
              colors: "#5e5873",
              fontWeight: "500",

              formatter() {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 42459;
              },
            },
          },
        },
      },
      colors: [props.primary, props.warning, props.danger],
      stroke: {
        lineCap: "round",
      },
      chart: {
        height: 355,
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
    },
    series = [70, 52, 26];

  return data !== null ? (
    <Card>
      <CardHeader>
        <CardTitle
          tag="h4"
          style={{
            color: "#00b0f0",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          Purchase Requests
        </CardTitle>
        <UncontrolledDropdown className="chart-dropdown">
          <DropdownToggle
            color=""
            className="bg-transparent btn-sm border-0 p-50"
          >
            Updated 1 month ago
          </DropdownToggle>
          <DropdownMenu end>
            {data.last_days.map((item) => (
              <DropdownItem className="w-100" key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height={325}
        />
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex align-items-center">
            <Circle size={15} className="text-primary" />
            <span className="fw-bold ms-75">Finished</span>
          </div>
          <span>{data.chart_info.finished}</span>
        </div>
        <div className="d-flex justify-content-between mb-1">
          <div className="d-flex align-items-center">
            <Circle size={15} className="text-warning" />
            <span className="fw-bold ms-75">Pending</span>
          </div>
          <span>{data.chart_info.pending}</span>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Circle size={15} className="text-danger" />
            <span className="fw-bold ms-75">Rejected</span>
          </div>
          <span>{data.chart_info.rejected}</span>
        </div>
      </CardBody>
    </Card>
  ) : null;
};
export default PurchaseRequestBlock;
