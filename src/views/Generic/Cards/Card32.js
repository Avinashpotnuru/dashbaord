import Avatar from "@components/avatar";
import { Button as Button2 } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { GoLinkExternal } from "react-icons/go";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Card32 = ({
  name,
  occupation,
  email,
  phone,
  profileImg,
  buttonClick,
  hideButton,
  buttonClick2,
  hideButton2,
  buttonName2,
  callsCount,
  emailsCount,
  commentsCount,
  reminderCount,
  linkedin,
  city,
  type,
  last_interaction,
  expected_revenue,
  onClickDeleteIcon,
  showDeleteButton,
  linkedinId,
}) => {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card style={{ position: "relative" }}>
      {showDeleteButton && (
        <button
          className="rounded-circle  bg-opacity-25 shadow border-0 "
          style={{
            padding: "4px",
            position: "absolute",
            right: "4px",
            top: "4px",
            backgroundColor: "#FF0000",
            opacity: "0.7",
            zIndex: "1",
          }}
        >
          <RiDeleteBin6Fill
            onClick={onClickDeleteIcon}
            // style={{ opacity: ".8" }}
            color="white"
            size={18}
            className="m-auto "
          />
        </button>
      )}
      <CardBody>
        <div className="d-flex align-items-center">
          <div
            className="bg-success shadow rounded-circle overflow-hidden"
            style={{
              width: "80px",
              height: "80px",
              border: "solid 5px white",
            }}
          >
            <img
              src={
                profileImg
                  ? profileImg
                  : "https://cdn5.vectorstock.com/i/thumb-large/76/39/404-error-like-laptop-with-dead-emoji-vector-24347639.jpg"
              }
              alt=""
              className="w-100 h-100"
            />
          </div>

          <div className="m-1">
            <h6 className="m-0 text-capitalize text-primary">
              {name ? name : "Not Found"}
            </h6>
            <p className="m-0 text-danger">
              {occupation ? occupation : "Not Found"}
            </p>
            <a href={linkedin} target="_blank">
              <p
                id={`leads-linkedin-${linkedinId}`}
                style={{ fontSize: "12px" }}
                className="m-0 fw-bold"
              >
                LinkedIn
                <GoLinkExternal size={13} />
              </p>
              <UncontrolledTooltip
                placement="top"
                target={`leads-linkedin-${linkedinId}`}
                className="d-flex flex-nowrap"
                style={{ wordBreak: "keep-all" }}
                autohide={false}
              >
                <div style={{ wordBreak: "keep-all" }}>
                  <p>{linkedin}</p>
                  <Button2
                    className="rounded"
                    color={clipboard.copied ? "teal" : "blue"}
                    onClick={() => clipboard.copy(linkedin)}
                  >
                    {clipboard.copied ? "Copied" : "Copy"}
                  </Button2>
                </div>
              </UncontrolledTooltip>
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-between w-100 mt-1 gap-1">
          <div className="d-flex flex-column ">
            <small className="" style={{ paddingBottom: "2px" }}>
              {email ? email : "Not Found"}
            </small>
            <>
              <Badge className="profile-badge" color="light-primary">
                Email
              </Badge>
            </>
          </div>

          <div className="d-flex flex-column ">
            <small style={{ paddingBottom: "2px" }}>
              {phone ? phone : "Not Found"}
            </small>
            <Badge className="profile-badge" color="light-primary">
              Phone
            </Badge>
          </div>
        </div>

        {(city || last_interaction || expected_revenue || type) && (
          <div className="border-1 border-top pt-1 mt-1 ">
            {city && (
              <small className="d-flex justify-content-between">
                City{" "}
                <span className="align-items-end">
                  :{" "}
                  <Badge className="profile-badge" color="light-primary">
                    {city}
                  </Badge>
                </span>
              </small>
            )}

            {last_interaction && (
              <small className="d-flex justify-content-between">
                Last Interaction{" "}
                <span>
                  :{" "}
                  <Badge className="profile-badge" color="light-primary">
                    {last_interaction}
                  </Badge>
                </span>
              </small>
            )}

            {expected_revenue && (
              <small className="d-flex justify-content-between">
                Expected Revenue{" "}
                <span>
                  :{" "}
                  <Badge className="profile-badge" color="light-primary">
                    {expected_revenue}
                  </Badge>
                </span>
              </small>
            )}

            {type && (
              <small className="d-flex justify-content-between">
                Type{" "}
                <span>
                  :{" "}
                  <Badge className="profile-badge" color="light-primary">
                    {type}
                  </Badge>
                </span>
              </small>
            )}
          </div>
        )}
        <hr className="mb-2" />

        <Row>
          <Col sm="6" className="my-1 col-6">
            <div className="text-center">
              <h3 className="mb-0">{callsCount ? callsCount : 0}</h3>
              <h6 className="text-muted fw-bolder">Calls</h6>
            </div>
          </Col>
          <Col sm="6" className="my-1 col-6">
            <div className="text-center">
              <h3 className="mb-0">{emailsCount ? emailsCount : 0}</h3>
              <h6 className="text-muted fw-bolder">Emails</h6>
            </div>
          </Col>
          <Col sm="6" className="my-1 col-6">
            <div className="text-center">
              <h3 className="mb-0">{commentsCount ? commentsCount : 0}</h3>
              <h6 className="text-muted fw-bolder">Comments</h6>
            </div>
          </Col>
          <Col sm="6" className="my-1 col-6">
            <div className="text-center">
              <h3 className="mb-0">{reminderCount ? reminderCount : 0}</h3>
              <h6 className="text-muted fw-bolder">Reminder</h6>
            </div>
          </Col>
        </Row>

        {!hideButton2 && (
          <Button
            className="w-100 my-1"
            color={"primary"}
            onClick={buttonClick2}
          >
            {buttonName2}
          </Button>
        )}

        {!hideButton && (
          <Button className="w-100" color={"primary"} onClick={buttonClick}>
            More
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default Card32;
