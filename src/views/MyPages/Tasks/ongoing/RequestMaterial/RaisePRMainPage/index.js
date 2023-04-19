import React, { useState } from "react";
import NonInventoryItems from "../NonInventoryItems";
import RisePR from "../RaisePR";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import { useSelector } from "react-redux";
import AddItem from "../AddItem";
import TakeImages from "../TakeImage";
import NonInventoryImage from "../NonInventoryImage";
import Preview from "../Preview";
import ViewPage from "../ViewPage";

const RaisePRMainPage = () => {
  const [currentPage, setPage] = useState(1);
  const [centeredModal, setCenteredModal] = useState(false);

  const mainPageToggle = useSelector(
    (state) => state.popup.riseMainPagePopUp.status
  );

  console.log(currentPage);
  const changeHandler = (page) => {
    setPage(page);
  };
  return (
    <Modal
      isOpen={mainPageToggle}
      toggle={() => setCenteredModal(!centeredModal)}
      className="modal-dialog-centered Large Modal col-12"
    >
      <ModalBody>
        {currentPage === 1 && <RisePR changeHandler={changeHandler} />}
        {currentPage === 2 && (
          <NonInventoryItems changeHandler={changeHandler} />
        )}
        {currentPage === 3 && <AddItem changeHandler={changeHandler} />}
        {currentPage === 4 && <TakeImages changeHandler={changeHandler} />}
        {currentPage === 5 && (
          <NonInventoryImage changeHandler={changeHandler} />
        )}
        {currentPage === 6 && <Preview changeHandler={changeHandler} />}
        {currentPage === 7 && <ViewPage changeHandler={changeHandler} />}
      </ModalBody>
    </Modal>
  );
};

export default RaisePRMainPage;
