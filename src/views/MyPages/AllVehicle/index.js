import { Eye } from "react-feather";

import { Col, Row } from "reactstrap";
import AllVehicleComponent from "./AllVehicleComponent";
import Details from "./AllVehicleComponent/ViewDetailsComponent/ServiceHistory/Details";

import VehicleSearchAndFilter from "./vehicleSearchAndFilter";

function index() {
  return (
    <div className="col-12 overflow-auto ">
      <Row>
        <Col sm="12">
          <VehicleSearchAndFilter />
          <h1 className="text-center my-1">Vehicle Details</h1>
          <AllVehicleComponent />
        </Col>
      </Row>
    </div>
  );
}

export default index;
