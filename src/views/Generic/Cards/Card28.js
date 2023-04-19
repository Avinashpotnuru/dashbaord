import React, { useContext } from "react";
import Chart from "react-apexcharts";
import { Card } from "reactstrap";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

export default function Card28() {
  // ** Context
  const { colors } = useContext(ThemeColors);

  // ** vars
  const trackBgColor = "#e9ecef";

  const statesArr = [
    {
      avatar: require("@src/assets/images/icons/google-chrome.png").default,
      title: "Google Chrome",
      value: "54.4%",
      chart: {
        type: "radialBar",
        series: [80.4],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
    {
      avatar: require("@src/assets/images/icons/mozila-firefox.png").default,
      title: "Mozila Firefox",
      value: "6.1%",
      chart: {
        type: "radialBar",
        series: [30.1],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [colors.warning.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: "22%",
              },
              track: {
                background: trackBgColor,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: "round",
          },
        },
      },
    },
  ];

  const renderStates = () => {
    return statesArr.map((state) => {
      return (
        <div
          key={state.title}
          className="browser-states d-flex justify-content-between "
        >
          <div className="d-flex">
            <img
              className="rounded me-1"
              src={state.avatar}
              height="30"
              alt={state.title}
            />
            <h6 className="align-self-center mb-0">{state.title}</h6>
          </div>

          <div className="d-flex align-items-center">
            <div className="fw-bold text-body-heading me-1">Remove</div>
            <div className="">
              <Chart
                options={state.chart.options}
                series={state.chart.series}
                type={state.chart.type}
                height={state.chart.height}
                width={state.chart.width}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return <Card className="d-flex flex-column gap-1 p-2">{renderStates()}</Card>;
}
