import React from "react";

const MaterialTable = () => {
  return (
    <table class="Table col-12 my-2">
      <thead>
        <tr className="p-2" style={{ backgroundColor: "#f3f2f7" }}>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
          <th>Header 4</th>
          <th>Header 5</th>
          <th>Header 6</th>
          <th>Header 7</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border solid">
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
          <td>Row 1, Cell 4</td>
          <td>Row 1, Cell 5</td>
          <td>Row 1, Cell 6</td>
          <td>Row 1, Cell 7</td>
        </tr>
        <tr className="border solid">
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
          <td>Row 2, Cell 4</td>
          <td>Row 2, Cell 5</td>
          <td>Row 2, Cell 6</td>
          <td>Row 2, Cell 7</td>
        </tr>
        <tr className="border solid">
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
          <td>Row 3, Cell 4</td>
          <td>Row 3, Cell 5</td>
          <td>Row 3, Cell 6</td>
          <td>Row 3, Cell 7</td>
        </tr>
        <tr className="border solid">
          <td>Row 4, Cell 1</td>
          <td>Row 4, Cell 2</td>
          <td>Row 4, Cell 3</td>
          <td>Row 4, Cell 4</td>
          <td>Row 4, Cell 5</td>
          <td>Row 4, Cell 6</td>
          <td>Row 4, Cell 7</td>
        </tr>
        <tr className="border solid">
          <td>Row 5, Cell 1</td>
          <td>Row 5, Cell 2</td>
          <td>Row 5, Cell 3</td>
          <td>Row 5, Cell 4</td>
          <td>Row 5, Cell 5</td>
          <td>Row 5, Cell 6</td>
          <td>Row 5, Cell 7</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MaterialTable;
