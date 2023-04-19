import { Printer, Mail } from "react-feather";

export default [
  { header: "office" },
  {
    id: "my-home-dashboard",
    title: "Tech Arion",
    icon: <Printer size={20} />,
    children: [
      {
        id: `section1`,
        title: `Section1`,
        icon: <Printer size={20} />,
        navLink: `/myoffice/section1`,
      },
      {
        id: `section2`,
        title: `Cards Section`,
        icon: <Mail size={20} />,
        navLink: `/myoffice/section2`,
      },
    ],
  },
];
