import { GrNotes } from "react-icons/gr";
import { Card, Col } from "reactstrap";

const OnGoingTaskCard = (props) => {
  const { data } = props;
  const { id, title, status, color } = data;
  return (
    <Col className="col-3 ">
      <Card>
        <div className="d-flex justify-content-around align-items-center p-1">
          <div key={id} className="my-auto">
            <h1>{title}</h1>
            <p>{status}</p>
          </div>
          <div
            className="rounded-circle"
            style={{ backgroundColor: `${color}`, padding: "10px" }}
          >
            <GrNotes size={"20px"} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default OnGoingTaskCard;
