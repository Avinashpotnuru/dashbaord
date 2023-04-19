import { Button, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import { Button as Button2 } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

const Card11 = ({ data, onClickButton }) => {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Card style={{ width: "100px" }}>
      <CardBody className="text-center d-flex flex-column align-items-center gap-2">
        <h5>Links</h5>
        <Button onClick={onClickButton} color={"success"}>
          Add
        </Button>
        {data &&
          data?.results?.map((i, index) => {
            return (
              <div key={i?.id}>
                <a href={i?.url} target="_blank" key={i?.id}>
                  <img
                    id={`tooltip-links-${i?.id}`}
                    src={
                      require("@src/assets/images/icons/google-chrome.png")
                        ?.default
                    }
                    alt=""
                  />
                </a>
                <UncontrolledTooltip
                  placement="top"
                  target={`tooltip-links-${i?.id}`}
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
      </CardBody>
    </Card>
  );
};

export default Card11;
