import Avatar from "@components/avatar";
import {
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import { MessageSquare } from "react-feather";
import { Button as Button2 } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

const Card1 = ({
  userImage,
  title,
  description,
  chatCount,
  meetingLink,
  onCLick,
  onCLickChatIcon,
}) => {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card>
      <Link to={``}>
        <div className="" style={{ position: "relative" }}>
          <CardImg
            className="img-fluid"
            src={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            }
            alt={"title"}
            top
          />
          <div
            className="d-flex justify-content-between align-itmes-center px-1 w-100"
            style={{ position: "absolute", bottom: 5 }}
          >
            <Avatar
              // className="me-50"
              img={
                userImage
                  ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${userImage}`
                  : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              imgHeight="30"
              imgWidth="30"
            />

            <div className="d-flex gap-1">
              <Circle />
              <Circle />
              <Circle />
            </div>
          </div>
        </div>
      </Link>
      <CardBody>
        <div className="d-flex justify-content-between">
          <h5 className="text-muted me-25">starts in : 2 hours</h5>

          <h5 className="text-muted me-25">Date</h5>
        </div>
        <CardTitle tag="h4">
          <Link className="blog-title-truncate text-body-heading" to={``}>
            {title}
          </Link>
        </CardTitle>

        <CardText>{description} </CardText>

        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-1">
            <Button color={"primary"} onClick={onCLick}>
              More
            </Button>
            {meetingLink && (
              <a target={"_blank"} href={meetingLink}>
                <Button id="tooltip" color="success">
                  Join
                </Button>

                <UncontrolledTooltip
                  placement="top"
                  target="tooltip"
                  className="d-flex flex-nowrap"
                  style={{ wordBreak: "keep-all" }}
                  autohide={false}
                >
                  <div style={{ wordBreak: "keep-all" }}>
                    <p> {meetingLink}</p>
                    <Button2
                      className="rounded"
                      color={clipboard.copied ? "teal" : "blue"}
                      onClick={() => clipboard.copy(meetingLink)}
                    >
                      {clipboard.copied ? "Copied" : "Copy"}
                    </Button2>
                  </div>
                </UncontrolledTooltip>
              </a>
            )}
          </div>

          <div onClick={onCLickChatIcon} className="d-flex align-items-end">
            <MessageSquare />
            <p className="m-0">{chatCount}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Circle = (props) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-success"
      style={{
        width: "30px",
        height: "30px",
        border: "2px white solid",
        borderRadius: "100%",
      }}
    >
      <h4>12</h4>
    </div>
  );
};

export default Card1;
