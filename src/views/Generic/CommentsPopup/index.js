import { useSelector } from "react-redux";
import { Modal, ModalBody } from "reactstrap";
import CommentsCard from "../Cards/CommentsCard";

const CommentsPopup = () => {
  const popupStatus = useSelector((state) => state.generic.popupStatus);

  const helperData = useSelector((state) => state.generic.helperData);

  return (
    <Modal isOpen={popupStatus}>
      <ModalBody>
        <CommentsCard
          postHook={helperData?.postHook}
          customHook={helperData?.customHook}
          slug={helperData?.slug}
        />
      </ModalBody>
    </Modal>
  );
};

export default CommentsPopup;
