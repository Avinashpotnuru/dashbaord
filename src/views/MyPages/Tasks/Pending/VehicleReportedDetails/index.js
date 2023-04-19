import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import classnames from "classnames";

import {
  openPendingViewDetails,
  closePendingViewDetails,
} from "../../../../../redux/slices/popup";

import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import profile1 from "../../../../../assets/images/avatars/10-small.png";

import locationLogo from "../../../../../assets/images/srkimages/locationlogo.jpg";

import tyres1 from "../../../../../assets/images/srkimages/tyre1.png";
import tyres4 from "../../../../../assets/images/srkimages/trye2.jpg";
import tyres2 from "../../../../../assets/images/srkimages/trye3.png";
import tyres3 from "../../../../../assets/images/srkimages/trye4.jpg";

import videoImage1 from "../../../../../assets/images/srkimages/videoImage (1).jpg";

import videoImage2 from "../../../../../assets/images/srkimages/videoImage (2).jpg";
import { X } from "react-feather";

const VehicleReportedDetails = () => {
  const dispatch = useDispatch();
  const [canvasPlacement, setCanvasPlacement] = useState("end");
  const [canvasOpen, setCanvasOpen] = useState(false);

  const OffcanvasToggle = useSelector(
    (state) => state.popup.pendingViewDetails.status
  );
  return (
    <>
      <Offcanvas direction={canvasPlacement} isOpen={OffcanvasToggle}>
        <OffcanvasHeader
          style={{ backgroundColor: "#e6f7ff" }}
          // toggle={toggleCanvasEnd}
        >
          Reported Details :12 : 45 Pm ,<br /> 22 / 09 / 2022
          <span className="">
            <X
              style={{ marginLeft: "90px", backgroundColor: "white" }}
              onClick={() => dispatch(closePendingViewDetails())}
            />
          </span>
        </OffcanvasHeader>

        <OffcanvasBody
          className={classnames({
            "my-auto mx-0 flex-grow-0": canvasPlacement === "end",
          })}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "repeat(7, 1fr)",
            }}
          >
            <div>Reported By</div>
            <div>
              : Deekshith{" "}
              <span>
                <img
                  className="rounded-circle"
                  style={{ height: "30px", width: "30px" }}
                  src={profile1}
                />
              </span>
            </div>
            <div>Vehicle Details </div>
            <div>: Bharath Benz 3128 C AP 02 TE 4731 Tippter </div>
            <div>Odometer reading</div>
            <div>: 22345 Km </div>
            <div>Vehicle Location </div>
            <div className="">
              : Vehicle Location <br />{" "}
              <span>
                <img style={{ margin: "10px" }} src={locationLogo} />
              </span>{" "}
            </div>
            <div>Vehicle Location </div>
            <div>
              :It is a long established fact that a reader will be distracted by
              the readable content of a{" "}
            </div>
            <div>Images </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: "1px",
              }}
              className="d-flex flex-wrap "
            >
              <img style={{ width: "65px", height: "50px" }} src={tyres1} />
              <img style={{ width: "65px", height: "50px" }} src={tyres2} />
              <img style={{ width: "65px", height: "50px" }} src={tyres3} />
              <img style={{ width: "65px", height: "50px" }} src={tyres4} />
            </div>
            <div>Videos</div>
            <div>
              <img
                style={{ width: "90%", height: "50px", marginBottom: "10px" }}
                src={videoImage1}
              />
              <img style={{ width: "90%", height: "50px" }} src={videoImage2} />
            </div>
          </div>
          {/* <Button
              color="primary"
              onClick={toggleCanvasStart}
              className={classnames({
                "mb-1":
                  canvasPlacement === "start" || canvasPlacement === "end",
                "me-1":
                  canvasPlacement === "top" || canvasPlacement === "bottom",
              })}
              {...(canvasPlacement === "start" || canvasPlacement === "end"
                ? { block: true }
                : {})}
            >
              Continue
            </Button> */}
          <div className=" d-flex justify-content-center align-items-center">
            <Button
              color="primary"
              onClick={() => dispatch(closePendingViewDetails())}
              {...(canvasPlacement === "end" ? { block: true } : {})}
            >
              Done
            </Button>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default VehicleReportedDetails;
