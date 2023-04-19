import { useSelector, useDispatch } from "react-redux";

import { Filter, Search, ChevronDown } from "react-feather";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";

import {
  openPurchaseFilterPopUp,
  closePurchaseFilterPopUp,
} from "../../../../redux/slices/popup";

const PurchaseFilter = () => {
  const dispatch = useDispatch();

  const filterToggle = useSelector(
    (state) => state.popup.purchaseRequestFilter.status
  );

  return (
    <>
      <Col sm="6">
        <Button
          className="d-flex justify-content-around align-items-center"
          style={{
            backgroundColor: "#3bc2f3",
            color: "white",
            width: "40%",
          }}
          color="primary"
          outline
          onClick={() => dispatch(openPurchaseFilterPopUp())}
        >
          <Filter />
          Filter
          <ChevronDown />
        </Button>
        <Modal isOpen={filterToggle} className="modal-dialog-centered">
          <ModalHeader toggle={() => dispatch(closePurchaseFilterPopUp())}>
            Filter
          </ModalHeader>
          <ModalBody>
            <div className="mb-2">
              <Label className="form-label" for="email">
                status
              </Label>
              <Input type="email" id="email" />
            </div>
          </ModalBody>
          <div className="d-flex justify-content-center align-items-center">
            <ModalFooter>
              <Button
                color="info"
                style={{ backgroundColor: "#3dc2f3" }}
                onClick={() => dispatch(closePurchaseFilterPopUp())}
              >
                Done
              </Button>{" "}
            </ModalFooter>
          </div>
        </Modal>
      </Col>
    </>
  );
};

export default PurchaseFilter;
