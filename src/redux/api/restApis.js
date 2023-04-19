import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { data } from "jquery";

const baseurl = process.env.REACT_APP_BACKEND_BASE_URL;

const accountsAdminUrl = process.env.REACT_APP_ACCOUNTS_ADMIN;
const vehicleAdminUrl = process.env.REACT_APP_VEHICLE_ADMIN_URL;
const restApis = createApi({
  reducerPath: `restApis`,

  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,

    prepareHeaders: (headers, { getState }) => {
      console.log(getState(), "store");
      const token = getState()?.auth?.userData?.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    //get data
    gettingData: builder.query({
      // query: (data) => `${baseurl}vehicle/api/v1/admin/breakdown-tasks/`,
      query: (data) => `${baseurl}/products`,
    }),

    //get single product
    gettingSingleProductData: builder.query({
      query: (data) => {
        console.log("test Data: ", data.id);
        return `/products/${data.id}`;
      },
    }),

    // get employee data
    getEmployeeData: builder.query({
      query: (data) => `https://dummy.restapiexample.com/api/v1/employees/`,
    }),

    getProductData: builder.query({
      query: (data) => `https://hub.dummyapis.com/products`,
    }),

    getImagesFromBackend: builder.query({
      query: (data) => `https://jsonplaceholder.typicode.com/photos`,
    }),

    // post supervisor register data to backend
    addSupervisorRegister: builder.mutation({
      query: (data) => ({
        url: `${accountsAdminUrl}supervisor-register/`,
        method: "POST",
        body: data.data,
      }),
    }),

    // getting users data from backend

    getUserData: builder.query({
      query: (data) =>
        `${accountsAdminUrl}get-all-users/?limit=${data.limit}&offset=${data.offset}`,
    }),

    //get ALL vehicles

    getVehicles: builder.query({
      query: (data) =>
        `${vehicleAdminUrl}get-all-vehicles/?limit=${data.limit}&offset=${data.offset}&search=${data.search}`,
    }),

    //getting issue slips data backend

    getIssueSlips: builder.query({
      query: (data) => `${vehicleAdminUrl}issue-slips/`,
    }),

    // purchase requests
    getAllPurchaseRequests: builder.query({
      query: (data) => `${vehicleAdminUrl}purchase-request/`,
    }),

    getProductsDummyData: builder.query({
      query: (data) =>
        `https://dummyjson.com/products/?limit=${data.limit}&skip=${data.offset}&search=${data.search}`,
    }),
  }),
});

export const {
  useGettingDataQuery,
  useGettingSingleProductDataQuery,
  useGetEmployeeDataQuery,
  useGetProductDataQuery,
  useGetImagesFromBackendQuery,
  useAddSupervisorRegisterMutation,
  useGetUserDataQuery,
  useGetIssueSlipsQuery,
  useGetVehiclesQuery,
  useGetAllPurchaseRequestsQuery,
  useGetProductsDummyDataQuery,
} = restApis;
export default restApis;
