import { useState } from "react";
import classnames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import {
  openMaterialReceivedPopUp,
  closeMaterialReceivedPopUp,
} from "../../../../../redux/slices/popup";

import pdf from "../../../../../assets/images/srkimages/pdf.jpg";

import { X } from "react-feather";
const MaterialReceived = () => {
  const dispatch = useDispatch();
  const materialReceivedToggle = useSelector(
    (state) => state.popup.materialReceived.status
  );
  const [canvasPlacement, setCanvasPlacement] = useState("end");
  const [canvasOpen, setCanvasOpen] = useState(false);
  const toggleCanvasEnd = () => {
    setCanvasPlacement("end");
    setCanvasOpen(!canvasOpen);
  };
  return (
    <Offcanvas direction={canvasPlacement} isOpen={materialReceivedToggle}>
      <OffcanvasHeader style={{ backgroundColor: "#e6f7ff" }}>
        Issued Material :
        <span className="">
          <X
            style={{ marginLeft: "120px", backgroundColor: "white" }}
            onClick={() => dispatch(closeMaterialReceivedPopUp())}
          />
        </span>
      </OffcanvasHeader>

      <OffcanvasBody
        className={classnames({
          "my-auto mx-0 flex-grow-0": canvasPlacement === "end",
        })}
      >
        <div className="d-flex justify-content-around align-items-center">
          <p>Material Received :Issued Slip (1) : </p>
          <img src={pdf} alt="img" />
        </div>
        <div
          className="mt-5 my-5"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <table>
            <thead>
              <tr
                className="text-center"
                style={{ backgroundColor: "#b3e5ff" }}
              >
                <th>Materials</th>
                <th>Required material</th>
                <th>Issue Material</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border solid text-center ">
                <td>Brightstone 225/50 tire</td>
                <td>02</td>
                <td>02</td>
              </tr>
              <tr className="border solid text-center">
                <td>Rear Bumper</td>
                <td>01</td>
                <td>01</td>
              </tr>
              <tr className="border solid text-center">
                <td>Right Mirror</td>
                <td>01</td>
                <td>01</td>
              </tr>
              <tr className="border solid text-center">
                <td>Battery</td>
                <td>01</td>
                <td>01</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex  justify-content-around align-items-center">
          <div>
            <p>Requested by : Deekshith</p>
            <p>Issued by : Deekshith</p>
          </div>
          <div>
            <p>12 : 30 pm , 6-9-2022 .</p>
          </div>
        </div>

        <div className=" d-flex justify-content-center align-items-center my-5">
          <Button
            color="primary"
            onClick={() => dispatch(closeMaterialReceivedPopUp())}
            {...(canvasPlacement === "end" ? { block: true } : {})}
          >
            Done
          </Button>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default MaterialReceived;
