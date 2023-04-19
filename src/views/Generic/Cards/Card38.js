import { Home, MessageSquare } from "react-feather";
import { Button, Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import { FaLink, FaToolbox } from "react-icons/fa";

const Card38 = (props) => {
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
    approvedCount,
    pendingCount,
    onClickChatIcon,
  } = props;

  return (
    <Card>
      <CardBody>
        <div className="d-flex gap-1">
          <div
            className="rounded overflow-hidden"
            style={{ width: "55px", height: "45px" }}
          >
            <img
              src={userProfile}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>

          <div className="w-100">
            <h6>{userName}</h6>

            <div className="d-flex justify-content-between">
              <small className="">{occupation}</small>
              <p>{date}</p>
            </div>
          </div>
        </div>

        <div className="mt-1">
          <Row>
            <Col sm={6}>
              <div
                className={`rounded  d-flex  justify-content-center align-items-center ${statusColor}`}
                style={{ height: "40px" }}
              >
                <h5 className="text-white my-auto">{status}</h5>
              </div>
              <div>
                <small className="text-opacity-50">Status</small>
              </div>
            </Col>

            <Col sm={6}>
              <div
                className="rounded shadow d-flex  justify-content-center align-items-center"
                style={{ height: "40px" }}
              >
                <div
                  className="d-flex  justify-content-center align-items-center"
                  style={{ height: "40px", width: "40px" }}
                >
                  <div
                    className=" bg-light-primary rounded my-auto"
                    style={{ padding: "5px" }}
                  >
                    <FaToolbox size={23} color={"#ff6163"} />
                    {/* {m?.icon} */}
                  </div>
                </div>
                <small className="my-auto" style={{ marginLeft: "2px" }}>
                  {title ? title : "Not Found"}
                </small>
              </div>

              <div>
                <small className="text-opacity-50">Sales Project</small>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="py-1">
            <h4>{title}</h4>
            {/* <p>{description}</p> */}
          </div>

          <div className="d-flex justify-content-between">
            <div className="my-auto">
              <small>{approvedCount} Approved</small>
              <div className=" text-black">Requirements</div>
              <small className="d-flex justify-content-end text-opacity-50">
                {pendingCount} Pending
              </small>
            </div>

            <div
              className="rounded-circle  p-1"
              style={{ border: "solid 15px ", borderColor: "green" }}
            >
              <FaLink size={40} className="" />
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-between align-items-center">
          <Button className="" color={"primary"} onClick={buttonClick}>
            More
          </Button>

          {/* {chatCount && ( */}
          <div onClick={onClickChatIcon} className="d-flex align-items-end">
            <MessageSquare />
            <p className="m-0">{chatCount}</p>
          </div>
          {/* )} */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Card38;
