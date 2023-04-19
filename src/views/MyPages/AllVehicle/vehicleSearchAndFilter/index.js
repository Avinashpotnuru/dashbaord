import { useSelector, useDispatch } from "react-redux";

import {
  openAllVehicleFilterPopUp,
  closeAllVehicleFilterPopUp,
} from "../../../../redux/slices/popup";

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

const VehicleSearchAndFilter = () => {
  const dispatch = useDispatch();

  const vehicleFilterToggle = useSelector(
    (state) => state.popup.allVehicle.status
  );

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
                onClick={() => dispatch(openAllVehicleFilterPopUp())}
              >
                <Filter />
                Filter
                <ChevronDown />
              </Button>
              <Modal
                isOpen={vehicleFilterToggle}
                className="modal-dialog-centered"
              >
                <ModalHeader
                  toggle={() => dispatch(closeAllVehicleFilterPopUp())}
                >
                  Technical Assign
                </ModalHeader>
                <ModalBody>
                  <div className="mb-2">
                    <Label className="form-label" for="email">
                      Project name
                    </Label>
                    <Input type="email" id="email" />
                  </div>
                  <div className="mb-2">
                    <Label className="form-label" for="password">
                      vehicle type
                    </Label>
                    <Input type="password" id="password" />
                  </div>
                  <div className="mb-2">
                    <Label className="form-label" for="password">
                      location
                    </Label>
                    <InputGroup className="input-group-merge mb-2">
                      <Input />
                      <InputGroupText>
                        <MapPin size={14} />
                      </InputGroupText>
                    </InputGroup>
                  </div>
                </ModalBody>
                <div className="d-flex justify-content-center align-items-center">
                  <ModalFooter>
                    <Button
                      color="info"
                      style={{ backgroundColor: "#3dc2f3" }}
                      onClick={() => dispatch(closeAllVehicleFilterPopUp())}
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

export default VehicleSearchAndFilter;
