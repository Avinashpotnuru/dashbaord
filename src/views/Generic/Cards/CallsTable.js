import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Input,
  Col,
  Label,
  Button,
} from "reactstrap";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import Avatar from "@components/avatar";
import { ChevronDown, Delete, Edit, Eye, Send, Speaker } from "react-feather";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openEditCallRecordPopup } from "../../../redux/slices/generic";
import ISTFormat2 from "../ISTFormat2";
import { useDeleteCallRecordBySlugMutation } from "../../../redux/apis/restApi";
import { toast } from "react-toastify";

const CallsTable = ({ slug, customHook, showEdit, showDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [pageOffset, setPageOffset] = useState(0);

  const dispatch = useDispatch();

  // ** Api Request Hooks
  const { data: tableData, isLoading: tableLoading } = customHook({
    slug: slug,
    limit: rowsPerPage,
    offset: pageOffset,
  });

  useEffect(() => {
    if (!tableData) return;
  }, [tableData]);

  // *** Delete Call Record --start
  const [deleteCallRecord] = useDeleteCallRecordBySlugMutation();

  const handleDelete = (slug) => {
    if (confirm("Are you sure you want to delete this call record?")) {
      deleteCallRecord({ slug: slug, data: { dummy: "dummy" } }).then((res) => {
        if (res.data) {
          toast.success("Call record deleted successfully");
        }

        if (res.error) {
          toast.error(JSON.stringify(res.error.data));
        }
      });
    }
  };
  // *** Delete Call Record --end

  const columns = [
    {
      name: "SALES PERSON",
      grow: "flex-grow",
      width: "20%",
      cell: (row) => (
        <div className="d-flex gap-1 ">
          <div className="">
            <Avatar
              img={
                row?.to?.user_profile?.image
                  ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${row?.to?.user_profile?.image}`
                  : "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"
              }
            />
          </div>

          <div className="d-flex flex-column my-auto" style={{ zIndex: "1" }}>
            <h6>{row?.to?.user_profile?.name}</h6>
            <small>{ISTFormat2(new Date(row?.to?.date_created))}</small>
          </div>
        </div>
      ),
    },
    {
      name: "CALL RESPONSE",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <div
          className="col-12 text-wrap  "
          style={{ maxHeight: "50px", overflowY: "auto" }}
        >
          <div
            // id={`${row.index}`}
            // className=" d-inline-block text-truncate  "
            style={{ width: "600px" }}
          >
            {row?.message}
          </div>
          {/* <UncontrolledTooltip placement="top" target={`${row.index}`}>
            {row?.message}
          </UncontrolledTooltip> */}
        </div>
      ),
    },
    {
      name: "Recordings",
      grow: "flex-grow",
      width: "15%",
      cell: (row) =>
        row?.attachments?.length !== 0 ? (
          <div>
            {row?.attachments?.map((a) => (
              <a
                href={`${process.env.REACT_APP_BACKEND_IMG_BASEURL}${a?.file}`}
                target={"_blank"}
              >
                <Speaker />
              </a>
            ))}
          </div>
        ) : (
          <div>No Recordings</div>
        ),
    },

    {
      name: "ACTIONS",
      width: "10%",
      cell: (row) => (
        <div className="d-flex gap-1 ">
          {showEdit && (
            <Edit
              color="blue"
              onClick={() => dispatch(openEditCallRecordPopup(row))}
              className="cursor-pointer opacity-75"
              size={18}
            />
          )}
          {showDelete && (
            <AiOutlineDelete
              color="red"
              className="opacity-75"
              size={18}
              onClick={() => handleDelete(row?.slug)}
            />
          )}
          {/* <Send className="cursor-pointer" size={17} />

          <Eye size={17} className="mx-1" /> */}
        </div>
      ),
    },
  ];

  const handleNoOfRows = (e) => {
    setRowsPerPage(e.target.value);
  };

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    const nextOffset = page.selected * rowsPerPage;
    setPageOffset(nextOffset);
    setCurrentPage(page.selected + 1);
  };

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Math.ceil(tableData?.count / rowsPerPage);

    return (
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel={"..."}
        pageCount={count || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName={"active"}
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => handlePagination(page)}
        pageClassName={"page-item"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousClassName={"page-item prev"}
        previousLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName={
          "pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1"
        }
      />
    );
  };

  return (
    <Card>
      <CardBody>
        <Row className="mx-0 mt-1 mb-50 d-flex justify-content-between">
          <Col sm="2">
            <div className="d-flex align-items-center">
              <Label for="sort-select">show</Label>
              <Input
                className="dataTable-select"
                type="select"
                id="sort-select"
                value={rowsPerPage}
                onChange={(e) => handleNoOfRows(e)}
                style={{ width: "100px" }}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for="sort-select">entries</Label>
            </div>
          </Col>
        </Row>
      </CardBody>
      <div className="react-dataTable">
        <DataTable
          noHeader
          pagination
          data={tableData?.results}
          columns={columns}
          className="react-dataTable"
          paginationDefaultPage={currentPage + 1}
          paginationRowsPerPageOptions={[10, 25, 50, 100]}
          paginationComponent={CustomPagination}
          progressPending={tableLoading}
        />
      </div>
    </Card>
  );
};

export default CallsTable;
