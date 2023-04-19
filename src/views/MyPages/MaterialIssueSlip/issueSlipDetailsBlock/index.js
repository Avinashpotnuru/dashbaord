import { Search } from "react-feather";
import { Row, Col, Label, InputGroup, Input, InputGroupText } from "reactstrap";

const IssueSlipDetailsBlock = () => {
  return (
    <Row>
      <Col>
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
      </Col>
    </Row>
  );
};

export default IssueSlipDetailsBlock;
