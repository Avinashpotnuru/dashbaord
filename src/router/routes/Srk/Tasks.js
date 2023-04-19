import { lazy } from "react";

const Tasks = [
  {
    path: "/tasks/pending",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/Tasks/Pending")),
  },
  {
    path: "/tasks/ongoing",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/Tasks/ongoing")),
  },
  {
    path: "/tasks/ongoing/requestmaterial",
    exact: true,
    component: lazy(() =>
      import("../../../views/MyPages/Tasks/ongoing/RequestMaterial")
    ),
  },
  {
    path: "/tasks/completed",
    exact: true,
    component: lazy(() => import("../../../views/MyPages/Tasks/completed")),
  },
];
export default Tasks;
