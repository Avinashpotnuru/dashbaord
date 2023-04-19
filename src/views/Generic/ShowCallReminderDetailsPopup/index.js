// ** Custom Components
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@components/avatar";

import { closeShowCallReminderDetailsPopup } from "../../../redux/slices/generic";
import ISTFormat from "../ISTFormat";

export default function ShowCallReminderDetailsPopup() {
  const dispatch = useDispatch();

  const popupStatus = useSelector(
    (state) => state.generic.showCallReminderDetailsPopup.status
  );

  const helperData = useSelector(
    (state) => state.generic.showCallReminderDetailsPopup.helperData
  );

  const handleClose = () => {
    dispatch(closeShowCallReminderDetailsPopup());
  };

  return (
    <Modal
      isOpen={popupStatus}
      toggle={handleClose}
      className={"modal-dialog-centered "}
    >
      <ModalHeader toggle={handleClose}>Call Reminder Details</ModalHeader>
      <ModalBody className="">
        <div className="px-sm-1 py-2 rounded">
          <div className="d-flex">
            <h5 className="fw-bold">Date Created:</h5>{" "}
            <dt className="mx-1 text-primary">
              {ISTFormat(new Date(helperData?.created_at))}
            </dt>
          </div>
          <div className="d-flex pt-1">
            <h5 className="fw-bold">Reminding Date:</h5>{" "}
            <dt className="mx-1 text-primary">
              {ISTFormat(new Date(helperData?.date_of_reminding))}
            </dt>
          </div>
          <div className="pt-1">
            <h4>Assigned Users</h4>
            <div className="shadow rounded p-1 mx-1 ">
              {helperData?.reminding_users?.map((h) => {
                return (
                  <div>
                    <div className="d-flex demo-inline-spacing">
                      {h?.user_profile?.image ? (
                        <Avatar
                          img={`${process.env.REACT_APP_BACKEND_IMG_BASEURL}${h?.user_profile?.image}`}
                          size="lg"
                        />
                      ) : (
                        <Avatar
                          img="https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"
                          size="lg"
                        />
                      )}
                      <div>
                        <div>{h?.user_profile?.name}</div>
                        <div>
                          {h?.user_profile?.occupation ? (
                            h?.user_profile?.occupation
                          ) : (
                            <small>Occupation not found</small>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pt-1 ">
            {" "}
            <h4 className="fw-bold">Message:</h4>{" "}
            <div className="mx-1 border-1 border-info shadow rounded p-1">
              {helperData?.message}
            </div>{" "}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
