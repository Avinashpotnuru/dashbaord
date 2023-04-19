import { useGetUserDataQuery } from "../../../../redux/api/restApis";

import { useHistory } from "react-router-dom";

import Table from "../../../Generic/Table";

import { Eye, EyeOff } from "react-feather";

import { tabsHandle } from "../../../../redux/slices/tabs";

import { useDispatch } from "react-redux";

const UsersTable = () => {
  const { data: userData } = useGetUserDataQuery();

  // console.log(userData);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleAttendance = (slug) => {
    dispatch(tabsHandle("3"));

    history.push(`/users/${slug}`);
  };

  const handleTasks = (slug) => {
    dispatch(tabsHandle("5"));

    history.push(`/users/${slug}`);
  };

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
          NAME
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
          ID NO
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
      cell: (row) =>
        row.is_active ? <Eye onClick={() => handleAttendance(row.slug)} /> : "",
    },

    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          TASK
        </p>
      ),
      cell: (row) =>
        row.is_active ? (
          <Eye onClick={() => handleTasks(row.slug)} />
        ) : (
          <EyeOff />
        ),
    },
  ];

  return (
    <>
      <Table
        tableTitle={"Users"}
        customHook={useGetUserDataQuery}
        columns={columns}
        defaultPaginationCount={10}
      />
      {/* <UserDetails /> */}
    </>
  );
};

export default UsersTable;
