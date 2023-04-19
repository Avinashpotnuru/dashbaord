import { User, Table } from "react-feather";

export default [
  { header: "profile" },
  {
    id: "my-profile-dashboard",
    title: "Profile",
    icon: <User size={20} />,
    children: [
      {
        id: `profile1`,
        title: `Profile1`,
        icon: <User size={20} />,
        navLink: `/myprofile/profile1`,
      },
      {
        id: `profile2`,
        title: `Tables`,
        icon: <Table size={20} />,
        navLink: `/myprofile/tables`,
      },
    ],
  },
];
