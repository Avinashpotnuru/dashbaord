import React from "react";

const UserAttendanceTable = () => {
  return (
    <div>
      <table className="col-12">
        <thead>
          <tr className="p-2 border-1 solid">
            <th className="p-2">STATUS</th>

            <th>NAME</th>

            <th>DATE</th>

            <th>ID NO</th>

            <th>LOCATION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>

            <td>Row 1, Cell 3</td>

            <td>Row 1, Cell 4</td>

            <td>vizag (00-01)</td>
          </tr>
          <tr>
            <td className="p-2">Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>

            <td>Row 2, Cell 3</td>

            <td>Row 2, Cell 4</td>

            <td>vizag (00-01)</td>
          </tr>
          <tr>
            <td className="p-2">Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>

            <td>Row 3, Cell 3</td>

            <td>Row 3, Cell 4</td>

            <td>vizag (00-01)</td>
          </tr>
          <tr>
            <td className="p-2">Row 4, Cell 1</td>
            <td>Row 4, Cell 2</td>

            <td>Row 4, Cell 3</td>

            <td>Row 4, Cell 4</td>

            <td>vizag (00-01)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserAttendanceTable;
