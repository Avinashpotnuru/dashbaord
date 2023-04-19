import { lazy } from "react";

const PurchaseRequest = [
  {
    path: "/purchaserequest",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/PurchaseRequest")),
  },
];

export default PurchaseRequest;
