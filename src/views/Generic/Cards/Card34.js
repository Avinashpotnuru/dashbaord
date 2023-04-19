import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  Col,
  Row,
} from "reactstrap";
import { FaToolbox } from "react-icons/fa";
import Avatar from "@components/avatar";
import avatarImg from "@src/assets/images/portrait/small/avatar-s-20.jpg";
import AvatarGroup from "@components/avatar-group";

import { Carousel } from "react-bootstrap";
import { v4 as uuid } from "uuid";

import sliderImage1 from "@src/assets/images/slider/03.jpg";
import sliderImage2 from "@src/assets/images/slider/04.jpg";
import sliderImage3 from "@src/assets/images/slider/05.jpg";

// ** Images
import illustration from "@src/assets/images/illustration/email.svg";
import google from "@src/assets/images/icons/google-chrome.png";
import { MessageSquare, Plus } from "react-feather";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Card34({
  title,
  description,
  notesImages,
  groupItems,
  chatCount,
  createdAt,
  addItem,
  onClick,
  userImage,
  userName,
  userEmail,
  userPhone,
  companyName,
  companyEmail,
  companyPhone,
  companyEmployees,
  onClickChatButton,
  onClickDeleteIcon,
  showDeleteButton,
}) {
  return (
    <Card className="">
      {notesImages?.length !== 0 && (
        <div className=" ">
          <CarouselCard
            userImage={userImage}
            images={notesImages}
            groupItems={groupItems}
            addItem={addItem}
          />
        </div>
      )}

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
        {notesImages?.length === 0 && (
          <div
            className="d-flex justify-content-between w-100 px-1 pb-1"
            // style={{ position: "absolute", bottom: "0" }}
          >
            {userImage && (
              <Avatar
                img={
                  userImage
                    ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${userImage}`
                    : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                }
              />
            )}

            {groupItems && (
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
        )}

        {/* <div className="d-flex justify-content-between pb-1">
          <small>{createdAt}</small>
          <small>Files</small>
        </div>
        <h4>{title}</h4>
        <p>{description}</p> */}

        <div
          className=" border-1 border-light mx-auto d-flex"
          style={{ padding: "3px" }}
        >
          <div
            className="bg-success shadow rounded-circle overflow-hidden my-auto"
            style={{
              width: "70px",
              height: "70px",
              border: "solid 5px white",
            }}
          >
            <img
              src={
                userImage
                  ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${userImage}`
                  : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
              }
              alt=""
              className="w-100 h-100"
            />
          </div>
          <small
            className="text-black my-auto pt-1"
            style={{ marginLeft: "2px" }}
          >
            <p>Name : {userName}</p>
            <p>Phone : {userPhone}</p>
            <p>
              Email :{" "}
              <span className="" style={{ wordBreak: "break-word" }}>
                {userEmail}
              </span>
            </p>
          </small>
        </div>
        <hr />
        <div className="  text-black  " style={{ marginTop: "6px" }}>
          <h4 className="mx-auto d-flex  py-1">Company Details</h4>
          <p>Name : {companyName}</p>
          <p>Email : {companyEmail}</p>
          <p>Phone : {companyPhone}</p>
          <p>Employees: {companyEmployees}</p>
        </div>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-between">
          <Button onClick={onClick} color="primary" className=" my-auto">
            More
          </Button>

          <div
            onClick={onClickChatButton}
            className="d-flex flex-column my-auto"
          >
            <MessageSquare size={17} />
            <p
              className="my-auto"
              style={{ marginLeft: "12px", marginTop: "-5px" }}
            >
              {chatCount}
            </p>
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
          src={
            i?.image
              ? `${i?.image}`
              : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
          }
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
        <Avatar
          img={
            userImage
              ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${userImage}`
              : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
          }
        />

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
      </div>
    </Card>
  );
}
