import { lazy } from "react";

const SrkDashBoard = [
  {
    path: "/srkdashboard",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/DashBoard")),
  },
];

export default SrkDashBoard;
