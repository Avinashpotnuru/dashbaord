import { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import CommentsCard from "../../Generic/Cards/CommentsCard";
import { closeCommentsPopup } from "../../../redux/slices/generic";

export default function AddCommentPopup({ postHook, customHook }) {
  const dispatch = useDispatch();

  const popupStatus = useSelector(
    (state) => state.generic.openCommentsPopup.status
  );
  const helperData = useSelector(
    (state) => state.generic.openCommentsPopup.helperData
  );

  return (
    <Modal
      isOpen={popupStatus}
      toggle={() => dispatch(closeCommentsPopup())}
      className={"modal-dialog-centered "}
    >
      <ModalHeader toggle={() => dispatch(closeCommentsPopup())}>
        Add Comment
      </ModalHeader>
      <ModalBody>
        {helperData && helperData?.customHook && (
          <CommentsCard
            postHook={helperData?.postHook}
            customHook={helperData?.customHook}
            slug={helperData?.slug}
          />
        )}
      </ModalBody>
    </Modal>
  );
}
