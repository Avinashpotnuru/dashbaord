import React from "react";
import { Card, CardText } from "reactstrap";
import Avatar from "@components/avatar";

export default function MonthlyStatsCard({
  icon1,
  icon2,
  icon3,
  icon4,
  color1,
  color2,
  color3,
  color4,
  count1,
  count2,
  count3,
  count4,
  title1,
  title2,
  title3,
  title4,
  updateStatus,
}) {
  return (
    <Card className="rounded p-2 " style={{}}>
      <div className="d-flex justify-content-between">
        <h4>Monthly Stats</h4>
        {/* <small>Updated {updateStatus}</small> */}
      </div>
      <div
        className="d-flex flex-sm-row justify-content-between pt-4 pb-2 "
        style={{ overflowX: "auto" }}
      >
        <div className="d-flex align-items-center col-6 col-sm-3">
          <Avatar
            color={`light-${color1}`}
            icon={icon1}
            className="me-1"
            style={{ padding: "10px" }}
          />
          <div className="my-auto text-center">
            <h4 className="fw-bolder mb-0">{count1}</h4>
            <CardText className="font-small-3 mb-0">{title1}</CardText>
          </div>
        </div>

        <div className="d-flex align-items-center col-6 col-sm-3">
          <Avatar
            color={`light-${color2}`}
            icon={icon2}
            className="me-1"
            style={{ padding: "10px" }}
          />
          <div className="my-auto text-center">
            <h4 className="fw-bolder mb-0">{count2}</h4>
            <CardText className="font-small-3 mb-0">{title2}</CardText>
          </div>
        </div>

        <div className="d-flex  align-items-center col-6 col-sm-3">
          <Avatar
            color={`light-${color3}`}
            icon={icon3}
            className="me-1"
            style={{ padding: "10px" }}
          />
          <div className="my-auto text-center">
            <h4 className="fw-bolder mb-0">{count3}</h4>
            <CardText className="font-small-3 mb-0">{title3}</CardText>
          </div>
        </div>

        <div className="d-flex align-items-center col-6 col-sm-3">
          <Avatar
            color={`light-${color4}`}
            icon={icon4}
            className="me-1"
            style={{ padding: "10px" }}
          />
          <div className="my-auto text-center">
            <h4 className="fw-bolder mb-0">{count4}</h4>
            <CardText className="font-small-3 mb-0 text-nowrap">
              {title4}
            </CardText>
          </div>
        </div>
      </div>
    </Card>
  );
}
