import { Circle } from "react-feather";
import { FaTools } from "react-icons/fa";
export default [
  {
    id: "my-task-dashboard",
    title: "Tasks",
    icon: <FaTools size={20} />,
    children: [
      {
        id: `tasks1`,
        title: `pending`,
        icon: <Circle size={10} />,
        navLink: `/tasks/pending`,
      },
      {
        id: `task2`,
        title: `ongoing`,
        icon: <Circle size={10} />,
        navLink: `/tasks/ongoing`,
      },
      {
        id: `task3`,
        title: `completed`,
        icon: <Circle size={10} />,
        navLink: `/tasks/completed`,
      },
    ],
  },
];
