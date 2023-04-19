import React from "react";

import { ArrowLeft } from "react-feather";

import { Button, Card, Col, Row } from "reactstrap";

import pic from "../../../../../assets/images/avatars/10-small.png";

import Tyre1 from "../../../../../assets/images/srkimages/Rectangle 792.png";

import Tyre2 from "../../../../../assets/images/srkimages/trye2.jpg";

import Tyre3 from "../../../../../assets/images/srkimages/trye3.png";

import Tyre4 from "../../../../../assets/images/srkimages/trye4.jpg";

import Tyre5 from "../../../../../assets/images/srkimages/tyre5.jpg";

import videoImage1 from "../../../../../assets/images/srkimages/videoImage (1).jpg";

import videoImage2 from "../../../../../assets/images/srkimages/videoImage (2).jpg";

import MaterialTable from "../../../AllVehicle/AllVehicleComponent/ViewDetailsComponent/ServiceHistory/MaterialTable";

const buttonsData = [
  {
    id: 1,
    name: "VehicleDetails",
  },
  {
    id: 2,
    name: "ReportDetails",
  },
  {
    id: 3,
    name: "InspectionDetails",
  },
  {
    id: 4,
    name: "RepairApproval",
  },
];

const handlerIdChange = (item) => {
  console.log(item);
};

const ViewDetails = ({ handlerChange }) => {
  return (
    <Row className="match-height">
      <Col sm="12">
        <Card className="p-2">
          <ArrowLeft onClick={() => handlerChange(1)} />

          <div className="d-flex justify-content-around">
            {buttonsData.map((item) => (
              <a href={`#${item.name}`}>
                <Button.Ripple
                  color="dark"
                  outline
                  onClick={() => handlerIdChange(item.id)}
                >
                  {item?.name}
                </Button.Ripple>
              </a>
            ))}
          </div>

          <h6 className="my-2">Vehicle Details :</h6>

          <div
            className="col-5"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              gap: "10px",
            }}
          >
            <div>Reported By</div>

            <div id="VehicleDetails" className="d-flex ">
              <div className="">: Dyvesh</div>

              <img
                style={{ height: "35px", marginLeft: "30px" }}
                className="rounded-circle"
                src={pic}
                alt="img"
              />
            </div>
            <div>Vehicle Details</div>

            <div>: Bharath Benz 3128 C AP 02 DE 2345</div>

            <div>Odometer reading</div>

            <div>: 22345 Km</div>

            <div>Chantage no </div>

            <div>: 000-250</div>
          </div>
          <div className=" d-flex justify-content-between w-75 ">
            <h6>Reported Details</h6>

            <div className="d-flex">
              <h6>Date & Time : </h6>

              <h6>12 : 45 Pm 22 / 09 / 2022 </h6>
            </div>
          </div>

          <div
            className="my-1 w-75 "
            id="ReportDetails"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            <div>Reported By </div>

            <div>: Prem</div>

            <div>category </div>

            <div>: Puncher</div>

            <div>Description </div>

            <div>
              : Tyre Puncher It is a long established fact that a reader will be
              distracted by the readable content of a page when looking{" "}
            </div>
          </div>

          <div
            className="col-12"
            style={{
              display: " grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <div className="">images</div>

            <div className=" w-75 d-flex justify-content-around align-items-center ">
              <img className="mx-1" src={Tyre1} />

              <img className="mx-1" src={Tyre2} />

              <img className="mx-1" src={Tyre3} />

              <img className="mx-1" src={Tyre4} />
            </div>
            <div className="">Videos</div>

            <div className=" justify-content-around align-items-center d-flex w-75   ">
              <img className="mx-1" src={videoImage1} />

              <img className="" src={videoImage2} />
            </div>
          </div>
          <div
            id="InspectionDetails"
            className=" d-flex justify-content-between w-75 my-2 "
          >
            <h6>Inspection Details</h6>

            <div className="d-flex">
              <h6>Date & Time : </h6>

              <h6>12 : 45 Pm 22 / 09 / 2022 </h6>
            </div>
          </div>

          <div
            className="my-1 w-75 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            <div>Reported By </div>

            <div>: Prem</div>

            <div>category </div>

            <div>: Puncher</div>

            <div>Description </div>

            <div>
              : Tyre Puncher It is a long established fact that a reader will be
              distracted by the readable content of a page when looking{" "}
            </div>
          </div>
          <div
            className="col-12"
            style={{
              display: " grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <div className="">images</div>
            <div className=" w-75 d-flex justify-content-around align-items-center ">
              <img className="mx-1" src={Tyre1} />

              <img className="mx-1" src={Tyre2} />

              <img className="mx-1" src={Tyre3} />

              <img className="mx-1" src={Tyre4} />
            </div>

            <div className="">Videos</div>

            <div className=" justify-content-around align-items-center d-flex w-75   ">
              <img className="mx-1" src={videoImage1} />

              <img className="" src={videoImage2} />
            </div>
          </div>
          <div
            id="RepairApproval"
            className=" d-flex justify-content-between w-75 my-2 "
          >
            <h6>Repair Approval</h6>
            <div className="d-flex">
              <h6>Date & Time : </h6>
              <h6>12 : 45 Pm 22 / 09 / 2022 </h6>
            </div>
          </div>

          <div
            className="my-1 w-75 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            <div>Reported By </div>
            <div>: Prem</div>
            <div>category </div>
            <div>: Puncher</div>
            <div>Description </div>
            <div>
              : Tyre Puncher It is a long established fact that a reader will be
              distracted by the readable content of a page when looking{" "}
            </div>
          </div>
          <div
            className="col-12"
            style={{
              display: " grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <div className="">images</div>
            <div className=" w-75 d-flex justify-content-around align-items-center ">
              <img className="mx-1" src={Tyre1} />
              <img className="mx-1" src={Tyre2} />
              <img className="mx-1" src={Tyre3} />
              <img className="mx-1" src={Tyre4} />
            </div>
            <div className="">Videos</div>
            <div className=" justify-content-around align-items-center d-flex w-75   ">
              <img className="mx-1" src={videoImage1} />
              <img className="" src={videoImage2} />
            </div>
          </div>
          <div className="col-12">
            <MaterialTable />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Button.Ripple
              color="success"
              outline
              onClick={() => handlerChange(1)}
            >
              Done
            </Button.Ripple>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ViewDetails;
