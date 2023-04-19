// ** Navigation imports
import apps from "./apps";
import pages from "./pages";
import forms from "./forms";
import tables from "./tables";
import others from "./others";
import charts from "./charts";
import dashboards from "./dashboards";
import uiElements from "./ui-elements";

//My export
// import myDashboard from "./myDashboard";
import myHomeDashboard from "./myHomeDashboard";
import myProfileDashBoard from "./myProfileDashBoard";
import srkDashBoard from "./srkDashBoard";
import myTasks from "./myTasks";
import inventory from "./inventory";
import users from "./users";
import purchaseRequest from "./purchaseRequest";
import materialIssueslip from "./materialIssueslip";
import allvehicle from "./allvehicle";
import cards from "./cards";

// ** Merge & Export
export default [
  // ...dashboards,
  // ...apps,
  // ...pages,
  // ...uiElements,
  // ...forms,
  // ...tables,
  // ...charts,
  // ...others,

  //myexport
  // ...myDashboard,

  //mycreateexport
  // ...myHomeDashboard,
  ...srkDashBoard,
  ...myTasks,
  ...inventory,
  ...users,
  ...purchaseRequest,
  ...materialIssueslip,
  ...allvehicle,
  // ...cards,

  // ...myProfileDashBoard,
];
