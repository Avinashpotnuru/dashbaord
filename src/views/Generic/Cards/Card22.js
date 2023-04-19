import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ImVolumeMedium } from "react-icons/im";
import { HiOutlinePlus } from "react-icons/hi";

import { AsyncSelectInput, TextAreaInput } from "../AllInputs";
import {
  useAddFilesMutation,
  useGetAllUsersQuery,
  useAddContactCallsMutation,
} from "../../../redux/apis/restApi";
import RandomColor from "../../Generic/RandomColor";

// ** File Uploader
import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

export default function Card22({ slug, postHook }) {
  const current = new Date();
  const todayDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const dispatch = useDispatch();

  const [filesData, setFilesData] = useState([]);
  const [postFile] = useAddFilesMutation();
  const [postData] = postHook();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const resetForm = () => {
    reset();
    setValue("user", "");
    setValue("message", "");
    setFilesData([]);
  };

  const handleUploadFile = (file) => {
    let formdata = new FormData();

    formdata.append("file", file[0], file[0].name);

    postFile({ data: formdata }).then((res) => {
      if (res.data) {
        toast.success("File uploaded successfully");
        // console.log("response", res.data);
        setFilesData((prev) => [
          ...prev,
          {
            id: res.data.id,
            file: res.data.file,
          },
        ]);
      }

      if (res.error) {
        toast.error(JSON.stringify(res.error.data));
      }
    });
  };

  const onSubmit = (data) => {
    const backendFormate = {
      message: data.message,
      to: data.user.value,
      attachments: filesData.map((i) => i.id),
    };

    postData({ slug: slug, data: backendFormate }).then((response) => {
      if (response.data) {
        toast.success("Call added successfully");
        resetForm();
      }

      if (response.error) {
        toast.error(JSON.stringify(response.error.data));
      }
    });
  };

  return (
    <Card className="">
      {" "}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CardBody>
          <div className="d-flex justify-content-between">
            <Badge color="light-primary my-auto">{todayDate}</Badge>
            <Button color="primary" className="px-lg-3">
              Add Call
            </Button>
          </div>

          <div>
            <AsyncSelectInput
              control={control}
              errors={errors}
              fieldTitle={"To :"}
              fieldName={"user"}
              // isMulti={true}
              required={true}
              searchHook={useGetAllUsersQuery}
              searchLabel={(v) => {
                console.log(v);
                return v?.profile?.name;
              }}
              searchValue={(v) => v.id}
            />
          </div>

          <dt className="" style={{ paddingTop: "10px", fontSize: "12px" }}>
            Recordings
          </dt>
          <div
            className="d-flex gap-1 "
            style={{ paddingTop: "7px", paddingBlock: "7px" }}
          >
            <div className="mb-2 d-flex ">
              <div className="d-flex flex-nowrap gap-1 ">
                {filesData &&
                  filesData?.map((f) => {
                    return (
                      <div
                        className={`  rounded-circle d-flex `}
                        style={{
                          padding: "7px",
                          width: "40px",
                          opacity: ".4",
                          backgroundColor: randColor(),
                        }}
                      >
                        <ImVolumeMedium
                          size={21}
                          className="m-auto"
                          color="white"
                          style={{ zIndex: 1 }}
                        />
                      </div>
                    );
                  })}

                {filesData?.length === 0 && (
                  <div className="text-nowrap my-auto text-warning">
                    No Files Added
                  </div>
                )}
              </div>

              <FileUpload handleFile={handleUploadFile} />
            </div>
            {/* <div
            className=" bg-light rounded-circle d-flex bg-light-primary"
            style={{ padding: "7px", paddingLeft: "9px", paddingRight: "7px" }}
          >
            <ImVolumeMedium size={21} className="m-auto" color="#2d3032" />
          </div>
          <div
            className=" bg-light rounded-pill bg-light-danger"
            style={{ padding: "7px", paddingLeft: "9px", paddingRight: "7px" }}
          >
            <ImVolumeMedium size={21} className="m-auto" color="#2d3032" />
          </div>
          <div className=" bg-light rounded-pill" style={{ padding: "7px" }}>
            <p className="m-auto fw-bolder" style={{}}>
              <HiOutlinePlus size={21} className="m-auto" color="#2d3032" />
            </p>
          </div> */}
          </div>

          <h5 className="  pt-1">Call Comments</h5>
          <div style={{}}>
            <TextAreaInput
              control={control}
              errors={errors}
              fieldName={"message"}
              // fieldTitle={"Description"}
              required={true}
              placeholder={"Write a comment"}
            />
          </div>
        </CardBody>
      </Form>
    </Card>
  );
}
const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

const FileUpload = ({ handleFile }) => {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#EEEEEE",
    borderStyle: "dashed",
    backgroundColor: "#FAFAFA",
    color: "#BDBDBD",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const activeStyle = {
    borderColor: "#2196F3",
  };
  const acceptStyle = {
    borderColor: "#00E676",
  };
  const rejectStyle = {
    borderColor: "#FF1744",
  };
  const onDrop = useCallback((acceptedFiles) => {
    handleFile(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 1, accept: "" });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive && activeStyle),
      ...(isDragAccept && acceptStyle),
      // ...(isDragReject && rejectStyle)
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  return (
    <section className="container-sm">
      <div
        {...getRootProps({ className: "dropzone", style })}
        className={` bg-light-primary rounded-circle d-flex `}
        style={{
          padding: "7px",
          width: "35px",
          opacity: ".8",
        }}
      >
        {" "}
        <input
          {...getInputProps()}
          accept="audio/mp3,audio/*;capture=microphone"
        />
        <HiOutlinePlus
          size={21}
          className="m-auto fw-bolder"
          color="blue"
          style={{ zIndex: 1 }}
        />
      </div>
      <aside>
        {/* <ul>
          {acceptedFiles.map((file) => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul> */}
      </aside>
    </section>
  );
};
