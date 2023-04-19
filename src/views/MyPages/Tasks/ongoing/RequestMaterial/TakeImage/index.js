import React from "react";
import { Camera, X } from "react-feather";

import { useDispatch } from "react-redux";

import { closeRiseMainPagePopUp } from "../../../../../../redux/slices/popup";
import img from "../../../../../../assets/images/srkimages/Rectangle 962.jpg";
import { Button } from "reactstrap";
const TakeImages = ({ changeHandler }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: "white", position: "relative" }}>
        <X
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          style={{
            padding: "4px",
            backgroundColor: "white",
            position: "absolute",
            left: "100%",
            bottom: "2px",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
      </div>

      <img className="w-100 rounded mt-3" src={img} />

      <div className="d-flex justify-content-around align-items-center mx-2 my-3">
        <Button.Ripple color="secondary" outline>
          Cancel
        </Button.Ripple>
        <Button.Ripple color="secondary" outline>
          <span>
            <Camera size={"15px"} />
          </span>{" "}
          Re Take
        </Button.Ripple>
        <Button.Ripple onClick={() => changeHandler(5)} color="info">
          Capture
        </Button.Ripple>
      </div>
    </div>
  );
};

export default TakeImages;
