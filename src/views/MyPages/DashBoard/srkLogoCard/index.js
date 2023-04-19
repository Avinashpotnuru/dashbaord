import React from "react";

import { Card } from "reactstrap";

import srkLogo from "../../../../../src/assets/images/srkimages/path1.png";

const SknLogoCard = () => {
  return (
    <Card className="d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-column justify-content-around  align-items-center"
        style={{ width: "90%" }}
      >
        <div
          style={{ width: "90%" }}
          className="d-flex  justify-content-between align-items-center p-3"
        >
          <h1
            style={{
              transform: `skewY(145deg)`,
              fontWeight: "600",
              fontSize: "24px",
              color: "#5E58733D",
            }}
          >
            Clock
          </h1>
          <h1
            style={{
              transform: `skewY(145deg)`,
              fontWeight: "600",
              fontSize: "24px",
              color: "#5E58733D",
            }}
          >
            Clock
          </h1>
        </div>
        <img src={srkLogo} alt="img" />
        <div
          style={{ width: "90%" }}
          className="d-flex  justify-content-between align-items-center p-3"
        >
          <h1
            style={{
              transform: `skewY(145deg)`,
              fontWeight: "600",
              fontSize: "24px",
              color: "#5E58733D",
            }}
          >
            Clock
          </h1>
          <h1
            style={{
              transform: `skewY(140deg)`,
              fontWeight: "600",
              fontSize: "24px",
              color: "#5E58733D",
            }}
          >
            Clock
          </h1>
        </div>
      </div>
    </Card>
  );
};

export default SknLogoCard;
