import React from "react";

import { Lock } from "react-feather";

import { Button } from "reactstrap";

const Permission = () => {
  return (
    <div className="col-12 ">
      <h4 className="my-1">
        <span className="mx-2">
          <Lock />
        </span>
        Permission
      </h4>

      <div className="col-12">
        <table
          style={{ boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          class="customTable col-12 "
        >
          <thead>
            <tr
              style={{ backgroundColor: "#f3f2f7" }}
              className="border-1 solid text-center"
            >
              <th className="p-2 ">ROLE TYPE</th>
              <th>OWNER</th>

              <th>ADMIN</th>

              <th>HEAD OFFICE</th>

              <th>FINANCE</th>

              <th>STORE MANGER</th>

              <th>EMPLOYEE</th>

              <th>SUPERVISOR</th>

              <th>ENGINEER</th>

              <th>MANGER</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-1 solid text-center">
              <td className="p-2">
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr className="border-1 solid text-center">
              <td className="p-2">
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr className="border-1 solid text-center">
              <td className="p-2">
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr className="border-1 solid text-center">
              <td className="p-2">
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>

              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end my-2 align-items-center">
        <Button.Ripple color="info">Submit</Button.Ripple>
      </div>
    </div>
  );
};

export default Permission;
