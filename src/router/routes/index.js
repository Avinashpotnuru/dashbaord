// ** Routes Imports
import AppRoutes from "./Apps";
import FormRoutes from "./Forms";
import PagesRoutes from "./Pages";
import TablesRoutes from "./Tables";
import ChartsRoutes from "./Charts";
import DashboardRoutes from "./Dashboards";
import UiElementRoutes from "./UiElements";
import ExtensionsRoutes from "./Extensions";
import PageLayoutsRoutes from "./PageLayouts";

//my imports
// import MyDashboardRoutes from "./myRoutes/MyDashboard";
// import MyOfficeDashboardRoutes from "./myOfficeRoutes/myOffice";
// import MyProfileDashboardRoutes from "./myProfileRoutes/myProfile";
// import MyTaskRoutes from "./myTaskRoutes/mytask";
// import MySrkDashBoardRoutes from "./srkMainDashBoardRoutes/srk";
// import InventoryPage from "../../views/pages/srkBoard/myPages/inventoryPage";
// import MyInventory from "./inventoryRoutes/Inventory";
// import MyUserRoutes from "./userRoutes/user";
// import MyIssueSlips from "./IssueSlipsRouters/issueSlips";
// import MyAllVechicles from "./allVehicleRoutes/allVehicle";
// import MyPurchase from "./purchaseRequestRoutes/purchaseRequest";
// import MyCards from "./cardRoutes";

// my imports

import SrkDashBoard from "./Srk/DashBoard";

import Tasks from "./Srk/Tasks";

import MaterialIssueSlip from "./Srk/MaterialIssueSlips";

import Users from "./Srk/Users";

import AllVehicle from "./Srk/AllVehicle";

import PurchaseRequest from "./Srk/PurchaseRequest";

import InventoryRoute from "./Srk/Inventory";

// ** Document title
const TemplateTitle = "%s - SRK DASHBOARD";
// ** Default Route
// const DefaultRoute = "/dashboard/children1";
const DefaultRoute = "/srkdashboard";

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,

  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartsRoutes,

  //my import

  // ...MyOfficeDashboardRoutes,
  // ...MyProfileDashboardRoutes,
  // ...MyTaskRoutes,
  // ...MySrkDashBoardRoutes,
  // ...MyInventory,
  // ...MyUserRoutes,
  // ...MyIssueSlips,
  // ...MyAllVechicles,
  // ...MyPurchase,
  // ...MyCards,

  ...SrkDashBoard,
  ...Tasks,
  ...MaterialIssueSlip,
  ...Users,
  ...AllVehicle,
  ...PurchaseRequest,
  ...InventoryRoute,
];

export { DefaultRoute, TemplateTitle, Routes };
