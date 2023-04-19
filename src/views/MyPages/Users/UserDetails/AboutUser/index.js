import { Row, Col, Card } from "reactstrap";

const AboutUser = () => {
  return (
    <Row className="match-height">
      <Col sm="12">
        <Card className="p-2">
          <h3 className="my-2">About us</h3>

          <p>
            This Fashion Sketching Course (7-videos-
            <br />
            modules) is for beginners: young and old, with an <br />
            interest and passion for designing fashion. In this <br /> Course
            you will learn how the body moves, body{" "}
          </p>

          <h3 className="my-2">Joined</h3>
          <p>November 15, 2022</p>

          <h3 className="my-2">Lives</h3>

          <p>California, USA</p>

          <h3 className="my-2">Email</h3>

          <p>Praveen@1199gmail.com</p>

          <h3 className="my-2">Mobile No.</h3>
          <p>+91 9876543210</p>
        </Card>
      </Col>
    </Row>
  );
};

export default AboutUser;
