import { useGetIssueSlipsQuery } from "../../../../redux/api/restApis";
import Table from "../../../Generic/Table";

import { CgArrowsVAlt } from "react-icons/cg";

const IssueSlipComponent = () => {
  const columns = [
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          <CgArrowsVAlt /> Free/Debit/Returnable
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
          UOM
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
          Purpose of issue <CgArrowsVAlt />
        </p>
      ),
      cell: (row) => row.employee_id,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Issue Head <CgArrowsVAlt />
        </p>
      ),
      cell: (row) => row.profile.age,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          MR Nos
        </p>
      ),
      cell: (row) => row.role,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Item Code
        </p>
      ),
      cell: (row) => (row.is_active ? <Eye /> : <EyeOff />),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Remarks
        </p>
      ),
      cell: (row) => (row.is_active ? <Eye /> : <EyeOff />),
    },
  ];
  const { data: materialIssueSlipData } = useGetIssueSlipsQuery();
  console.log("materialData", materialIssueSlipData);
  return (
    <Table
      customHook={useGetIssueSlipsQuery}
      columns={columns}
      defaultPaginationCount={10}
    />
  );
};

export default IssueSlipComponent;
