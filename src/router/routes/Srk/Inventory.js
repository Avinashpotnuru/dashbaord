import { lazy } from "react";

const InventoryRoute = [
  {
    path: "/inventory",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/Inventory")),
  },
];

export default InventoryRoute;
