import { Badge, Card, CardBody, Col, Row } from "reactstrap";
import profileImg from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import { Home } from "react-feather";
import { FaToolbox } from "react-icons/fa";

const Card9 = ({
  type,
  hours,
  amount,
  projectTitle,
  onClickProject,
  userProfile,
  phase,
  status,
  code,
}) => {
  return (
    <Card className="">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center">
          <h3>{code}</h3>
          <div
            className=" border border-light rounded"
            style={{ padding: "3px" }}
          >
            <Badge
              pill
              color={"danger"}
              className="p-1 bg-opacity-50 text-dark"
            >
              {type}
            </Badge>
          </div>
        </div>

        <Row className="d-flex justify-content-between ">
          <Col sm="6" className="my-1">
            <div className="">
              <h4 className="mb-0">{hours}</h4>
              <small className="text-muted">Total Hours</small>
            </div>
          </Col>
          <Col sm="6" className="my-1">
            <div>
              <h4 className="mb-0">{amount}</h4>
              <small className="text-muted">Total Amount</small>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-between ">
          {projectTitle ? (
            <div
              // onClick={onClickProject}
              className="d-flex align-items-end gap-1 cursor-pointer"
            >
              <div
                className=" bg-light-primary rounded "
                style={{ padding: "5px" }}
              >
                <FaToolbox size={23} color={"#ff6163"} />
                {/* {m?.icon} */}
              </div>

              <div className="">
                <div className="fs-6 fw-bold text-capitalize">
                  {projectTitle}
                </div>
                <small className="text-opacity-50 text-dark">
                  Sales Project
                </small>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-end gap-1 ">
              <div
                className=" bg-light-primary rounded "
                style={{ padding: "5px" }}
              >
                <FaToolbox size={23} color={"#ff6163"} />
                {/* {m?.icon} */}
              </div>

              <div className="">
                <div className="fs-6 fw-bold text-capitalize">Not Found</div>
                <small className="text-opacity-50 text-dark">
                  Sales Project
                </small>
              </div>
            </div>
          )}

          {userProfile && (
            <div className="d-flex align-items-center">
              <div
                className="bg-success shadow rounded-circle overflow-hidden"
                style={{
                  width: "50px",
                  height: "50px",
                  border: "solid 5px white",
                }}
              >
                <img src={profileImg} alt="" className="w-100 h-100" />
              </div>

              <div className="m-1">
                <h6 className="m-0 text-primary">Curtis Stone</h6>
                <p className="m-0 text-danger">Sales Manager</p>
              </div>
            </div>
          )}

          <div className="d-flex flex-column align-content-end ">
            <div className="d-flex justify-content-between gap-1">
              {phase && (
                <div className="d-flex align-items-end">
                  <div
                    className="bg-light-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <h4 className="m-0 fw-bolder">P</h4>
                  </div>
                  <p className="m-0 fw-bolder" style={{ paddingLeft: "2px" }}>
                    {phase}
                  </p>
                </div>
              )}

              {status && (
                <div className="d-flex align-items-end">
                  <div
                    className="bg-light-danger rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <h4 className="m-0 fw-bolder">S</h4>
                  </div>
                  <p
                    className="m-0 fw-bolder fs-4"
                    style={{ paddingLeft: "2px" }}
                  >
                    {status[0]}
                  </p>
                </div>
              )}
            </div>
            <p
              className="m-0 text-opacity-50 text-dark text-center"
              style={{ fontSize: "12px" }}
            >
              {phase && "Phase"} {phase && status && "and"} {status && "Status"}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card9;
