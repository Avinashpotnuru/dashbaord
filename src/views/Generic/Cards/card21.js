// ** React Imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Avatar from "@components/avatar";
import AvatarGroup from "@components/avatar-group";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown, Eye, Send, Speaker } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card } from "reactstrap";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
} from "reactstrap";

// ** Store & Actions
import { getData } from "../../apps/invoice/store/index";
import { useDispatch, useSelector } from "react-redux";

import avatarImg from "@src/assets/images/portrait/small/avatar-s-20.jpg";

// ** Styles
import "@styles/react/apps/app-invoice.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";

export default function Card21({ data: responseData }) {
  console.log("res", responseData);

  const columns = [
    {
      name: "SALES PERSON",
      grow: "flex-grow",
      width: "15%",
      cell: (row) => (
        <div className="d-flex gap-1">
          <Avatar
            img={`${process.env.REACT_APP_BACKEND_IMG_BASEURL}${row?.owner?.user_profile?.image}`}
            size={20}
          />
          <div className="d-flex flex-column my-auto">
            <h6>{row?.owner?.user_profile?.name}</h6>
            <small>{row?.date}</small>
          </div>
        </div>
      ),
    },
    {
      name: "CALL RESPONSE",
      sortable: true,
      wrap: true,
      cell: (row) => (
        <>
          <div
            id={`${row.index}`}
            className=" d-inline-block text-truncate  "
            style={{ maxWidth: "600px" }}
          >
            {row?.message}
          </div>
          {/* <UncontrolledTooltip placement="top" target={`${row.index}`}>
            {row?.message}
          </UncontrolledTooltip> */}
        </>
      ),
    },
    {
      name: "Recordings",
      // grow: "flex-grow",
      width: "15%",
      cell: (row) => (
        <div>
          {row?.attachments?.map((a) => (
            <a href={a?.file} target={"_blank"}>
              <Speaker />
            </a>
          ))}
        </div>
      ),
    },

    {
      name: "ACTIONS",
      width: "10%",
      cell: (row) => (
        <div className="d-flex  ">
          <Send className="cursor-pointer" size={17} />

          <Eye size={17} className="mx-1" />
        </div>
      ),
    },
  ];

  const [value, setValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const store = useSelector((state) => state.invoice);

  // const filters = {
  //   q: value,
  //   status: statusValue,
  // };

  //   const isFiltered = Object.keys(filters).some(function (k) {
  //     return filters[k].length > 0;
  //   });

  //   if (store.data.length > 0) {
  //     return store.data;
  //   } else if (store.data.length === 0 && isFiltered) {
  //     return [];
  //   } else {
  //     return store.allData.slice(0, rowsPerPage);
  //   }
  // };
  // ** State
  const [currentPage, setCurrentPage] = useState(0);

  // ** Function to handle filter
  const handlePagination = (page) => {
    setCurrentPage(page.selected);
  };

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={""}
      nextLabel={""}
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={10}
      breakLabel={"..."}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName={
        "pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1"
      }
    />
  );

  return (
    <div className="invoice-list-wrapper col-12 ">
      <Card className="">
        <div className="invoice-list-dataTable react-dataTable ">
          <DataTable
            noHeader
            pagination
            // sortServer
            paginationServer
            // subHeader={true}
            columns={columns}
            responsive={true}
            // onSort={handleSort}
            // data={dataToRender()}
            data={responseData}
            sortIcon={<ChevronDown />}
            className="react-dataTable"
            defaultSortField="invoiceId"
            // paginationDefaultPage={currentPage}
            // paginationComponent={CustomPagination}
            // subHeaderComponent={
            //   <CustomHeader
            //     value={value}
            //     statusValue={statusValue}
            //     rowsPerPage={rowsPerPage}
            //     handleFilter={handleFilter}
            //     handlePerPage={handlePerPage}
            //     handleStatusValue={handleStatusValue}
            //   />
            // }

            // noHeader
            // pagination
            // data={data}
            expandableRows
            // columns={columns}
            // expandOnRowClicked
            // className='react-dataTable'
            // sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            paginationDefaultPage={currentPage + 1}
            // expandableRowsComponent={ExpandableTable}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
          />
        </div>
      </Card>
    </div>
  );
}
