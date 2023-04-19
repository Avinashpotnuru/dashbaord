import { Fragment, useState, useEffect, cloneElement } from "react";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import {
  Card,
  CardBody,
  CardHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import ReactPaginate from "react-paginate";
import { useForm } from "react-hook-form";

import dummyData from "./dummyData";

import Sidebar from "./Sidebar";

// ** Styles
import "@styles/react/apps/app-ecommerce.scss";

import Header from "./Header";
import Searchbar from "./Searchbar";
import queryStringBuilder from "../queryStringBuilder";

const CardList = (props) => {
  const {
    resultsHook,
    dataLooper,
    children,
    loopKey,
    showSearch,
    showSidebar,
    limit,
    paginationTop,
    filtersTitle,
    // tableTitle,
    inputFields,
    additionalParams,
    additionalGetHookArgs,
  } = props;

  const [activeView, setActiveView] = useState("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const { control, watch, reset } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const search = watch("search", "");

  const [params, setParams] = useState(
    additionalParams
      ? {
          limit: limit ? limit : 9,
          offset: pageOffset,
          search: search ? search : "",
          ...additionalParams,
        }
      : {
          limit: limit ? limit : 9,
          offset: pageOffset,
          search: search ? search : "",
        }
  );

  useEffect(() => {
    setParams({
      ...params,
      offset: pageOffset,
    });
  }, [pageOffset]);

  const handleReset = () => {
    setParams({
      limit: limit ? limit : 9,
      offset: pageOffset,
      search: search ? search : "",
    });
    setPageOffset(0);
    setCurrentPage(1);
    reset();
  };

  // console.log("pageOffset::", pageOffset, currentPage);

  const { data: hookData, isFetching: hookFetching } = resultsHook(
    params,
    additionalGetHookArgs ? additionalGetHookArgs : {}
  );

  // const { data: hookData, isFetching: hookFetching } = resultsHook(

  //   params,
  //   additionalGetHookArgs ? additionalGetHookArgs : {}
  // );

  const loopData = dataLooper ? hookData : hookData?.results;

  const handlePagination = (page) => {
    const nextOffset = page.selected * (limit ? limit : 9);

    setPageOffset(nextOffset);
    setParams({ pageOffset: nextOffset, ...params });
    setCurrentPage(page.selected + 1);
  };

  return (
    <div className="d-flex flex-lg-row-reverse flex-sm-row-reverse flex-column-reverse  ">
      {/* <Card>
        <CardHeader className="text-center d-flex justify-content-center align-items-center">
          <h3 className="m-0 p-0" style={{ lineHeight: "0.1" }}>
            {tableTitle}
          </h3>
        </CardHeader>
      </Card> */}
      <div className={showSidebar && "content-detached content-right "}>
        <div className="content-body ">
          {/* <Header
            activeView={activeView}
            setActiveView={setActiveView}
            totalCount={hookData?.count}
            setSidebarOpen={setSidebarOpen}
          /> */}

          <div
            className={classnames("body-content-overlay", {
              show: sidebarOpen,
            })}
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* {showSearch && <Searchbar control={control} />} */}

          {loopData?.length !== 0 ? (
            <div
              className={`d-flex ${
                paginationTop ? "flex-column" : "flex-column-reverse"
              }`}
            >
              <div className="d-flex justify-content-center ecommerce-shop-pagination mt-2">
                <CustomPagination
                  currentPage={currentPage}
                  currentCount={hookData?.count}
                  handlePagination={handlePagination}
                  limit={limit}
                />
              </div>
              <div
                // className={classnames({
                //   "grid-view": activeView === "grid",
                //   "list-view": activeView === "list",
                // })}
                className="col-12 d-flex flex-wrap gap-1"
              >
                {/* {activeView === "grid" ? ( */}
                {loopData?.map((i, idx) => {
                  return (
                    <div
                      className="col-12 col-md-11 col-lg-5 col-xxl-5"
                      style={{ margin: "0px" }}
                    >
                      {cloneElement(children, {
                        data: i,
                        idx: idx,
                        key: loopKey ? loopKey(i) : idx,
                      })}
                    </div>
                  );
                })}
                {/* ) : (
                  <Table>
                    <thead>
                      <tr>
                        <th>Test</th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                        <th>Test 1</th>
                        <th>Test 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                        <td>
                          Test Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nulla, reiciendis.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )} */}
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center mt-2">
              <p>No Results</p>
            </div>
          )}
        </div>
      </div>

      <div className="col-12 col-sm-5 col-lg-3" style={{ marginRight: "11px" }}>
        {showSidebar && (
          <Sidebar
            sidebarOpen={sidebarOpen}
            handleReset={handleReset}
            inputFields={inputFields}
            setParams={setParams}
            params={params}
            filtersTitle={filtersTitle}
            additionalParams={additionalParams}
          />
        )}
      </div>
    </div>
  );
};

const CustomPagination = ({
  currentPage,
  currentCount,
  handlePagination,
  limit,
}) => {
  const count = Math.ceil(currentCount / limit);

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

export default CardList;
