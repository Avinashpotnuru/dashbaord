import React from "react";
import { Col, Row } from "reactstrap";
import VehicleReportedDetails from "../../Pending/VehicleReportedDetails";
import OnGoingCardsBlock from "../OngoingCardsComponent";
import OnGoingCards from "../OngoingSubPage/OngoingCards";
import OnGoingSearchAndFilter from "./OngoingSearchAndFilter";
import OngoingFilter from "./OngoingSearchAndFilter/OngoingFilter";

const OnGoingMainPage = () => {
  return (
    <div>
      <Row className="match-height col-12">
        <Col sm="12">
          <OnGoingCardsBlock />
        </Col>
        <Col sm="12">
          <OnGoingSearchAndFilter />
        </Col>
        <Col sm="12">
          <OnGoingCards />
        </Col>
        {/* <VehicleReportedDetails /> */}
        {/* <OngoingFilter /> */}
      </Row>
    </div>
  );
};

export default OnGoingMainPage;
