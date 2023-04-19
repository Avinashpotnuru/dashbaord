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

import { Carousel } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Card1 = ({
  userImage,
  title,
  description,
  chatCount,
  meetingLink,
  onCLick,
  onCLickChatIcon,
  addItem,
  notesImages,
  userName,
  date,
  startTime,
}) => {
  const clipboard = useClipboard({ timeout: 500 });

  let theDate = new Date(date);
  let year = theDate.getFullYear().toString().slice(-2);
  let month = theDate.getMonth() + 1;
  let day = theDate.getDate();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return (
    <Card>
      {/* <Link to={``}> */}
      {/* <CardImg
            className="img-fluid"
            src={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            }
            alt={"title"}
            top
          /> */}
      <div className="" style={{ position: "relative" }}>
        <div className=" ">
          {notesImages && notesImages?.length !== 0 && (
            <CarouselCard
              images={notesImages}
              // groupItems={groupItems}
              addItem={addItem}
              userImage={userImage}
              userName={userName}
              day={day}
              month={month}
              year={year}
            />
          )}
        </div>

        {notesImages?.length === 0 && (
          <div
            className="d-flex justify-content-between align-itmes-center px-1 pt-1 w-100"
            // style={{ position: "absolute", bottom: 5 }}
          >
            <div>
              <Avatar
                // className="me-50"
                id="tooltip-sales-project-appointments-owner-name-1"
                img={
                  userImage
                    ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${userImage}`
                    : "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"
                }
                imgHeight="30"
                imgWidth="30"
              />
              <UncontrolledTooltip
                placement="top"
                target="tooltip-sales-project-appointments-owner-name-1"
                autohide={false}
              >
                <div style={{ wordBreak: "keep-all" }}>
                  <p>{userName}</p>
                </div>
              </UncontrolledTooltip>
            </div>

            <div className="d-flex justify-content-end w-100 ">
              <Circle data={day} />
              <Circle data={month} />
              <Circle data={year} />
            </div>
          </div>
        )}
      </div>
      {/* </Link> */}
      <CardBody>
        <div className="d-flex justify-content-between">
          <h5 className="text-muted me-25">Starts in : {startTime}</h5>

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
                <Button id="tooltip-join-meet-lnk" color="success">
                  Join
                </Button>

                <UncontrolledTooltip
                  placement="top"
                  target="tooltip-join-meet-lnk"
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

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

function CarouselCard({
  images,
  groupItems,
  addItem,
  userImage,
  userName,
  day,
  month,
  year,
}) {
  const imagesData = images?.map((i) => {
    return (
      <Carousel.Item key={uuid()}>
        <img
          src={`${i?.image}`}
          className="img-fluid rounded"
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
      </Carousel.Item>
    );
  });

  return (
    <Card className="col-12 " style={{ position: "relative" }}>
      <Carousel pause={true} interval="9000" style={{ objectFit: "cover" }}>
        {imagesData}
      </Carousel>
      <div
        className="d-flex justify-content-between w-100 px-1 py-1"
        style={{ position: "absolute", bottom: "0" }}
      >
        <div>
          <Avatar
            id="tooltip-sales-project-appointments-owner-name-2"
            img={
              userImage
                ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${userImage}`
                : "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"
            }
            imgHeight="30"
            imgWidth="30"
          />
          <UncontrolledTooltip
            placement="top"
            target="tooltip-sales-project-appointments-owner-name-2"
            autohide={false}
          >
            <div style={{ wordBreak: "keep-all" }}>
              <p>{userName}</p>
            </div>
          </UncontrolledTooltip>
        </div>

        <div className="d-flex justify-content-end w-100 ">
          <Circle data={day} />
          <Circle data={month} />
          <Circle data={year} />
        </div>
      </div>
    </Card>
  );
}

const Circle = ({ data }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        width: "39px",
        height: "33px",
        border: "2px white solid",
        borderRadius: "100%",
        margin: "1px",
        backgroundColor: randColor(),
        opacity: "85%",
      }}
    >
      <h4 className="text-white m-auto" style={{ opacity: "100%" }}>
        {data}
      </h4>
    </div>
  );
};

export default Card1;
