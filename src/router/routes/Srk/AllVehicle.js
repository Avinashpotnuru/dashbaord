import { lazy } from "react";

const AllVehicle = [
  {
    path: "/allvehicle",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/MaterialIssueSlip")),
  },
  {
    path: "/allvehicle/viewdetails",
    exact: true,
    component: lazy(() =>
      import(
        "../../../views/MyPages/AllVehicle/AllVehicleComponent/ViewDetailsComponent"
      )
    ),
  },
];

export default AllVehicle;
