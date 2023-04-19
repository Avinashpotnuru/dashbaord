import Avatar from "@components/avatar";

import profileImg from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import { Badge, Card, CardBody, CardImg, Col, Row } from "reactstrap";

const Card31 = (props) => {
  const { image, imageSize, name, role, project, extraStyles } = props;

  return (
    <div
      className="shadow"
      // style={{ boxShadow: "0px 1px 10px 2px rgba(0, 0, 0, 0.01)" }}
    >
      <Card className="my-auto rounded ">
        <div
          className={`d-flex align-items-center my-auto  px-2 ${extraStyles}`}
          style={{ padding: "4px" }}
        >
          <div
            className="bg-success shadow rounded-circle overflow-hidden"
            style={{
              width: "60px",
              height: "60px",
              border: "solid 5px white",
            }}
          >
            <img src={image} alt="" className="w-100 h-100" />
          </div>

          <div className="m-1 d-flex flex-column  my-auto">
            <small className="m-0 text-primary">{name}</small>
            <small className="m-0 text-danger">{role}</small>
            <small className="m-0">{project}</small>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Card31;
