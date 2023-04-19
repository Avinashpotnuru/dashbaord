import UsersCardBlock from "./UserCardBlock";

import { Row, Col } from "reactstrap";

import RegisterTechBlock from "./RegisterTechBlock";

import SearchAndFilter from "./searchAndFilter";
import UsersTable from "./UsersTable";
import TaskDetails from "./TaskDetails";

function UserMainPage() {
  return (
    <div className="overflow-auto col-12">
      <Row className="match-height">
        <Col lg="9" sm="12">
          <UsersCardBlock cols={{ md: "3", sm: "6", xs: "12" }} />
        </Col>

        <Col lg="3" xs="12">
          <RegisterTechBlock />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <SearchAndFilter />
          <UsersTable />
        </Col>
        <Col sm="12">
          <TaskDetails />
        </Col>
      </Row>
    </div>
  );
}

export default UserMainPage;
