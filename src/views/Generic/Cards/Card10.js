import { Home, MessageSquare } from "react-feather";
import { FaToolbox } from "react-icons/fa";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import { FiMoreVertical } from "react-icons/fi";
import {
  Breadcrumb,
  DropdownMenu,
  DropdownItem,
  BreadcrumbItem,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { MdDelete } from "react-icons/md";
import {
  RiDeleteBin3Line,
  RiDeleteBin4Fill,
  RiDeleteBin6Fill,
} from "react-icons/ri";
import { useHistory } from "react-router-dom";

const Card10 = (props) => {
  const {
    userName,
    occupation,
    date,
    userProfile,
    title,
    description,
    chatCount,
    status,
    statusColor,
    buttonClick,
    projectTitle,
    onClickProject,
    onClickChatIcon,
    showDeleteButton,
    onClickDeleteIcon,
    showFooter,
  } = props;

  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex gap-1">
            <div
              className="rounded overflow-hidden"
              style={{ width: "70px", height: "70px" }}
            >
              <img
                src={userProfile}
                alt=""
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <div className="w-100">
              <h4>{userName}</h4>

              <div className="d-flex justify-content-between w-100">
                <h5>{occupation}</h5>
                <p className="d-flex justify-content-end w-100">{date}</p>
              </div>
            </div>
          </div>

          {showDeleteButton && status === "PENDING" && (
            <button
              className="rounded-circle bg-light-warning border-0"
              style={{ padding: "4px" }}
            >
              <RiDeleteBin6Fill
                onClick={onClickDeleteIcon}
                style={{ opacity: ".6" }}
                color="red"
                size={18}
                className="m-auto "
              />
            </button>
          )}
        </div>

        <div className="mt-1">
          <Row>
            <Col sm={6}>
              <div
                className={`rounded  d-flex  justify-content-center align-items-center ${statusColor}`}
                style={{ height: "40px" }}
              >
                <small
                  className="text-white my-auto w-100 d-flex justify-content-center "
                  style={{ paddingLeft: "2px", paddingRight: "2px" }}
                >
                  {status}
                </small>
              </div>
              <div>
                <small className="opacity-50 ">Status</small>
              </div>
            </Col>

            {projectTitle ? (
              <Col sm={6}>
                <div
                  onClick={onClickProject}
                  className="rounded shadow d-flex  justify-content-center align-items-center cursor-pointer"
                  style={{ height: "40px" }}
                >
                  <div
                    className="d-flex  justify-content-center align-items-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      marginRight: "2px",
                    }}
                  >
                    <FaToolbox size={23} color={"#ff6163"} />
                  </div>

                  <small className="my-auto ">{projectTitle}</small>
                </div>

                <div>
                  <small className="opacity-50">Sales Project</small>
                </div>
              </Col>
            ) : (
              <Col sm={6}>
                <div
                  className="rounded shadow d-flex  justify-content-center align-items-center"
                  style={{ height: "40px" }}
                >
                  <div
                    className="d-flex  justify-content-center align-items-center"
                    style={{
                      height: "40px",
                      width: "40px",
                      marginRight: "2px",
                    }}
                  >
                    <FaToolbox size={23} color={"#ff6163"} />
                  </div>

                  <small className="my-auto">Not Found</small>
                </div>

                <div>
                  <small className="text-opacity-50">Sales Project</small>
                </div>
              </Col>
            )}
          </Row>

          <div className="text-center py-2">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>

          {!showFooter && (
            <div className="d-flex justify-content-between align-items-center border-top border-1 pt-2">
              <Button className="" color={"primary"} onClick={buttonClick}>
                More
              </Button>

              <div onClick={onClickChatIcon} className="d-flex align-items-end">
                <MessageSquare />
                <p className="m-0">{chatCount}</p>
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Card10;
