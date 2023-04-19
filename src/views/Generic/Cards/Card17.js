import React, { useState } from "react";
import { ArrowUp } from "react-feather";
import { Card, Input } from "reactstrap";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

import fileTypeImages from "../fileTypeImages";
import ISTFormat from "../ISTFormat2";
import { useDeleteFileMutation } from "../../../redux/apis/restApi";

export default function Card17({ data, uploadFileButton }) {
  return (
    <Card className="border border-light-dark border-1 p-1 gap-1">
      <div className="px-1">
        <h5>Files</h5>
        <div className="d-flex justify-content-between w-100 text-black fw-bold">
          <small className="">
            <span className="d-none d-sm-block">FILE NAME</span>
            <span className="d-sm-none d-block">FILE</span>
          </small>
          <small className="d-flex gap-sm-5 gap-1 col-8 col-sm-4 justify-content-end">
            <p>SIZE</p>
            <p>
              <span className="d-none d-sm-block">LAST MODIFIED</span>
              <span className="d-sm-none d-block">DATE</span>
            </p>
            <p>ACTIONS</p>
          </small>
        </div>
      </div>

      <div className="border border-light-dark border-1 p-1 d-flex justify-content-between rounded my-auto ">
        <div className="my-auto">
          <ArrowUp size="17" color="black" />
        </div>
        <small
          onClick={uploadFileButton}
          className="bg-dark text-white bg-gradient bg-opacity-75 p-1 px-lg-3 rounded-pill  fs-lg-6"
        >
          Upload File
        </small>
      </div>

      {data &&
        data?.map((d) => {
          return (
            <div key={d?.id}>
              <UploadCard
                fileName={d?.size?.name}
                fileSize={d?.size?.size}
                fileLastModifiedDate={d?.date_created}
                fileType={d?.file}
                fileLink={d?.file}
                slug={d?.slug}
              />
            </div>
          );
        })}
    </Card>
  );
}

function UploadCard({
  fileName,
  fileSize,
  fileLastModifiedDate,
  fileType,
  fileLink,
  slug,
}) {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
  };

  const [deleteFile] = useDeleteFileMutation();

  const onClickDelete = (slug) => {
    if (window.confirm("Are you sure, You want to delete this file?")) {
      deleteFile({ slug: slug, data: { dummy: "dummy" } }).then((res) => {
        if (res.data) {
          toast.success("File deleted successfully");
        }
        if (res.error) {
          toast.error(JSON.stringify(res.error));
        }
      });
    }
  };

  return (
    <div className="border border-light-dark bg-white border-1 rounded align-content-center d-flex pt-1 px-1 my-auto">
      <div className="d-flex justify-content-between w-100 ">
        <div className="d-flex gap-1 w-50 gap-md-2">
          <div className="form-check">
            <Input
              className="d-none d-sm-block"
              type="checkbox"
              id="check"
              checked={check}
              onClick={handleCheck}
              // onChange={(e) => {
              //   e.stopPropagation();
              //   dispatch(
              //     updateTask({ ...item, isCompleted: e.target.checked })
              //   );
              // }}
            />
          </div>
          <p>
            <a href={fileLink}>
              <img
                className=""
                style={{ height: "20px", width: "20px" }}
                src={fileTypeImages(fileName)}
                alt=""
              />
            </a>
          </p>
          <span className="text-wrap w-50 d-none d-sm-block">
            <a href={fileLink} className="text-black  ">
              {fileName && fileName.split("/")[2]}
            </a>
          </span>
        </div>

        <div>
          <div className=" d-flex gap-1 gap-sm-5 justify-content-end col-12 px-3 ">
            <p className="">{fileSize} kb</p>
            <p className="">{ISTFormat(new Date(fileLastModifiedDate))}</p>
            {/* <AiFillFileText size={17} /> */}
            <div>
              <MdDelete
                onClick={() => onClickDelete(slug)}
                size={21}
                color="red"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
