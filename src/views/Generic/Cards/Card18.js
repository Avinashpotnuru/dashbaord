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
import { useHistory } from "react-router-dom";

const data = [
  {
    title: "Elicia Rieske",
    img: avatarImg,
  },
  {
    title: "Elicia Rieske",
    img: avatarImg,
  },
];

export default function Card18({
  image,
  name,
  email,
  status,
  title,
  description,
  date,
  relatedData,
  projectData,
  userData,
  dateList,
  showMore,
  totalHours,
  finalCost,
}) {
  const history = useHistory();

  return (
    <Card className="w-100">
      <CardHeader>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex gap-1">
            <Avatar img={image} size="lg" className="d-none d-sm-block" />
            <Avatar img={image} size="" className="d-block d-sm-none m-auto" />
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
              <div>
                <small className="my-auto my-sm-0">Status</small>
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
                  className="mx-sm-1 "
                  style={{ marginLeft: "2px" }}
                >
                  <small className="fs-sm-6">{status}</small>
                </Button>
              </div>
            )}
            {dateList && (
              <div className="d-flex ">
                <p className="my-auto mx-1">Date</p>
                {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]?.map(
                  (p) => {
                    return (
                      <div
                        key={p?.id}
                        className={`rounded-circle d-flex text-white `}
                        style={{
                          backgroundColor: randColor(),
                          opacity: ".4",
                          padding: "15px",
                          height: `${p.id > 3 ? "32px" : "40px"}`,
                          width: `${p.id > 3 ? "30px" : "38px"}`,
                          border: "2px solid white",
                          boxShadow: "0px 0px 3px black",
                          margin: "3px",
                        }}
                      >
                        3
                      </div>
                    );
                  }
                )}
              </div>
            )}

            <div className="text-opacity-50 text-dark my-auto">
              <small>{date}</small>
            </div>
            {/* <MoreVertical size={20} className="my-auto" /> */}
          </div>
        </div>
      </CardHeader>

      <CardBody className="border-top border-1 pt-2">
        {title && (
          <h3 className=" text-black-50 fw-normal">
            {title ? title : "Not Found"}
          </h3>
        )}
        <div className="">
          <p>{description}</p>
        </div>
      </CardBody>
      <CardFooter className="">
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

        {showMore && (
          <div className="border-bottom border-1">
            <h6>More</h6>
            <div className="d-flex gap-1 py-1">
              {finalCost && (
                <div className="text-center">
                  <h4>{finalCost}</h4>
                  <small className="opacity-50">Final Cost</small>
                </div>
              )}

              {totalHours && (
                <div className="text-center">
                  <h4>{totalHours}</h4>
                  <small className="opacity-50">Total Hours</small>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="">
          <div className="pt-1">Related To</div>
          <div className="d-flex justify-content-between gap-2 mt-2 overflow-auto">
            {projectData &&
              projectData?.map((m) => {
                return (
                  <div
                    className="d-flex gap-1 cursor-pointer"
                    key={m?.id}
                    onClick={() => history.push(`/sales-project/${m?.slug}`)}
                  >
                    <div
                      className=" bg-light-primary rounded my-auto"
                      style={{ padding: "5px" }}
                    >
                      <FaToolbox size={23} color={"#ff6163"} />
                      {/* {m?.icon} */}
                    </div>
                    <div className="my-auto d-flex flex-column text-nowrap">
                      <small className="fs-5 ">{m?.title}</small>
                      <small>Sales Project</small>
                    </div>
                  </div>
                );
              })}

            {userData &&
              userData?.map((m) => {
                return (
                  <div
                    className=" "
                    style={{ border: "0.5px solid rgba(0, 0, 0,0.02)" }}
                    key={m?.id}
                  >
                    <Card31
                      name={m?.owner?.user_profile?.name}
                      role={m?.owner?.user_profile?.occupation}
                      project={m?.title}
                      image={`${process.env.REACT_APP_BACKEND_IMG_BASEURL}${m?.owner?.user_profile?.image}`}
                    />
                  </div>
                );
              })}

            {/* {userData &&
              userData?.map((m) => {
                return (
                  <div className="shadow " key={m?.id}>
                    <Card31
                      name={m?.name}
                      role={m?.role}
                      project={m?.projects}
                      image={m?.image}
                    />
                  </div>
                );
              })} */}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};
