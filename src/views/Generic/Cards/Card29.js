import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  UncontrolledTooltip,
} from "reactstrap";
import { FaToolbox } from "react-icons/fa";
import AvatarGroup from "@components/avatar-group";

// ** Images
import illustration from "@src/assets/images/illustration/email.svg";
import google from "@src/assets/images/icons/google-chrome.png";
import { MessageSquare } from "react-feather";
import Card31 from "./Card31";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { Button as Button2 } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

export default function Card29({
  companyName,
  description,
  companyImg,
  employeesCount,
  createdAt,
  links,
  buttonClick,
  hideButton,
  chatCount,
  onClickChatIcon,
  projectData,
  userData,
  extraStyles,
  onClickDeleteIcon,
  showDeleteButton,
  showAddLinkButton,
  onAddLinkButton,
  showEditButton,
  onClickEditButton,
}) {
  const history = useHistory();

  //* For copying clipboard
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card style={{ position: "relative" }}>
      {showDeleteButton && (
        <button
          className="rounded-circle bg-opacity-25  border-0 shadow-lg "
          style={{
            padding: "4px",
            position: "absolute",
            right: "4px",
            top: "4px",
            backgroundColor: "#FF0000",
            opacity: "0.7",
            zIndex: "1",
            // boxShadow: "10px 1px 0px 0px #f5f5f5",
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
      <div className="meetup-img-wrapper rounded-top  text-center bg-light-primary">
        <img
          className="w-100 rounded-top "
          style={{ objectFit: "cover" }}
          src={
            companyImg
              ? companyImg
              : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
          }
          height="170"
        />
      </div>
      <CardBody>
        <div className="d-flex justify-content-between pb-1">
          <small>{createdAt}</small>
          <small>{employeesCount ? employeesCount : 0} Employees</small>
        </div>
        <h4>{companyName}</h4>
        <p>{description}</p>

        <div
          className={`d-flex flex-column gap-1 justify-content-between pt-2 ${extraStyles}`}
        >
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
          {projectData &&
            projectData?.map((m) => {
              return (
                <div
                  onClick={() => history.push(`/sales-project/${m?.slug}`)}
                  className="d-flex gap-1 cursor-pointer"
                  key={m?.id}
                >
                  <div
                    className=" bg-light-primary rounded my-auto"
                    style={{ padding: "5px" }}
                  >
                    <FaToolbox size={23} color={"#ff6163"} />
                    {/* {m?.icon} */}
                  </div>
                  <div className="my-auto d-flex flex-column">
                    <small className="">{m?.title}</small>
                    <small>Sales Project</small>
                  </div>
                </div>
              );
            })}

          {userData &&
            userData?.map((m) => {
              return (
                <div className="shadow " key={m?.id}>
                  <Card31
                    name={m?.owner?.user_profile?.name}
                    role={m?.owner?.user_profile?.occupation}
                    // project={m?.projects}
                    image={`${process.env.REACT_APP_BACKEND_IMG_BASEURL}${m?.owner?.user_profile?.image}`}
                  />
                </div>
              );
            })}
        </div>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-between ">
          {!hideButton && (
            <Button color="primary" className=" my-auto" onClick={buttonClick}>
              More
            </Button>
          )}
          {showEditButton && (
            <Button
              color="success"
              className=" my-auto"
              onClick={onClickEditButton}
            >
              Edit
            </Button>
          )}
          <div className="d-flex my-auto w-100 justify-content-end ">
            {links?.map((l, index) => {
              return (
                <>
                  <a target={"_blank"} href={l?.link} key={l?.id}>
                    <img
                      className="rounded"
                      style={{ paddingRight: "2px" }}
                      id={`tooltips-card29-links-${l?.id}`}
                      src={google}
                      height="30"
                    />
                  </a>
                  <UncontrolledTooltip
                    placement="top"
                    target={`tooltips-card29-links-${l?.id}`}
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

            {chatCount && (
              <div
                onClick={onClickChatIcon}
                className="d-flex flex-column  my-auto"
              >
                <MessageSquare size={17} />
                <p
                  className=""
                  style={{ marginLeft: "12px", marginTop: "-5px" }}
                >
                  {chatCount}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
