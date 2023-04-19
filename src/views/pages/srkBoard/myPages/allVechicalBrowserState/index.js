// ** Third Party Components
import Chart from "react-apexcharts";
import { MoreVertical } from "react-feather";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaShuttleVan } from "react-icons/fa";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const AllVechicalBrowserState = ({ colors, trackBgColor }) => {
  const statesArr = [
    {
      avatar: require("@src/assets/images/srkimages/van.png").default,
      title: "Total Vehicles",
      value: "234",
      chart: {
        type: "radialBar",
        series: [54.4],
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
      avatar: require("@src/assets/images/srkimages/van.png").default,
      title: "Breakdown Vehicles",
      value: "12",
      chart: {
        type: "radialBar",
        series: [6.1],
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
    {
      avatar: require("@src/assets/images/srkimages/van.png").default,
      title: "Running Vehicles",
      value: "178",
      chart: {
        type: "radialBar",
        series: [14.6],
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
          colors: [colors.secondary.main],
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
      avatar: require("@src/assets/images/srkimages/van.png").default,
      title: "On-Site Vehicles",
      value: "47",
      chart: {
        type: "radialBar",
        series: [4.2],
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
          colors: [colors.info.main],
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
        <div key={state.title} className="browser-states">
          <div className="d-flex">
            <div className="d-flex rounded-circle mx-1  justify-content-center align-items-center">
              {/* <FaShuttleVan /> */}
              <img
                style={{ width: "20px", height: "20px" }}
                className="rounded me-1"
                src={state.avatar}
                height="30"
                alt={state.title}
              />
            </div>

            {/* <img
              className="rounded me-1"
              src={state.avatar}
              height="30"
              alt={state.title}
            /> */}
            <h6 className="align-self-center mb-0">{state.title}</h6>
          </div>
          <div className="d-flex align-items-center">
            <div className="fw-bold text-body-heading me-1">{state.value}</div>
            <Chart
              options={state.chart.options}
              series={state.chart.series}
              type={state.chart.type}
              height={state.chart.height}
              width={state.chart.width}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Card className="card-browser-states">
      <CardHeader>
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-between  align-items-center p-1"
        >
          <h1
            className="mx-1"
            style={{
              color: "#00b0f0",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            All Vehicles
          </h1>
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
          {/* <CardTitle tag="h4">All Vehicles</CardTitle>
          <CardText className="font-small-2">Counter August 2020</CardText> */}
        </div>
        {/* <UncontrolledDropdown className="chart-dropdown">
          <DropdownToggle
            color=""
            className="bg-transparent btn-sm border-0 p-50"
          >
            <MoreVertical size={18} className="cursor-pointer" />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem className="w-100">Last 28 Days</DropdownItem>
            <DropdownItem className="w-100">Last Month</DropdownItem>
            <DropdownItem className="w-100">Last Year</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  );
};

export default AllVechicalBrowserState;
