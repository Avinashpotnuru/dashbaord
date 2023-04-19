import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  UncontrolledTooltip,
} from "reactstrap";
import { FaToolbox } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Avatar from "@components/avatar";
import AvatarGroup from "@components/avatar-group";
import { Button as Button2 } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

// ** Images
import illustration from "@src/assets/images/illustration/email.svg";
import google from "@src/assets/images/icons/google-chrome.png";
import { MessageSquare, Plus } from "react-feather";

export default function Card36({
  companyName,
  description,
  companyImg,
  employeesCount,
  createdAt,
  links,
  buttonClick,
  hideButton,
  commentsLength,
  projectName,

  onClickMoreButton,
  showMoreButton,
  showAddLinkButton,
  onAddLinkButton,
  // * Carousel props
  carouselImages,
  groupItems,
  addItem,
}) {
  //* For copying clipboard
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card>
      {carouselImages?.length !== 0 && (
        <div className=" ">
          <CarouselCard
            images={carouselImages}
            groupItems={groupItems}
            addItem={addItem}
          />
        </div>
      )}

      {carouselImages?.length === 0 && groupItems && (
        <div className="d-flex p-1" style={{ zIndex: "2" }}>
          <AvatarGroup data={groupItems} />
          <div style={{ marginLeft: "-14px" }}>
            <div className="border-1 border-white shadow bg-white rounded-circle">
              <Avatar icon={<Plus size={22} />} onClick={addItem} />
            </div>
          </div>
        </div>
      )}

      <CardBody>
        <div className="d-flex justify-content-between pb-1">
          <small>{createdAt ? createdAt : "Not Found"}</small>
          <small>{employeesCount ? employeesCount : 0} Employees</small>
        </div>
        <h4>{companyName}</h4>
        <p>{description}</p>

        <div className="d-flex justify-content-start pt-2">
          {(projectName || employeesCount) && (
            <div className="d-flex my-auto gap-1">
              <div
                className=" bg-light-primary rounded "
                style={{ padding: "5px" }}
              >
                <FaToolbox size={23} color={"#ff6163"} />
              </div>
              <div className="my-auto d-flex flex-column">
                <small className="fs-5">{employeesCount}</small>
                <small>{projectName}</small>
              </div>
            </div>
          )}

          {/* <div className="d-flex my-auto gap-1">
            <div
              className=" bg-light-primary rounded "
              style={{ padding: "5px" }}
            >
              <FaToolbox size={23} color={"#ff6163"} />
            </div>
            <div className="my-auto d-flex flex-column">
              <small className="fs-5">1</small>
              <small>Sales Projects</small>
            </div>
          </div> */}
        </div>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-between ">
          {!hideButton && (
            <Button color="success" className=" my-auto" onClick={buttonClick}>
              Edit
            </Button>
          )}

          <div className="d-flex my-auto w-100 justify-content-end">
            {links?.length !== 0 &&
              links?.map((l, index) => {
                return (
                  <>
                    <a target={"_blank"} href={l?.link} key={l?.id}>
                      <img
                        className="rounded me-1"
                        id={`tooltips-links-${l?.id}`}
                        src={google}
                        height="30"
                      />
                    </a>
                    <UncontrolledTooltip
                      placement="top"
                      target={`tooltips-links-${l?.id}`}
                      autohide={false}
                    >
                      <div style={{ wordBreak: "keep-all" }}>
                        <p> {l?.link}</p>
                        <Button2
                          className="rounded"
                          color={clipboard.copied ? "teal" : "blue"}
                          onClick={() => clipboard.copy(l?.link)}
                        >
                          {clipboard.copied ? "Copied" : "Copy"}
                        </Button2>
                      </div>
                    </UncontrolledTooltip>
                  </>
                );
              })}

            {showAddLinkButton && (
              <Button
                color="primary"
                className=" my-auto"
                onClick={onAddLinkButton}
              >
                Add Link
              </Button>
            )}

            {commentsLength && (
              <div className="d-flex flex-column  my-auto">
                <MessageSquare size={17} />
                <p
                  className=""
                  style={{ marginLeft: "12px", marginTop: "-5px" }}
                >
                  {commentsLength}
                </p>
              </div>
            )}

            {showMoreButton && (
              <Button
                color="primary"
                className=" my-auto d-flex justify-content-end"
                onClick={onClickMoreButton}
              >
                More
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function CarouselCard({ images, groupItems, addItem, userImage }) {
  const imagesData = images?.map((i) => {
    return (
      <Carousel.Item key={uuid()}>
        <img
          src={`${process.env.REACT_APP_BACKEND_IMG_BASEURL}${i?.image}`}
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
        className="d-flex justify-content-end w-100 px-1 py-1"
        style={{ position: "absolute", bottom: "0" }}
      >
        {userImage && <Avatar img={userImage} />}

        {imagesData && groupItems && (
          <div className="d-flex" style={{ zIndex: "2" }}>
            <AvatarGroup data={groupItems} />
            <div style={{ marginLeft: "-14px" }}>
              <div className="border-1 border-white shadow bg-white rounded-circle">
                <Avatar icon={<Plus size={22} />} onClick={addItem} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
