import { Button, Card, CardBody } from "reactstrap";

const Card12 = ({ count, title }) => {
  return (
    <Card style={{ width: "100px" }}>
      <CardBody className="text-center d-flex flex-column align-items-center gap-2">
        <h5>{title}</h5>
        <div
          className="bg-light-primary rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "75px", height: "75px" }}
        >
          <h1>{count}</h1>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card12;
