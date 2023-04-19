import { Col, Row, Card } from "reactstrap";
import VehicleReportedDetails from "../Pending/VehicleReportedDetails";
import OnGoingMainPage from "./OnGoingMainPage";
import OngoingFilter from "./OnGoingMainPage/OngoingSearchAndFilter/OngoingFilter";
import OngoingSideNavbar from "./OngoingSideBar";
import OnGoingSubPage from "./OngoingSubPage";
import OnGoingTabs from "./OnGoingTabs";

const MainPage = () => {
  return (
    <Row className="match-height overflow-auto col-12">
      <Col className="col-12 ">
        <OnGoingTabs />
        <OngoingFilter />
        <VehicleReportedDetails />
        {/* <OnGoingMainPage /> */}
      </Col>
    </Row>
  );
};

export default MainPage;
