import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  Row,
  Col,
} from "reactstrap";

import { closeServiceViewDetailsPopup } from "../../../../../../../redux/slices/popup";

import pic from "../../../../../../../assets/images/avatars/10-small.png";

import Tyre1 from "../../../../../../../assets/images/srkimages/Rectangle 792.png";

import Tyre2 from "../../../../../../../assets/images/srkimages/trye2.jpg";

import Tyre3 from "../../../../../../../assets/images/srkimages/trye3.png";

import Tyre4 from "../../../../../../../assets/images/srkimages/trye4.jpg";

import Tyre5 from "../../../../../../../assets/images/srkimages/tyre5.jpg";

import videoImage1 from "../../../../../../../assets/images/srkimages/videoImage (1).jpg";

import videoImage2 from "../../../../../../../assets/images/srkimages/videoImage (2).jpg";

import { Printer } from "react-feather";

import MaterialTable from "../MaterialTable";

const Details = () => {
  const dispatch = useDispatch();

  const detailsToggle = useSelector(
    (state) => state.popup.serviceViewDetails.status
  );

  return (
    <div className="vertically-centered-modal accordion-body overflow-auto">
      <Modal
        isOpen={detailsToggle}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader
          className=" "
          toggle={() => dispatch(closeServiceViewDetailsPopup())}
        ></ModalHeader>
        <ModalBody>
          <Row className=" ">
            <Col className="col-12">
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

                <div className="d-flex ">
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
                  : Tyre Puncher It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking{" "}
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
              <div className=" d-flex justify-content-between w-75 my-2 ">
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
                  : Tyre Puncher It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking{" "}
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
              <div className=" d-flex justify-content-between w-75 my-2 ">
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
                  : Tyre Puncher It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking{" "}
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
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter className="d-flex justify-content-center align-items-center">
          <Button.Ripple color="success" outline>
            <span>
              <Printer />
            </span>{" "}
            Print
          </Button.Ripple>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Details;
