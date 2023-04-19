import { Card, Col, Row } from "reactstrap";

import { useForm, Controller } from "react-hook-form";
import { DateInput, TextInput } from "../../../../../Generic/AllInputs";
import pdf from "../../../../../../assets/images/srkimages/pdf.jpg";
import xls from "../../../../../../assets/images/srkimages/xls.jpg";
import { useGetProductsDummyDataQuery } from "../../../../../../redux/api/restApis";
import Table from "../../../../../MyPages/Users/TaskDetails/DataTable";
import { Eye } from "react-feather";

import { useDispatch } from "react-redux";
import {
  openServiceIssueSlipPopUp,
  openServiceViewDetailsPopUp,
} from "../../../../../../redux/slices/popup";
const ServiceHistory = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: dummyData } = useGetProductsDummyDataQuery({
    limit: 10,
    offset: 0,
  });
  const columns = [
    {
      name: "SL.NO",
      cell: (row) => row?.id,
    },
    {
      name: "DATE",
      cell: (row) => row?.title,
    },
    {
      name: "REPAIR TYPE",
      cell: (row) => row?.category,
    },
    {
      name: "ODO READING",
      cell: (row) => row?.price,
    },
    {
      name: "AVG MAILAGE",
      cell: (row) => row?.rating,
    },
    {
      name: "TECH ASSIGN",
      cell: (row) => row?.stock,
    },
    {
      name: "ISSUE SLIP",
      cell: (row) => (
        <Eye
          onClick={() => dispatch(openServiceIssueSlipPopUp())}
          className="text-center"
        />
      ),
    },
    {
      name: "DETAILS",
      cell: (row) => (
        <a
          style={{ color: "green", fontWeight: "bolder" }}
          onClick={() => dispatch(openServiceViewDetailsPopUp())}
        >
          view details
        </a>
      ),
    },
    {
      name: "",
      cell: (row) => <img className="m-auto" src={pdf} alt="pdf" />,
    },
  ];
  return (
    <Row>
      <Col>
        <Card>
          <Table
            customHook={useGetProductsDummyDataQuery}
            columns={columns}
            dataLooper={(data) => data?.products}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default ServiceHistory;
