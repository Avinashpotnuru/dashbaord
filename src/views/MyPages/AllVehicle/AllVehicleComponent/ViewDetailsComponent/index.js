import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  Row,
  Col,
  Card,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

import bgImage from "../../../../../assets/images/srkimages/vehicle.jpg";
import Profile from "../../../../../assets/images/srkimages/image 18.jpg";
import About from "./About";
import ServiceHistory from "./ServiceHistory";
import Locations from "./Locations";
import ServiceIssueSlip from "./ServiceHistory/ServiceIssueSlip";
import Details from "./ServiceHistory/Details";

const ViewDetailsComponent = () => {
  const [breakDown, setBreakDown] = useState(true);
  const [active, setActive] = useState("2");
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
      //   dispatch(tabsHandle(tab));
    }
  };
  return (
    <Row>
      <Col>
        <Card>
          <div
            className="d-flex align-items-end "
            style={{
              backgroundImage: `url(${bgImage})`,
              height: "240px",
              width: "100%",
              backgroundSize: "cover",
              objectFit: "cover",
            }}
          >
            <div style={{ position: "relative", top: "25px" }}>
              <img
                style={{
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: "20px",
                }}
                className="border border-light  mx-2"
                src={Profile}
                alt="profile"
              />
            </div>

            <div className="text-light">
              <h1 style={{ color: "white" }}>Ashok Leyland 3532 </h1>
              <p>8x4 Tipper</p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "1fr",
            }}
          >
            <Nav className="justify-content-center my-1 " tabs>
              <NavItem>
                <NavLink
                  className="mx-2"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "1" ? "#00a7ff" : "",
                    color: active === "1" ? "white" : "black",
                  }}
                  //   active={active === "1"}
                  onClick={() => {
                    toggle("1");
                    setBreakDown(true);
                  }}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="mx-2"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "2" ? "#00a7ff" : "",
                    color: active === "2" ? "white" : "black",
                  }}
                  //   active={active === "2"}
                  onClick={() => {
                    toggle("2");
                    setBreakDown(false);
                  }}
                >
                  Service History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="mx-2"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "3" ? "#00a7ff" : "",
                    color: active === "3" ? "white" : "black",
                  }}
                  //   active={active === "3"}
                  onClick={() => {
                    toggle("3");
                    setBreakDown(false);
                  }}
                >
                  Locations
                </NavLink>
              </NavItem>
            </Nav>
            <div className="d-flex justify-content-center align-items-center">
              {breakDown ? <Badge color="danger"> Breakdown</Badge> : null}
            </div>
          </div>
        </Card>
      </Col>
      <Col sm="12">
        <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1">
            <About />
          </TabPane>
          <TabPane tabId="2">
            <ServiceHistory />
          </TabPane>
          <TabPane tabId="3">
            <Locations />
          </TabPane>
        </TabContent>
        <ServiceIssueSlip />
        <Details />
      </Col>
    </Row>
  );
};

export default ViewDetailsComponent;
