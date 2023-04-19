import { useSelector, useDispatch } from "react-redux";

import { Row } from "reactstrap";

import { useState } from "react";

import CompletedSearchFilter from "./CompletedSearchFilter";
import CompletedCard from "./CompletedCard";
import ViewDetails from "./ViewsDetails";

const SrkDashBoardCompleted = () => {
  const dispatch = useDispatch();

  const completeFilterToggle = useSelector(
    (state) => state.popup.taskCompleted.status
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handlerChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="col-12 overflow-auto">
      <Row className="match-height">
        <CompletedSearchFilter />
      </Row>
      <Row className="match-height">
        {currentPage === 1 ? (
          <CompletedCard handlerChange={handlerChange} />
        ) : (
          <ViewDetails handlerChange={handlerChange} />
        )}
      </Row>
    </div>
  );
};

export default SrkDashBoardCompleted;
