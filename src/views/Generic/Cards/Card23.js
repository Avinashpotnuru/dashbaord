import React from "react";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import { FaToolbox } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Card23({
  timelineID,
  toDate,
  fromDate,
  totalResourcesCount,
  seniorCount,
  juniorCount,
  expertCount,
  // checkBox,
  // checkboxValue,
  // checked,
  // setChecked,  checkboxId,
  showCloseIcon,
  onClickCloseIcon,
  onClickCard,
  projectTitle,
  onClickProject,
}) {
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  return (
    <Card className="" style={{ position: "relative" }}>
      {showCloseIcon && (
        <Card
          className="shadow border-1 border-bottom border-0"
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            top: "-6px",
            right: "-1px",
            padding: "2px",
            zIndex: "1",
          }}
        >
          <AiOutlineClose
            onClick={onClickCloseIcon}
            size={21}
            className=" text-black"
          />
        </Card>
      )}
      <CardHeader>
        <h4 className="text-opacity-75 text-black my-auto">{timelineID}</h4>

        {/* {checkBox && (
          <div>
            <Input
              id={checkboxValue}
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              value={checkboxValue}
              // onClick={() => setChecked(checkboxValue)}
            />
          </div>
        )} */}

        {totalResourcesCount && (
          <div
            className=" border-1 border border-light rounded"
            style={{
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <div
              className="fs-3 bg-light-primary rounded-circle"
              style={{
                padding: "4px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <p className="m-auto text-dark text-opacity-75 fw-bolder ">
                {totalResourcesCount}
              </p>
            </div>
          </div>
        )}
      </CardHeader>
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="text-opacity-75 text-black">{toDate}</h4>
            <small className="text-dark text-opacity-50">To Date</small>
          </div>

          <div>
            <h4 className="text-opacity-75 text-black">{fromDate}</h4>
            <small className="text-dark text-opacity-50">From Date</small>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row justify-content-between gap-2 pt-2 ">
          <>
            {projectTitle && (
              <div
                onClick={onClickProject}
                className="d-flex gap-1 cursor-pointer"
              >
                <div
                  className="my-auto bg-light-primary rounded mt-2"
                  style={{ padding: "5%" }}
                >
                  <FaToolbox size={23} color={"#ff6163"} />
                </div>

                <div className="my-auto mt-1">
                  <h5>{projectTitle}</h5>
                  <small className="text-dark text-opacity-50">
                    Sales Projects
                  </small>
                </div>
              </div>
            )}
          </>

          <div className="d-flex flex-column justify-content-end ">
            <div className="d-flex">
              <div>
                <div
                  className="text-black text-opacity-75 d-flex fw-bolder align-items-end"
                  style={{ padding: "3px" }}
                >
                  <div
                    className="bg-light-primary rounded-circle  fs-4"
                    style={{
                      padding: "7px",
                      paddingRight: "11px",
                      paddingLeft: "11px",
                    }}
                  >
                    <h4 className="text-black text-opacity-75 m-auto fw-bolder">
                      Ex
                    </h4>
                  </div>
                  <h4 className="m-0 fw-bolder" style={{ paddingLeft: "4px" }}>
                    {expertCount ? expertCount : 0}
                  </h4>
                </div>
                {/* <small className="text-dark text-opacity-50">Required</small> */}
              </div>

              <div>
                <div
                  className="text-black text-opacity-75 d-flex fw-bolder align-items-end"
                  style={{ padding: "3px" }}
                >
                  <div
                    className="bg-light-primary rounded-circle  fs-4"
                    style={{
                      padding: "7px",
                      paddingRight: "11px",
                      paddingLeft: "11px",
                    }}
                  >
                    <h4 className="text-black text-opacity-75 m-auto fw-bolder">
                      S
                    </h4>
                  </div>
                  <h4 className="m-0 fw-bolder" style={{ paddingLeft: "4px" }}>
                    {seniorCount ? seniorCount : 0}
                  </h4>
                </div>
                {/* <small className="text-dark text-opacity-50">Resources</small> */}
              </div>

              <div className="" style={{ marginLeft: "2px" }}>
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
                  <h4 className="m-0 fw-bolder" style={{ paddingLeft: "4px" }}>
                    {juniorCount ? juniorCount : 0}
                  </h4>
                </div>
                {/* <small className="text-dark text-opacity-50">Resources</small> */}
              </div>
            </div>
            <small className="text-dark text-opacity-50">
              Required Resources
            </small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
