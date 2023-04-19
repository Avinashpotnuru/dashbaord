import { lazy } from "react";

const MaterialIssueSlip = [
  {
    path: "/materialissueslips",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/MaterialIssueSlip")),
  },
];

export default MaterialIssueSlip;
