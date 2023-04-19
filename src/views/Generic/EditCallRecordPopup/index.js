// ** Custom Components
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// ** File Uploader
import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

import {
  AsyncSelectInput,
  TextInput,
  DateTimeInput,
  TextAreaInput,
} from "../../Generic/AllInputs";
import {
  useGetAllUsersQuery,
  useEditCallReminderBySlugMutation,
  useAddFilesMutation,
  useEditCallRecordBySlugMutation,
  useDeleteFileMutation,
} from "../../../redux/apis/restApi";
import { closeEditCallRecordPopup } from "../../../redux/slices/generic";
import ISTFormat from "../../Generic/ISTFormat2";
import { HiOutlinePlus } from "react-icons/hi";
import { ImVolumeMedium } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const EditCallRecordPopup = (props) => {
  const dispatch = useDispatch();

  const [filesData, setFilesData] = useState([]);

  const [postFile] = useAddFilesMutation();

  const popupStatus = useSelector(
    (state) => state.generic.editCallRecordPopup.status
  );

  const helperData = useSelector(
    (state) => state.generic.editCallRecordPopup.helperData
  );

  const [editData] = useEditCallRecordBySlugMutation();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    register,
  } = useForm();

  const resetForm = () => {
    reset();
    setValue("message", "");
    setValue("to", "");
    setFilesData([]);
  };

  // ** Auto Filling Data --start

  let autoFieldData = {
    message: helperData?.message,
    to: [helperData?.to]?.map((u) => ({
      label: u?.user_profile?.name,
      value: u?.id,
    })),
  };

  useEffect(() => {
    if (!helperData) return;

    const keys = Object.keys(autoFieldData);

    keys.forEach((k) => {
      setValue(k, autoFieldData[k]);
    });
  }, [helperData]);

  // ** Auto Filling Data --end

  //** Remove Files */
  const removeFile = (id) => {
    if (window.confirm("Are you sure, you want to delete this audio?")) {
      const finalFiles = filesData.filter((e) => e.id !== id);

      setFilesData(finalFiles);
    }
  };

  // ** Delete File api delete */
  const [deleteFile] = useDeleteFileMutation();

  const onClickDelete = (slug) => {
    if (window.confirm("Are you sure, you want to delete this audio?")) {
      deleteFile({ slug: slug, data: { dummy: "dummy" } }).then((res) => {
        if (res.data) {
          toast.success("Audio File deleted successfully");
        }
        if (res.error) {
          toast.error(JSON.stringify(res.error));
        }
      });
    }
  };

  //** Close Popup */
  const handleClose = () => {
    dispatch(closeEditCallRecordPopup());
    resetForm();
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
    let fileDataArray = [...helperData?.attachments, ...filesData];

    const backendFormate = {
      message: data.message,
      to: data.to.value,
      attachments: fileDataArray.map((i) => i.id),
    };

    editData({ slug: helperData?.slug, data: backendFormate }).then(
      (response) => {
        if (response.data) {
          toast.success("Call Record updated successfully");
          handleClose();
        }

        if (response.error) {
          toast.error(JSON.stringify(response.error.data));
        }
      }
    );
  };

  return (
    <Modal
      isOpen={popupStatus}
      toggle={handleClose}
      className={"modal-dialog-centered "}
    >
      <ModalHeader toggle={handleClose}>Update Call Record</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(onSubmit)} className="mb-2">
          <div className="mb-1">
            <AsyncSelectInput
              fieldTitle={"To"}
              fieldName={"to"}
              required={true}
              placeholder={""}
              control={control}
              errors={errors}
              // isMulti={true}
              searchHook={useGetAllUsersQuery}
              searchLabel={(v) => v.profile.name}
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
            <div className="mb-2 pt-1 d-flex ">
              <div className="d-flex flex-nowrap gap-1 ">
                {helperData?.attachments?.length !== 0 &&
                  helperData?.attachments?.map((f) => {
                    return (
                      <div
                        className=" rounded-circle d-flex "
                        style={{
                          padding: "7px",
                          width: "40px",
                          opacity: ".5",
                          backgroundColor: randColor(),
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "-14px",
                            right: "-10px",
                            opacity: "1",
                            // top: "-12px",
                            // right: "-12px",
                          }}
                        >
                          <div
                            style={{
                              padding: "2px",
                            }}
                            className="bg-white shadow border-1 border rounded-circle "
                          >
                            <MdDelete
                              color="red"
                              size={17}
                              onClick={(e) => {
                                onClickDelete(f?.slug);
                                e.stopPropagation();
                              }}
                            />
                          </div>
                        </div>
                        <ImVolumeMedium
                          // onClick={() => onClickDelete(f?.slug)}
                          size={21}
                          className="m-auto"
                          color="white"
                          style={{ zIndex: 1 }}
                        />
                      </div>
                    );
                  })}
                {filesData &&
                  filesData?.map((f) => {
                    return (
                      <div
                        className={`  rounded-circle d-flex `}
                        style={{
                          padding: "7px",
                          width: "40px",
                          opacity: ".5",
                          backgroundColor: randColor(),
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "-14px",
                            right: "-10px",
                            opacity: "1",
                            // top: "-12px",
                            // right: "-12px",
                          }}
                        >
                          <div
                            style={{
                              padding: "2px",
                            }}
                            className="bg-white shadow border-1 border rounded-circle "
                          >
                            <MdDelete
                              color="red"
                              size={17}
                              onClick={(e) => {
                                removeFile(f?.id);
                                e.stopPropagation();
                              }}
                            />
                          </div>
                        </div>

                        <ImVolumeMedium
                          size={21}
                          className="m-auto"
                          color="white"
                          style={{ zIndex: 1 }}
                        />
                      </div>
                    );
                  })}

                {filesData?.length === 0 &&
                  helperData?.attachments?.length === 0 && (
                    <div className="text-nowrap my-auto text-warning">
                      No Records Added
                    </div>
                  )}
              </div>

              <FileUpload handleFile={handleUploadFile} />
            </div>
          </div>

          <div className="mb-1">
            <TextAreaInput
              fieldTitle={"Call Comment"}
              fieldName="message"
              required={true}
              placeholder={"Write a comment"}
              control={control}
              errors={errors}
            />
          </div>

          <div className="d-flex flex-wrap justify-content-end  pt-1">
            <Button color="primary" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

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

export default EditCallRecordPopup;
