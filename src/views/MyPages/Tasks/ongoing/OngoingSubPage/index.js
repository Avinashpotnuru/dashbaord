import { Card, Col, Row } from "reactstrap";
import OnGoingCardsBlock from "../OngoingCardsComponent";
import OnGoingCards from "./OngoingCards";
import OnGoingSearchAndFilter from "../OnGoingMainPage/OngoingSearchAndFilter";
import VehicleReportedDetails from "../../Pending/VehicleReportedDetails";
import OngoingFilter from "../OnGoingMainPage/OngoingSearchAndFilter/OngoingFilter";

const OnGoingSubPage = () => {
  return (
    <Row>
      <Col sm="12">
        <OnGoingCardsBlock />
      </Col>
      <Col sm="12">
        <OnGoingSearchAndFilter />
      </Col>
      <OnGoingCards />
      {/* 
      <OngoingFilter /> */}
    </Row>
  );
};

export default OnGoingSubPage;
