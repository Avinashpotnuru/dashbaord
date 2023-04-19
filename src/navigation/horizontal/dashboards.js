// ** Icons Import
import {
  Home,
  Circle,
  Activity,
  ShoppingCart,
  MessageSquare,
  Mail,
  Calendar,
} from "react-feather";

export default [
  {
    id: "dashboard_1",
    title: "Dashboard_1",
    icon: <Home />,
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        icon: <Activity />,
        navLink: "/dashboard/analytics",
      },
      {
        id: "eCommerceDash",
        title: "eCommerce",
        icon: <ShoppingCart />,
        navLink: "/dashboard/ecommerce",
      },
    ],
  },
  {
    id: "dashboard1",
    title: "Dashboard_2",
    icon: <Home size={20} />,
    badgeText: "3",
    badge: "light-warning",
    children: [
      {
        id: "analyticsDash",
        title: "EmailPage",
        icon: <Mail size={12} />,
        navLink: "/apps/email",
      },
      {
        id: "eCommerceDash",
        title: "ChatPage",
        icon: <MessageSquare size={12} />,
        navLink: "/apps/chat",
      },
      {
        id: "eCommerceDash",
        title: "Calender",
        icon: <Calendar size={12} />,
        navLink: "/apps/calendar",
      },
    ],
  },
];
