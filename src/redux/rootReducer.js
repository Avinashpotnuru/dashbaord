// ** Reducers Imports
import navbar from "./navbar";

import layout from "./layout";

import auth from "./authentication";

import todo from "@src/views/apps/todo/store";

import chat from "@src/views/apps/chat/store";

import users from "@src/views/apps/user/store";

import email from "@src/views/apps/email/store";

import invoice from "@src/views/apps/invoice/store";

import calendar from "@src/views/apps/calendar/store";

import ecommerce from "@src/views/apps/ecommerce/store";

import dataTables from "@src/views/tables/data-tables/store";

import permissions from "@src/views/apps/roles-permissions/store";

import counter from "./slices/counter";

import popup from "./slices/popup";

import restApis from "./api/restApis";

import tabs from "./slices/tabs";

import allTabs from "./slices/allTabs";
const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  counter,
  popup,
  tabs,
  allTabs,

  [restApis.reducerPath]: restApis.reducer,
};

export default rootReducer;
