import Avatar from "@components/avatar";

import profileImg from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import { Edit } from "react-feather";
import { Badge, Card, CardBody, CardImg, Col, Row } from "reactstrap";

const Card7 = (props) => {
  const {
    image,
    imageSize,
    name,
    role,
    project,
    email,
    phone,
    calls,
    emails,
    comments,
    reminders,
    textColor,
    onClickEditIcon,
    showEditIcon,
  } = props;

  return (
    <Card>
      <CardBody>
        <div className="d-flex align-items-center">
          <div
            className="bg-success shadow rounded-circle overflow-hidden"
            style={{
              width: "80px",
              height: "80px",
              border: "solid 5px white",
              position: "relative",
            }}
          >
            <img
              src={
                image
                  ? image
                  : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
              }
              alt=""
              className="w-100 h-100 "
            />
            {showEditIcon && (
              <div
                onClick={onClickEditIcon}
                className="  "
                style={{
                  position: "absolute",
                  bottom: "3px",
                  right: "4px",
                  // zIndex: "1",
                  // opacity: "0.9",
                  padding: "2px",
                }}
              >
                <Edit size={17} color="orange" />
              </div>
            )}
          </div>

          <div className="m-1">
            <h6
              className={`text-capitalize m-0 text-${
                textColor ? textColor : "primary"
              }`}
            >
              {name}
            </h6>
            <p className="m-0 text-danger">{role}</p>
            {project && <p className="m-0">{project}</p>}
          </div>
        </div>

        <div className="d-flex justify-content-between gap-1 w-100 mt-1">
          {email && (
            <Badge
              className="profile-badge text-wrap w-50"
              color="light-primary"
            >
              {email}
            </Badge>
          )}
          {phone && (
            <Badge className="profile-badge w-50 my-auto" color="light-primary">
              {phone}
            </Badge>
          )}
        </div>
        {/* <hr className="mb-2" /> */}
        {calls && emails && comments && reminders && (
          <Row className="border-top border-1 border-light-secondary pt-2">
            {calls && (
              <Col sm="6" className="my-1">
                <div>
                  <h3 className="mb-0">10.3k</h3>
                  <h6 className="text-muted fw-bolder">Calls</h6>
                </div>
              </Col>
            )}

            {emails && (
              <Col sm="6" className="my-1">
                <div>
                  <h3 className="mb-0">10.3k</h3>
                  <h6 className="text-muted fw-bolder">Emails</h6>
                </div>
              </Col>
            )}

            {comments && (
              <Col sm="6" className="my-1">
                <div>
                  <h3 className="mb-0">10.3k</h3>
                  <h6 className="text-muted fw-bolder">Comments</h6>
                </div>
              </Col>
            )}

            {reminders && (
              <Col sm="6" className="my-1">
                <div>
                  <h3 className="mb-0">10.3k</h3>
                  <h6 className="text-muted fw-bolder">Reminder</h6>
                </div>
              </Col>
            )}
          </Row>
        )}
      </CardBody>
    </Card>
  );
};

export default Card7;
