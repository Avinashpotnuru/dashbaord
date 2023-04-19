import React from "react";
import { ArrowLeft, Edit, Eye, Plus, X } from "react-feather";

import { closeRiseMainPagePopUp } from "../../../../../../redux/slices/popup";

import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";

const Preview = ({ changeHandler }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: "white", position: "relative" }}>
        <X
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          style={{
            padding: "4px",
            backgroundColor: "white",
            position: "absolute",
            left: "100%",
            bottom: "2px",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
      </div>
      <div className="d-flex">
        <ArrowLeft onClick={() => dispatch(closeRiseMainPagePopUp())} />
        <h3 className="m-auto">Raise PR</h3>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <h6>Inventory Items</h6>
        <Button.Ripple color="secondary" outline>
          <span className="mx-1">
            <Edit size={"15px"} />
          </span>
          Edit
        </Button.Ripple>
      </div>

      <div>
        <table className="col-11 border solid">
          <thead>
            <tr>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Materials
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Vehicle Use
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Required quantity
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Priority
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Priority
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border solid ">Brightstone 225/50 tire</td>
              <td className="border solid ">02</td>
              <td className="border solid ">02</td>
              <td className="border solid ">02</td>
              <td className="border solid ">Urgent</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <h6>Non-Inventory Items</h6>
        <Button.Ripple color="secondary" outline>
          <span className="mx-1">
            <Edit size={"15px"} />
          </span>
          Edit
        </Button.Ripple>
      </div>
      <div>
        <table className="col-12 border solid">
          <thead>
            <tr>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Materials
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Required quantity
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Repair Use
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Vehicle Use
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Priority
              </th>
              <th style={{ backgroundColor: "#B3E5FF", padding: "5px" }}>
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border solid ">Brightstone 225/50 tire</td>
              <td className="border solid ">02</td>
              <td className="border solid ">02</td>
              <td className="border solid ">02</td>
              <td className="border solid ">Urgent</td>
              <td className="border solid ">
                <Button.Ripple
                  color="secondary"
                  outline
                  onClick={() => changeHandler(7)}
                >
                  <Eye size={"10px"} />
                  View
                </Button.Ripple>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-2 d-flex justify-content-end align-items-center">
        <Button.Ripple color="primary">
          <span>
            <Plus />
          </span>
          Add
        </Button.Ripple>
      </div>
      <div className="mt-5 d-flex justify-content-around align-items-center">
        <Button.Ripple
          color="info"
          onClick={() => dispatch(closeRiseMainPagePopUp())}
        >
          Raise PR
        </Button.Ripple>
        <Button.Ripple
          onClick={() => dispatch(closeRiseMainPagePopUp())}
          color="secondary"
          outline
        >
          Cancel
        </Button.Ripple>
      </div>
    </div>
  );
};

export default Preview;
