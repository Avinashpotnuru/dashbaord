import { useGetVehiclesQuery } from "../../../../redux/api/restApis";

import { TbArrowsDownUp } from "react-icons/tb";

import { Badge, Button } from "reactstrap";

import Table from "../../../Generic/Table";

import van from "../../../../assets/images/srkimages/Vector.jpg";

const AllVehicleComponent = () => {
  const { data: allVehiclesData } = useGetVehiclesQuery();
  const columns = [
    {
      name: "",

      cell: (row) => <img style={{ height: "30px" }} src={van} alt="img" />,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          VEHICLE No
        </p>
      ),
      cell: (row) => row?.vehicle_number,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          TYPE{" "}
          <span>
            <TbArrowsDownUp />
          </span>
        </p>
      ),
      cell: (row) => row?.type,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          LOCATION{" "}
          <span>
            <TbArrowsDownUp />
          </span>
        </p>
      ),
      cell: (row) => "Near Jntu KPHB",
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Status{" "}
          <span>
            <TbArrowsDownUp />
          </span>
        </p>
      ),
      cell: (row) => row?.status,
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Driver Status
        </p>
      ),
      cell: (row) =>
        row?.status === "Running" ? (
          <Badge color="success">Assigned</Badge>
        ) : (
          <Badge color="success">Not-Assigned</Badge>
        ),
    },
    {
      name: (
        <p style={{ fontWeight: "bold" }} className="text-dark">
          Actions
        </p>
      ),
      cell: (row) =>
        row?.status === "Running" ? (
          <Button color="success" outline>
            Assign
          </Button>
        ) : (
          <Button color="success" outline>
            De-Assign
          </Button>
        ),
    },
    {
      name: "",

      cell: (row) => (
        <a style={{ color: "green", fontWeight: "bolder" }}>View Details</a>
      ),
    },
  ];
  console.log("allVehicleData", allVehiclesData);
  return (
    <Table
      columns={columns}
      customHook={useGetVehiclesQuery}
      defaultPaginationCount={10}
    />
  );
};

export default AllVehicleComponent;
