import { Card } from "reactstrap";
import { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import OnGoingCards from "../OngoingSubPage/OngoingCards";
import { useDispatch, useSelector } from "react-redux";
import { onGoingTabsHandler } from "../../../../../redux/slices/allTabs";
const OngoingSideNavbar = () => {
  const [active, setActive] = useState("1");

  const toggleState = useSelector((state) => state.allTabs.onGoingTabs.tabs);
  console.log(toggleState);

  const dispatch = useDispatch();

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);

      dispatch(onGoingTabsHandler(tab));
    }
  };
  return (
    <Card>
      <div className="nav-vertical">
        <Nav tabs className="nav-left">
          <NavItem>
            <NavLink
              active={active === "1"}
              onClick={() => {
                toggle("1");
                dispatch(onGoingTabsHandler("1"));
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "2"}
              onClick={() => {
                toggle("2");
                dispatch(onGoingTabsHandler("2"));
              }}
            >
              Inspection Pending
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "3"}
              onClick={() => {
                toggle("3");
                dispatch(onGoingTabsHandler("3"));
              }}
            >
              Inspection Approval Pending
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "4"}
              onClick={() => {
                toggle("4");
                dispatch(onGoingTabsHandler("4"));
              }}
            >
              Material Requested
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "5"}
              onClick={() => {
                toggle("5");
                dispatch(onGoingTabsHandler("5"));
              }}
            >
              Request for Shift Vehicle
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "6"}
              onClick={() => {
                toggle("6");
                dispatch(onGoingTabsHandler("6"));
              }}
            >
              Repair Approval Pending
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={active === "7"}
              onClick={() => {
                toggle("7");
                dispatch(onGoingTabsHandler("7"));
              }}
            >
              Shifted Vehicles
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={active}>
          <TabPane tabId="1">{/* <OnGoingCards /> */}</TabPane>
          <TabPane tabId="2">
            {/* <p>
              Sugar plum tootsie roll biscuit caramels. Liquorice brownie pastry
              cotton candy oat cake fruitcake jelly chupa chups. Sweet fruitcake
              cheesecake biscuit cotton candy. Cookie powder marshmallow donut.
              Pudding caramels pastry powder cake soufflé wafer caramels.
              Jelly-o pie cupcake.
            </p> */}
            <OnGoingCards />
          </TabPane>
          <TabPane tabId="3">
            {/* <p>
              Icing croissant powder jelly bonbon cake marzipan fruitcake.
              Tootsie roll marzipan tart marshmallow pastry cupcake chupa chups
              cookie. Fruitcake dessert lollipop pudding jelly. Cookie dragée
              jujubes croissant lemon drops cotton candy. Carrot cake candy
              canes powder donut toffee cookie.
            </p> */}
          </TabPane>
        </TabContent>
      </div>
    </Card>
  );
};

export default OngoingSideNavbar;
