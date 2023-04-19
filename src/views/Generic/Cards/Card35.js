import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import Avatar from "@components/avatar";
import AvatarGroup from "@components/avatar-group";
import { FaToolbox } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";

import { GrAttachment } from "react-icons/gr";
import { RiVipDiamondFill } from "react-icons/ri";
import { MoreVertical } from "react-feather";
import Card7 from "./Card7";

import avatarImg from "@src/assets/images/portrait/small/avatar-s-20.jpg";
import profileImg from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import Card31 from "./Card31";

export default function Card35({
  image,
  name,
  email,
  status,
  description,
  date,
  relatedData,
  toDate,
  fromDate,
  reviewDate,
  imagesData,
  projectName,
  onClickProject,
  developerType,
  projectOwnerDetails,
  developerCost,
}) {
  return (
    <Card className="w-100">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex gap-1">
            <Avatar
              className="d-none d-sm-block"
              img={
                image
                  ? image
                  : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
              }
              size="lg"
            />
            <Avatar
              className="d-nod-block d-sm-none m-auto"
              img={
                image
                  ? image
                  : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
              }
              size=""
            />
            <div className="d-flex flex-column my-auto">
              <small className=" fs-sm-6">{name}</small>
              <small className="text-opacity-50 text-dark">{email}</small>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row gap-sm-2 my-auto">
            {/* <div className="d-flex ">
              <span className="text-center my-auto">CC</span>
              <span className="">
                <AvatarGroup data={data} />
              </span>
            </div> */}

            {status && (
              <div className="d-flex ">
                <small className="my-auto ">Status</small>
                <Button
                  color={
                    status === "APPROVAL"
                      ? "success"
                      : status === "CLIENT"
                      ? "primary"
                      : status === "CANCELLED"
                      ? "danger"
                      : "warning"
                  }
                  className="mx-sm-1"
                  style={{ marginLeft: "2px" }}
                >
                  <small className="fs-sm-6">{status}</small>
                </Button>
              </div>
            )}

            <div className="text-opacity-50 text-dark my-auto">
              <small>{date}</small>
            </div>
            {/* <MoreVertical size={20} className="my-auto" /> */}
          </div>
        </div>
      </CardHeader>

      {description && (
        <CardBody className="border-top border-1 pt-2">
          <div>
            <p>{description}</p>
          </div>
        </CardBody>
      )}
      <CardFooter>
        {/* <div className="d-flex gap-1">
          <GrAttachment size="17" />
          <p>2 Attachments</p>
        </div>
        <div className="d-flex gap-1">
          <RiVipDiamondFill size="17" color={"#FFD700"} />
          <p>uikit-design.sketch</p>
        </div>
        <div className="d-flex gap-1">
          <RiVipDiamondFill size="17" color={"#FFD700"} />
          <p>banner.psd</p>
        </div> */}

        <div>
          <div>More</div>
          <div className="d-flex flex-column flex-md-row justify-content-evenly gap-1 mt-2">
            {developerType && developerType?.length !== 0 && (
              <div>
                <div className="d-flex gap-1">
                  {developerType?.map((d) => {
                    return (
                      <div key={d?.id}>
                        <div
                          className="text-black text-opacity-75 d-flex fw-bolder align-items-end"
                          style={{ padding: "3px" }}
                        >
                          <div
                            className={`bg-light-${
                              d?.developer_type === "SENIOR"
                                ? "primary"
                                : d?.developer_type === "JUNIOR"
                                ? "danger"
                                : d?.developer_type === "EXPERT"
                                ? "success"
                                : ""
                            } rounded-circle  fs-4`}
                            style={{
                              padding: "7px",
                              paddingRight: "11px",
                              paddingLeft: "11px",
                            }}
                          >
                            <h4 className="text-black text-opacity-75 m-auto fw-bolder">
                              {d?.developer_type === "SENIOR"
                                ? "S"
                                : d?.developer_type === "JUNIOR"
                                ? "Jr"
                                : d?.developer_type === "EXPERT"
                                ? "Ex"
                                : ""}
                            </h4>
                          </div>
                          <h4
                            className="m-0 fw-bolder"
                            style={{ paddingLeft: "4px" }}
                          >
                            {d?.required_developers}
                          </h4>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div>
                  <div
                    className="text-black text-opacity-75 d-flex fw-bolder align-items-end"
                    style={{ padding: "3px" }}
                  >
                    <div
                      className="bg-light-danger rounded-circle  fs-4"
                      style={{
                        padding: "7px",
                        paddingRight: "9px",
                        paddingLeft: "9px",
                      }}
                    >
                      <h4 className="text-black text-opacity-75 m-auto fw-bolder">
                        Jr
                      </h4>
                    </div>
                    <h4
                      className="m-0 fw-bolder"
                      style={{ paddingLeft: "4px" }}
                    >
                      3
                    </h4>
                  </div>
                </div> */}
                </div>
                <small className="text-dark text-opacity-50">
                  Required Resources
                </small>
              </div>
            )}

            {developerCost && (
              <div>
                <div className="d-flex gap-1">
                  {developerCost?.map((d) => {
                    return (
                      <div key={d?.id}>
                        <div
                          className="text-black text-opacity-75 d-flex fw-bolder align-items-end"
                          style={{ padding: "3px" }}
                        >
                          <div
                            className={`bg-light-${
                              d?.developer_type === "SENIOR"
                                ? "primary"
                                : d?.developer_type === "JUNIOR"
                                ? "danger"
                                : d?.developer_type === "EXPERT"
                                ? "success"
                                : ""
                            } rounded-circle  fs-4`}
                            style={{
                              padding: "7px",
                              paddingRight: "11px",
                              paddingLeft: "11px",
                            }}
                          >
                            <h4 className="text-black text-opacity-75 m-auto fw-bolder">
                              {d?.developer_type === "SENIOR"
                                ? "S"
                                : d?.developer_type === "JUNIOR"
                                ? "Jr"
                                : d?.developer_type === "EXPERT"
                                ? "Ex"
                                : ""}
                            </h4>
                          </div>
                          <h4
                            className="m-0 fw-bolder"
                            style={{ paddingLeft: "4px" }}
                          >
                            {d?.price}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <small className="text-dark text-opacity-50">
                  Developer Cost Prices
                </small>
              </div>
            )}

            <div>
              <h4 className="text-opacity-75 text-black">
                {fromDate ? fromDate : "Not Found"}
              </h4>
              <small className="text-dark text-opacity-50">From Date</small>
            </div>

            <div>
              <h4 className="text-opacity-75 text-black">
                {toDate ? toDate : "Not Found"}
              </h4>
              <small className="text-dark text-opacity-50">To Date</small>
            </div>

            <div>
              <h4 className="text-opacity-75 text-black">
                {reviewDate ? reviewDate : "Not Found"}
              </h4>
              <small className="text-dark text-opacity-50">Review Date</small>
            </div>

            <div>
              <h4 className="text-opacity-75 text-black">
                <AvatarGroup
                  data={
                    imagesData
                      ? imagesData
                      : [
                          {
                            img: "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png",
                          },
                        ]
                  }
                />
              </h4>
              <small
                className="text-dark text-opacity-50 "
                style={{ wordBreak: "break-word" }}
              >
                Assigned Resources
              </small>
            </div>
          </div>
        </div>

        <div className="border-1 border-top mt-1 pt-1">
          <div>Related To</div>
          <div className="d-flex justify-content-between gap-2 mt-2 overflow-auto">
            {projectName && (
              <div className="my-auto cursor-pointer" onClick={onClickProject}>
                {/* {relatedToData?.map((m) => {
                return ( */}
                <div className="d-flex  gap-1">
                  <div
                    className=" bg-light-primary rounded my-auto"
                    style={{ padding: "5px" }}
                  >
                    <FaToolbox size={23} color={"#ff6163"} />
                    {/* {m?.icon} */}
                  </div>
                  <div className="my-auto d-flex flex-column text-nowrap">
                    <small className="fs-5 ">{projectName}</small>
                    <small>Sales Projects</small>
                  </div>
                </div>
                {/* );
              })} */}
              </div>
            )}

            <div className="my-auto">
              {projectOwnerDetails?.map((m) => {
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
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
