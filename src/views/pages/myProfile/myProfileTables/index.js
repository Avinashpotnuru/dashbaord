const TableComponent = () => {
  const itemsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>s.no</th>
            <th>user number</th>
          </tr>

          {itemsArray.map((item, index) => (
            <tr
              style={{
                borderBlockColor: "red",
                borderWidth: "2px",
                margin: "5px",
              }}
              key={index}
            >
              <td
                style={{
                  borderBlockColor: "black",
                  borderWidth: "2px",
                  margin: "5px",
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  borderBlockColor: "black",
                  borderWidth: "2px",
                  margin: "5px",
                }}
              >{`user ${item}`}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
