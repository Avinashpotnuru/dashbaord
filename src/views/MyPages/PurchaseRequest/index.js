import { useSelector, useDispatch } from "react-redux";
import {
  openPurchaseFilterPopUp,
  closePurchaseFilterPopUp,
} from "../../../redux/slices/popup";
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

import { Filter, Search, ChevronDown } from "react-feather";
import PurchaseRequestTable from "./PurchaseRequestTableComponent";
import PurchaseFilter from "./PurchaseFilter";

function index() {
  const dispatch = useDispatch();

  const filterToggle = useSelector(
    (state) => state.popup.purchaseRequestFilter.status
  );

  return (
    <div className="col-12 overflow-auto ">
      <Row>
        <PurchaseFilter />
      </Row>
      <Row>
        <Col sm="6">
          <div className="mt-2">
            <InputGroup className="input-group-merge mb-2">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>

              <Input />
            </InputGroup>
          </div>
        </Col>
        <Col sm="3">
          <div className="mb-2">
            <Label className="form-label" for="email">
              From Date:
            </Label>
            <Input type="text" id="email" />
          </div>
        </Col>
        <Col sm="3">
          <div className="mb-2">
            <Label className="form-label" for="email">
              To Date:
            </Label>
            <Input type="text" id="email" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <PurchaseRequestTable />
        </Col>
      </Row>
    </div>
  );
}

export default index;
