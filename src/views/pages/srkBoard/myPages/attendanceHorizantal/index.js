// ** Third Party Components
import { Bar } from "react-chartjs-2";
import Flatpickr from "react-flatpickr";
import { Calendar, Circle } from "react-feather";

import { AiOutlineCalendar } from "react-icons/ai";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

const AttendanceHorizontalBarChart = ({
  warning,
  gridLineColor,
  labelColor,
  info,
}) => {
  // ** Chart Options
  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    elements: {
      bar: {
        borderRadius: {
          topRight: 15,
          bottomRight: 15,
        },
      },
    },
    layout: {
      padding: { top: -4 },
    },
    scales: {
      x: {
        min: 0,
        grid: {
          drawTicks: false,
          color: gridLineColor,
          borderColor: "transparent",
        },
        ticks: { color: labelColor },
      },
      y: {
        grid: {
          display: false,
          borderColor: gridLineColor,
        },
        ticks: { color: labelColor },
      },
    },
    plugins: {
      legend: {
        align: "end",
        position: "top",
        labels: { color: labelColor },
      },
    },
  };

  // ** Chart Data
  const data = {
    labels: ["MON", "TUE", "WED ", "THU", "FRI"],
    datasets: [
      {
        maxBarThickness: 15,
        label: "Market Data",
        backgroundColor: warning,
        borderColor: "transparent",
        data: [710, 350, 580, 460, 120],
      },
      {
        maxBarThickness: 15,
        backgroundColor: info,
        label: "Personal Data",
        borderColor: "transparent",
        data: [430, 590, 510, 240, 360],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column"></CardHeader>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <h1
            className="mx-1"
            style={{
              color: "#00b0f0",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            Attendence Status
          </h1>
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <Circle
            style={{
              color: "skyblue",
              backgroundColor: "skyblue",
              borderRadius: "50%",
            }}
            size={"15px"}
          />
          <p style={{ marginTop: "10px" }} className="mx-2">
            present
          </p>
          <Circle
            size={"15px"}
            style={{
              color: "green",
              backgroundColor: "green",
              borderRadius: "50%",
            }}
          />
          <p style={{ marginTop: "10px" }} className="mx-2">
            absent
          </p>
        </div>
        <div
          className=" d-flex justify-content-around align-items-center mx-1"
          style={{
            width: "146px",
            height: "36px",
            borderColor: "#00b0f0",
            borderStyle: "solid",
            borderWidth: "3px",
            borderRadius: "5px",
          }}
        >
          <p
            style={{
              marginTop: "15px",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            10/02/2022
          </p>
          <AiOutlineCalendar size={"15px"} />
        </div>
      </div>

      <CardBody>
        <div style={{ height: "400px" }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  );
};

export default AttendanceHorizontalBarChart;
