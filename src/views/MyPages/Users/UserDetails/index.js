import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Card,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import bgImage from "../../../../../assets/images/srkimages/Image.jpg";

import Profile from "../../../../../assets/images/srkimages/userprofile.jpg";

import AboutUser from "./AboutUser";

import UserAttendance from "./userAttendence";

import UserPermission from "./UserPermission";

import UserSpecific from "./UserSpecific";

import UserTaskDetails from "./UserTaskDetails";

import { tabsHandle } from "../../../../../redux/slices/tabs";
import Permission from "./Permission";

const UserDetails = () => {
  const dispatch = useDispatch();

  const active = useSelector((state) => state.tabs.tabs);

  const toggle = (tab) => {
    if (active !== tab) {
      // setActive(tab);
      dispatch(tabsHandle(tab));
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
              <h1 style={{ color: "white" }}>Prem Tej</h1>
              <p>Garage Head</p>
            </div>
          </div>
          <div>
            <Nav className="justify-content-center my-1" tabs>
              <NavItem>
                <NavLink
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "1" ? "#00a7ff" : "",
                    color: active === "1" ? "white" : "black",
                  }}
                  //   active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "2" ? "#00a7ff" : "",
                    color: active === "2" ? "white" : "black",
                  }}
                  //   active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Permission
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "3" ? "#00a7ff" : "",
                    color: active === "3" ? "white" : "black",
                  }}
                  //   active={active === "3"}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  User Attendance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    borderRadius: "10px",
                    backgroundColor: active === "4" ? "#00a7ff" : "",
                    color: active === "4" ? "white" : "black",
                  }}
                  //   active={active === "3"}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  User Specific
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    backgroundColor: active === "5" ? "#00a7ff" : "",
                    color: active === "5" ? "white" : "black",
                  }}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  Task Details
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Card>
      </Col>
      <Col sm="12">
        <>
          <TabContent className="py-50" activeTab={active}>
            <TabPane tabId="1">
              <AboutUser />
            </TabPane>
            <TabPane tabId="2">
              {/* <UserPermission /> */}
              <Permission />
            </TabPane>
            <TabPane tabId="3">
              <UserAttendance />
            </TabPane>
            <TabPane tabId="4">
              <UserSpecific />
            </TabPane>
            <TabPane tabId="5">
              <UserTaskDetails />
            </TabPane>
          </TabContent>
        </>
      </Col>
    </Row>
  );
};

export default UserDetails;
