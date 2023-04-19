import {
  useGetAllPurchaseRequestsQuery,
  useGetUserDataQuery,
} from "../../../../redux/api/restApis";
import Table from "../../../Generic/Table";

const PurchaseRequestTable = () => {
  const { data: purchaseData } = useGetAllPurchaseRequestsQuery();

  console.log("data", purchaseData);
  const columns = [
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          NO
        </p>
      ),
      cell: (row) =>
        row.is_active ? (
          <p className="text-danger" style={{ fontWeight: "bold" }}>
            ACTIVE
          </p>
        ) : (
          <p>INACTIVE</p>
        ),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          STATUS
        </p>
      ),
      cell: (row) => (
        <p style={{ fontWeight: "bold" }} className="text-info">
          {row.profile.name}
        </p>
      ),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          REQUESTED
        </p>
      ),
      cell: (row) => row.employee_id,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          PR Number
        </p>
      ),
      cell: (row) => row.profile.age,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          DATE
        </p>
      ),
      cell: (row) => row.role,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Equipment Details
        </p>
      ),
      cell: (row) => (row.is_active ? <Eye /> : <EyeOff />),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Description
        </p>
      ),
      cell: (row) => (row.is_active ? <Eye /> : <EyeOff />),
    },
  ];
  return (
    <Table columns={columns} customHook={useGetAllPurchaseRequestsQuery} />
  );
};

export default PurchaseRequestTable;
