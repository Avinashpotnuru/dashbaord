import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { FaToolbox } from "react-icons/fa";
import Avatar from "@components/avatar";
import avatarImg from "@src/assets/images/portrait/small/avatar-s-20.jpg";
import AvatarGroup from "@components/avatar-group";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { Carousel } from "react-bootstrap";
import { v4 as uuid } from "uuid";

import sliderImage1 from "@src/assets/images/slider/03.jpg";
import sliderImage2 from "@src/assets/images/slider/04.jpg";
import sliderImage3 from "@src/assets/images/slider/05.jpg";

// ** Images
import illustration from "@src/assets/images/illustration/email.svg";
import google from "@src/assets/images/icons/google-chrome.png";
import { MessageSquare, Plus } from "react-feather";

export default function Card30({
  title,
  description,
  notesImages,
  groupItems,
  chatCount,
  createdAt,
  addItem,
  onClick,
  chatIconClick,
  userImage,
  showDeleteButton,
  onClickDeleteIcon,
  userName,
}) {
  return (
    <Card style={{ position: "relative" }}>
      {notesImages?.length !== 0 && (
        <div className=" ">
          <CarouselCard
            images={notesImages}
            groupItems={groupItems}
            addItem={addItem}
            userImage={userImage}
          />
        </div>
      )}

      {notesImages?.length === 0 && groupItems && (
        <div className="d-flex justify-content-between w-100 px-1 py-1 mt-3">
          {userImage && (
            <Avatar
              img={userImage}
              // id="tooltip-user-name"
              className="bg-light"
            />
          )}

          <div
            className="d-flex justify-content-end  w-100"
            style={{ zIndex: "2" }}
          >
            <AvatarGroup data={groupItems} />
            <div style={{ marginLeft: "-14px" }}>
              <div className="border-1 border-white shadow bg-white rounded-circle d-flex justify-content-end">
                <Avatar icon={<Plus size={22} />} onClick={addItem} />
              </div>
            </div>
          </div>
        </div>
      )}

      {showDeleteButton && (
        <button
          className="rounded-circle  bg-opacity-25 shadow border-0"
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
        <div className="d-flex justify-content-between pb-1">
          <small>{createdAt}</small>
          <small>Files</small>
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-between ">
          <Button onClick={onClick} color="primary" className="  my-auto">
            More
          </Button>
          <div className="d-flex my-auto  ">
            <div className="d-flex flex-column ">
              <MessageSquare
                size={17}
                onClick={chatIconClick ? chatIconClick : () => {}}
              />
              <p className="" style={{ marginLeft: "12px", marginTop: "-7px" }}>
                {chatCount}
              </p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function CarouselCard({ images, groupItems, addItem, userImage, userName }) {
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
          {userImage && (
            <Avatar
              img={userImage}
              // id="tooltip-user-name"
              className="bg-light"
            />
          )}

          {/* <UncontrolledTooltip
            placement="top"
            target="tooltip-user-name"
            autohide={false}
          >
            <div style={{ wordBreak: "keep-all" }}>
              <p>{userName ? userName : "Not Found"}</p>
            </div>
          </UncontrolledTooltip> */}
        </div>

        {imagesData && groupItems && (
          <div className="d-flex" style={{ zIndex: "2" }}>
            <AvatarGroup data={groupItems ? groupItems : []} />
            <div style={{ marginLeft: "-14px" }}>
              <div
                className="border-1 border-white shadow bg-white rounded-circle"

                // style={{ padding: "1px" }}
              >
                <Avatar icon={<Plus size={22} />} onClick={addItem} />
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
