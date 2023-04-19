import { Card, Row, Col } from "reactstrap";

import mapPic from "../../../../../../../assets/images/srkimages/map.jpg";

const UsersMap = () => {
  return (
    <Row className="match-height">
      <Col sm="12">
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={mapPic}
          alt="map"
        />
      </Col>
    </Row>
  );
};

export default UsersMap;
