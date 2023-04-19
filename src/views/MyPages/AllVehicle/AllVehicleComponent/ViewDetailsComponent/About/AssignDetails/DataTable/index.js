// ** React Imports
import { Fragment, useState, memo, useEffect } from "react";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

import { useForm, Controller } from "react-hook-form";

import { useGetProductsDummyDataQuery } from "../../../../../../../../redux/api/restApis";

const DataTableServerSide = (props) => {
  const {
    customHook,
    expandableRow,
    expandOnRowClick,
    expandedComponent,
    columns,
    tableTitle,
    showSearch,
    searchTitle,
    showButton,
    buttonName,
    buttonClick,
    showButton2,
    buttonName2,
    buttonClick2,

    handleMapData,
    hookSlug,
    dataLooper,
    defaultPaginationCount,
    hidePagination,
    hookOptions,
    filterComponent,
    hookParams,
  } = props;

  // ** States
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(
    defaultPaginationCount ? defaultPaginationCount : 7
  );
  const [pageOffset, setPageOffset] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  let params = {
    limit: rowsPerPage,
    offset: pageOffset,
    search: searchValue,
    slug: hookSlug,
  };

  if (hookParams) {
    params = {
      ...params,
      ...hookParams,
    };
  }

  const { data: customHookData, isFetching: customHookLoading } = customHook
    ? customHook(params, hookOptions ? hookOptions : {})
    : () => {};

  useEffect(() => {
    if (!customHookData) return;
    if (!handleMapData) return;
    handleMapData(customHookData);
  }, [customHookData]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

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
    const count = Math.ceil(customHookData?.count / rowsPerPage);

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
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">{tableTitle}</CardTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: " 1fr",
              width: "100%",
              gridColumnGap: "10px",
            }}
          >
            {/* {showButton2 && (
              <Button className="mx-sm-1 mb-1 mb-sm-0" onClick={buttonClick2}>
                {buttonName2}
              </Button>
            )}
            {showButton && <Button onClick={buttonClick}>{buttonName}</Button>} */}

            {/* <div className=" m-auto d-flex justify-content-center align-items-center">
              <img className="mx-1" src={pdf} alt="pdf" />
              <img className="mx-1" src={xls} alt="pdf" />
            </div> */}
          </div>
        </CardHeader>

        <Row className="mx-0 mt-1 mb-50 d-flex justify-content-between ">
          {/* <Col sm="2">
            {!hidePagination && (
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
            )}
          </Col> */}
          <Col>
            <div className="">{filterComponent}</div>
          </Col>

          {showSearch && (
            <Col className="d-flex bg-danger align-items-center " sm="3">
              <Label className="me-1" for="search-input">
                Search {searchTitle && searchTitle}
              </Label>
              <Input
                className="dataTable-filter"
                type="text"
                bsSize="sm"
                id="search-input"
                value={searchValue}
                onChange={handleSearch}
              />
            </Col>
          )}
        </Row>

        <div className="react-dataTable">
          <DataTable
            noHeader
            pagination
            data={
              dataLooper
                ? typeof dataLooper === "function"
                  ? dataLooper(customHookData)
                  : customHookData
                : customHookData?.results
            }
            expandableRows={expandableRow}
            columns={columns}
            expandOnRowClicked={expandOnRowClick}
            className="react-dataTable"
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            expandableRowsComponent={expandedComponent}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            paginationComponent={CustomPagination}
            progressPending={customHookLoading}
          />
        </div>
      </Card>
    </Fragment>
  );
};

export default memo(DataTableServerSide);
