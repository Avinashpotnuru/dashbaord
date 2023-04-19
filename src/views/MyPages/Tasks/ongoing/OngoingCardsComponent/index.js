import { GrNotes } from "react-icons/gr";
import { Col, Row, Card } from "reactstrap";

import OnGoingTaskCard from "./OngoingTaskCard";

const data = [
  {
    id: 1,
    title: "256",
    status: "Total Task",
    color: "#ff5454",
  },
  {
    id: 2,
    title: "256",
    status: "Ongoing",
    color: "#e0f4ff",
  },
  {
    id: 3,
    title: "256",
    status: "Pending Task",
    color: "#fff3e8",
  },
  {
    id: 4,
    title: "256",
    status: "Total Task",
    color: "#73ce81",
  },
];

const OnGoingCardsBlock = () => {
  return (
    <Row className="match-height ">
      {data.map((item) => (
        <OnGoingTaskCard key={item.id} data={item} />
      ))}
    </Row>
  );
};

export default OnGoingCardsBlock;
