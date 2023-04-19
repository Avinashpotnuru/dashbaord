import OutWardBlock from "./outWardBlock";
import { GrNotes } from "react-icons/gr";
import { FiTrendingUp } from "react-icons/fi";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardImgOverlay,
  CardText,
  Row,
  Col,
} from "reactstrap";
import IssueSlipDetailsBlock from "./issueSlipDetailsBlock";
import IssueSlipComponent from "./IssueSlipsComponent";

function index() {
  return (
    <div className="col-12 overflow-auto">
      <Row className="match-height">
        <Col sm="12">
          <Card>
            <OutWardBlock />
          </Card>
        </Col>
        <IssueSlipDetailsBlock />
        <IssueSlipComponent />
      </Row>
    </div>
  );
}

export default index;
