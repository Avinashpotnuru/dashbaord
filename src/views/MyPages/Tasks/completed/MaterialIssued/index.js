import Table from "../../../Users/TaskDetails/DataTable";
import { useGetProductsDummyDataQuery } from "../../../../../redux/api/restApis";

const MaterialIssued = () => {
  // const { data: productData } = useGetProductsDummyDataQuery({
  //   limit: 10,
  //   offset: 0,
  // });
  // console.log("data", productData);
  const columns = [
    {
      name: "NAME",
      cell: (row) => {
        // console.log("erhehe", row);

        return row?.id;
      },
    },
    {
      name: " REQUESTED  MATERIAL (1)",
      cell: (row) => row?.id,
    },
    {
      name: "REQUESTED MATERIAL (2)",
      cell: (row) => row?.id,
    },
    {
      name: "ISSUED  MATERIAL (1)",
      cell: (row) => row?.id,
    },
    {
      name: "ISSUED  MATERIAL (2)",
      cell: (row) => row?.id,
    },
    {
      name: "RETURNED",
      cell: (row) => row?.id,
    },
    {
      name: "SCRAP MATERIAL",
      cell: (row) => row?.id,
    },
  ];
  return (
    <div>
      <Table
        customHook={useGetProductsDummyDataQuery}
        dataLooper={(data) => data?.products}
        columns={columns}
      />
    </div>
  );
};

export default MaterialIssued;
