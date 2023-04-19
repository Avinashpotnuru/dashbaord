import {
  openTechnicianFilterPopUp,
  closeTechnicianFilterPopUp,
} from "../../../../redux/slices/popup";

import { useSelector, useDispatch } from "react-redux";

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

import { Filter, ChevronDown, MapPin } from "react-feather";

import { Search } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
import { useState } from "react";

const SearchAndFilter = () => {
  const dispatch = useDispatch();

  const filterToggle = useSelector(
    (state) => state.popup.technicianFilter.status
  );
  // const [formModal, setFormModal] = useState(false);
  return (
    <Row className="match-height">
      <Col sm="12" className="my-1">
        <Row className="match-height">
          <Col sm="6" xl="8">
            <InputGroup className="input-group-merge mb-2">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              <Input />
            </InputGroup>
          </Col>
          <Col sm="6" xl="4">
            <div>
              <Button
                className="d-flex justify-content-around align-items-center"
                style={{
                  backgroundColor: "#3bc2f3",
                  color: "white",
                  width: "40%",
                }}
                color="primary"
                outline
                onClick={() => dispatch(openTechnicianFilterPopUp())}
              >
                <Filter />
                Filter
                <ChevronDown />
              </Button>
              <Modal
                isOpen={filterToggle}
                // toggle={() => setFormModal(!formModal)}
                className="modal-dialog-centered"
              >
                <ModalHeader
                  toggle={() => dispatch(closeTechnicianFilterPopUp())}
                >
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
                      onClick={() => dispatch(closeTechnicianFilterPopUp())}
                    >
                      Done
                    </Button>{" "}
                  </ModalFooter>
                </div>
              </Modal>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SearchAndFilter;
