import { lazy } from "react";

const Users = [
  {
    path: "/users",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/Users")),
  },
  {
    path: "/users/specific/",
    exact: true,
    component: lazy(() =>
      import("../../../views/MyPages/Users/UserDetails/UserSpecific")
    ),
  },
  {
    path: "/users/permission/",
    exact: true,
    component: lazy(() =>
      import("../../../views/MyPages/Users/UserDetails/Permission")
    ),
  },
  {
    path: "/users/table/",
    exact: true,
    component: lazy(() =>
      import(
        "../../../views/MyPages/Users/UserDetails/userAttendence/UserAttendenceTable"
      )
    ),
  },
];

export default Users;
