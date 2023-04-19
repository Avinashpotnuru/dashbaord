import { Clipboard, MessageSquare } from "react-feather";
import { FaLink } from "react-icons/fa";
import { Button, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import { BsFillChatLeftFill } from "react-icons/bs";
import { Button as Button2 } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

const Card14 = ({
  userImage,
  date,
  status,
  uniqueCode,
  linksData,
  approvedCount,
  commentsCount,
  onClickChatIcon,
  onClickRequirements,
  onClickMoreButton,
}) => {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card style={{ width: "100px" }}>
      <CardBody className="text-center d-flex flex-column align-items-center">
        <div>
          <img
            src={userImage}
            alt=""
            className="rounded"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />

          <p
            className="text-opacity-50 text-black"
            style={{ fontSize: "10px" }}
          >
            {date}
          </p>

          <hr />
        </div>

        <div
          className="bg-success rounded  d-flex justify-content-center align-items-center"
          style={{ height: "30px", padding: "3px" }}
        >
          <small
            className="m-0 text-white"
            style={{ paddingLeft: "2px", paddingRight: "2px" }}
          >
            {status}
          </small>
        </div>
        <p className="text-opacity-50 text-black" style={{ fontSize: "10px" }}>
          Status
        </p>

        <div>
          <h6>{uniqueCode}</h6>

          {linksData &&
            linksData?.map((i, index) => {
              return (
                <div key={i?.id}>
                  <a href={i?.url} target="_blank" key={i?.id}>
                    <FaLink
                      size={29}
                      id={`tooltip-timeline-details-links-${index}`}
                    />

                    {/* <img
                      id={`tooltip-timeline-details-links-${index}`}
                      src={
                        require("@src/assets/images/icons/google-chrome.png")
                          ?.default
                      }
                      alt=""
                    /> */}
                  </a>
                  <UncontrolledTooltip
                    placement="top"
                    target={`tooltip-timeline-details-links-${index}`}
                    autohide={false}
                  >
                    <div style={{ wordBreak: "keep-all" }}>
                      <p> {i?.url}</p>
                      <Button2
                        className="rounded"
                        color={clipboard.copied ? "teal" : "blue"}
                        onClick={() => clipboard.copy(i?.url)}
                      >
                        {clipboard.copied ? "Copied" : "Copy"}
                      </Button2>
                    </div>
                  </UncontrolledTooltip>
                </div>
              );
            })}

          <p
            className="m-0 text-opacity-75 text-black text-nowrap"
            style={{ fontSize: "12px", paddingTop: "3px" }}
          >
            {approvedCount} Approved
          </p>
          <h6 onClick={onClickRequirements} className="m-0 cursor-pointer">
            REQ
          </h6>
        </div>

        <div className="mt-1 " onClick={onClickChatIcon}>
          <BsFillChatLeftFill />
          <small
            className="d-flex align-items-end"
            style={{ paddingLeft: "15px", marginTop: "-6px" }}
          >
            {commentsCount}
          </small>
        </div>

        <Button onClick={onClickMoreButton} className="mt-1" color={"primary"}>
          More
        </Button>
      </CardBody>
    </Card>
  );
};

export default Card14;
