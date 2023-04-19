import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
  Card,
} from "reactstrap";
import { useState } from "react";
import TaskDetailsFilter from "../TaskDetailsFilter";
import Table from "../DataTable";

import SearchEngines from "../SearchEngines";

import { useGetProductsDummyDataQuery } from "../../../../../redux/api/restApis";
import VehicleViewDetails from "../../../AllVehicle/VechicalViewDetails";

const TabsAndFilter = () => {
  const { data: dummyData } = useGetProductsDummyDataQuery({
    limit: 10,
    offset: 0,
  });
  console.log("dummy", dummyData);

  const [active, setActive] = useState("1");
  // const columns = [];
  const columns = [
    {
      name: "ID",
      cell: (row) => row?.id,
    },
    {
      name: "PRODUCT NAME",
      cell: (row) => row?.title,
    },
    {
      name: "CATEGORY",
      cell: (row) => row?.category,
    },
    {
      name: "PRICE",
      cell: (row) => row?.price,
    },
    {
      name: "RATING",
      cell: (row) => row?.rating,
    },
    {
      name: "STOCK",
      cell: (row) => row?.stock,
    },
  ];

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  return (
    <div className="  ">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <Nav className="my-2" tabs>
            <NavItem>
              <NavLink
                className="mx-2 rounded-3"
                style={{
                  border: "solid black 2px",
                  backgroundColor: active === "1" ? "#00a7ff" : "",
                  color: active === "1" ? "white" : "black",
                }}
                // active={active === "1"}
                onClick={() => {
                  toggle("1");
                }}
              >
                All
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="mx-2 rounded-3"
                style={{
                  border: "solid black 2px",
                  backgroundColor: active === "2" ? "#00a7ff" : "",
                  color: active === "2" ? "white" : "black",
                }}
                // active={active === "2"}
                onClick={() => {
                  toggle("2");
                }}
              >
                Pending
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="mx-2 rounded-3"
                style={{
                  border: "solid black 2px",
                  backgroundColor: active === "3" ? "#00a7ff" : "",
                  color: active === "3" ? "white" : "black",
                }}
                // active={active === "3"}
                onClick={() => {
                  toggle("3");
                }}
              >
                Completed
              </NavLink>
            </NavItem>
          </Nav>
          <TaskDetailsFilter />
        </div>
        <Table
          tableTitle={"Products"}
          columns={columns}
          customHook={useGetProductsDummyDataQuery}
          defaultPaginationCount={10}
          dataLooper={(data) => data?.products}
          // showSearch={true}
          expandableRow={true}
          expandOnRowClick={true}
          expandedComponent={VehicleViewDetails}
        />
        {/* <SearchEngines /> */}

        {/* <TabContent className="py-50" activeTab={active}>
          <TabPane tabId="1">
            <p>
              Candy canes donut chupa chups candy canes lemon drops oat cake
              wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps
              lemon drops candy marzipan donut brownie tootsie roll. Icing
              croissant bonbon biscuit gummi bears. Pudding candy canes sugar
              plum cookie chocolate cake powder croissant.
            </p>
            <p>
              Carrot cake tiramisu danish candy cake muffin croissant tart
              dessert. Tiramisu caramels candy canes chocolate cake sweet roll
              liquorice icing cupcake. Candy cookie sweet roll bear claw sweet
              roll.
            </p>
          </TabPane>
          <TabPane tabId="2">
            <p>
              Dragée jujubes caramels tootsie roll gummies gummies icing bonbon.
              Candy jujubes cake cotton candy. Jelly-o lollipop oat cake
              marshmallow fruitcake candy canes toffee. Jelly oat cake pudding
              jelly beans brownie lemon drops ice cream halvah muffin. Brownie
              candy tiramisu macaroon tootsie roll danish.
            </p>
            <p>
              Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart
              jelly-o caramels apple pie jelly danish marshmallow. Icing
              caramels lollipop topping. Bear claw powder sesame snaps.
            </p>
          </TabPane>
          <TabPane tabId="3">
            <p>
              Gingerbread cake cheesecake lollipop topping bonbon chocolate
              sesame snaps. Dessert macaroon bonbon carrot cake biscuit.
              Lollipop lemon drops cake gingerbread liquorice. Sweet gummies
              dragée. Donut bear claw pie halvah oat cake cotton candy sweet
              roll. Cotton candy sweet roll donut ice cream.
            </p>
            <p>
              Halvah bonbon topping halvah ice cream cake candy. Wafer gummi
              bears chocolate cake topping powder. Sweet marzipan cheesecake
              jelly-o powder wafer lemon drops lollipop cotton candy.
            </p>
          </TabPane>
        </TabContent> */}
      </div>
      <div>{/* <VehicleViewDetails /> */}</div>
    </div>
  );
};

// const DetailsDropBox = ({ data }) => {
//   console.log("data: ", data);
//   return <h1>DetailsDropBox </h1>;
// };

export default TabsAndFilter;
