// ** React Imports
import { useEffect, useState } from "react";

import { useContext } from "react";

import "@styles/react/libs/charts/apex-charts.scss";

// ** Third Party Components
import axios from "axios";

import classnames from "classnames";

import * as Icon from "react-feather";

import Chart from "react-apexcharts";

import { useSkin } from "@hooks/useSkin";

import { ThemeColors } from "@src/utility/context/ThemeColors";

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

const IssueSlipsBlock = (props) => {
  // ** State
  const [data, setData] = useState(null);

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

  useEffect(() => {
    axios
      .get("/card/card-analytics/customers")
      .then((res) => setData(res.data));
  }, []);

  const options = {
      chart: {
        toolbar: {
          show: false,
        },
      },
      labels: ["New", "Returning", "Referrals"],
      dataLabels: {
        enabled: true,
      },
      legend: { show: false },
      stroke: {
        width: 4,
      },
      colors: [props.primary, props.warning, props.danger],
    },
    series = [23043, 4733, 4721, 4758];

  const renderChartInfo = () => {
    return data.listData.map((item, index) => {
      const IconTag = Icon[item.icon];

      return (
        <div
          key={index}
          className={classnames("d-flex justify-content-between", {
            "mb-1": index !== data.listData.length - 1,
          })}
        >
          <div className="d-flex align-items-center">
            <IconTag
              size={15}
              className={classnames({
                [item.iconColor]: item.iconColor,
              })}
            />
            <span className="fw-bold ms-75">{item.text}</span>
          </div>
          <span>{item.result}</span>
        </div>
      );
    });
  };

  return data !== null ? (
    <Card>
      <CardHeader className="align-items-end">
        <CardTitle
          style={{
            color: "#00b0f0",
            fontSize: "22px",
            fontWeight: "600",
          }}
          tag="h4"
        >
          Issue Slips
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
        <Chart options={options} series={series} type="pie" height={325} />
        <div className="pt-25">{renderChartInfo()}</div>
      </CardBody>
    </Card>
  ) : null;
};
export default IssueSlipsBlock;
