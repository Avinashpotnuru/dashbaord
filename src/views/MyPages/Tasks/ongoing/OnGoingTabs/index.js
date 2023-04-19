import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
} from "reactstrap";
import ViewDetails from "../../completed/ViewsDetails";
import OnGoingCardsBlock from "../OngoingCardsComponent";
import OnGoingMainPage from "../OnGoingMainPage";

const OnGoingTabs = () => {
  const [active, setActive] = useState("1");
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <Row className="match-height  ">
      <Col className="col-3 ">
        <div className="nav-vertical d-flex">
          <Card style={{ height: "80vh" }} className="">
            <Nav tabs className="nav-left">
              <NavItem>
                <NavLink
                  active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Inspection Pending
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "3"}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Inspection Approval Pending
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "4"}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  Repair Underway/Ongoing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "5"}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Material Requested
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "6"}
                  onClick={() => {
                    toggle("6");
                  }}
                >
                  Request for Shift Vehicle
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "7"}
                  onClick={() => {
                    toggle("7");
                  }}
                >
                  Repair Approval Pending
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "8"}
                  onClick={() => {
                    toggle("8");
                  }}
                >
                  Shifted Vehicles
                </NavLink>
              </NavItem>
            </Nav>
          </Card>
        </div>
      </Col>
      <Col className="col-9">
        <>
          <TabContent activeTab={active}>
            <TabPane tabId="1">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="2">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="3">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="4">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="5">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="6">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="7">
              <OnGoingMainPage />
            </TabPane>
            <TabPane tabId="8">
              <OnGoingMainPage />
            </TabPane>
          </TabContent>
        </>
      </Col>
    </Row>
  );
};

export default OnGoingTabs;
