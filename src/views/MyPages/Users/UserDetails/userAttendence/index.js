import { Card, Row, Col } from "reactstrap";

import UserAttendanceCards from "./UserAttendanceCards";

import UsersMap from "./UsersMap";

const UserAttendance = () => {
  return (
    <>
      <UserAttendanceCards />
      <UsersMap />
    </>
  );
};

export default UserAttendance;
