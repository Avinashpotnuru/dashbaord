// import {
//   openTechnicianFilterPopUp,
//   closeTechnicianFilterPopUp,
// } from "../../../../redux/slices/popup";

import {
  openOngoingFilterPopUp,
  closeOngoingFilterPopUp,
} from "../../../../../../redux/slices/popup";

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

const OnGoingSearchAndFilter = () => {
  const dispatch = useDispatch();

  const filterToggle = useSelector((state) => state.popup.onGoing.status);
  // const [formModal, setFormModal] = useState(false);
  return (
    <Row className="match-height   col-12">
      <Col className="my-1  col-12">
        <Row className="match-height ">
          <Col className="col-8">
            <InputGroup className="input-group-merge ">
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              <Input />
            </InputGroup>
          </Col>
          <Col className="col-4 ">
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
                onClick={() => dispatch(openOngoingFilterPopUp())}
              >
                <Filter />
                Filter
                <ChevronDown />
              </Button>
              {/* <Modal
                isOpen={filterToggle}
                // toggle={() => setFormModal(!formModal)}
                className="modal-dialog-centered"
              >
                <ModalHeader toggle={() => dispatch(closeOngoingFilterPopUp())}>
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
                      onClick={() => dispatch(closeOngoingFilterPopUp())}
                    >
                      Done
                    </Button>{" "}
                  </ModalFooter>
                </div>
              </Modal> */}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default OnGoingSearchAndFilter;
