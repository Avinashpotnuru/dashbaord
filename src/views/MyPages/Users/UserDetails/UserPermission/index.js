import { AiOutlineLock } from "react-icons/ai";

import { Row, Col, Card } from "reactstrap";

import { useGetEmployeeDataQuery } from "../../../../../../redux/api/restApis";

// import Table from "../../../../../Generic/Table";

const UserPermission = () => {
  const columns = [
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          TASK
        </p>
      ),
      cell: (row) =>
        row.is_active ? (
          <p className="text-danger" style={{ fontWeight: "bold" }}>
            ACTIVE
          </p>
        ) : (
          <p>INACTIVE</p>
        ),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          ROLE TYPE
        </p>
      ),
      cell: (row) => (
        <p style={{ fontWeight: "bold" }} className="text-info">
          {row.profile.name}
        </p>
      ),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          OWNER
        </p>
      ),
      cell: (row) => row.employee_id,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          AGE
        </p>
      ),
      cell: (row) => row.profile.age,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          DEPARTMENT
        </p>
      ),
      cell: (row) => row.role,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          ATTENDANCE
        </p>
      ),
      cell: (row) => (row.is_active ? <Eye /> : ""),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          TASK
        </p>
      ),
      cell: (row) => (row.is_active ? <Eye /> : <EyeOff />),
    },
  ];
  return (
    <Row className="match-height">
      <Col sm="12">
        <h1>
          <span className="mx-2 m-auto">
            <AiOutlineLock />
          </span>
          Permission
        </h1>
        <Card>
          <Table columns={columns} customHook={useGetEmployeeDataQuery} />
        </Card>
      </Col>
    </Row>
  );
};

export default UserPermission;
