import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import { GrFormClose } from "react-icons/gr";
import Avatar from "@components/avatar";
import { AiFillFileText } from "react-icons/ai";
import avatarImg from "@src/assets/images/portrait/small/avatar-s-20.jpg";
import { File } from "react-feather";
import fileTypeImages from "../fileTypeImages";
import { toast } from "react-toastify";

export default function Card26({ data, handleClose, postHook, slug }) {
  const [file, setFile] = useState(null);

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  };

  const [postTrigger] = postHook();

  const handleSubmit = () => {
    if (!file) {
      toast.error("please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file, file.name);

    postTrigger({ data: formData, slug: slug }).then((res) => {
      if (res.data) {
        toast.success("successfully added file");
        handleClose();
      }

      if (res.error) {
        toast.error("something went wrong");
      }
    });
  };

  return (
    <Card className="m-0" style={{ position: "relative" }}>
      <CardHeader className="">
        <h4 className="my-auto">Files</h4>
        <div className="gap-1 d-flex">
          <Badge color="primary">Save</Badge>
          <div
            className="rounded bg-white shadow border-1 border-bottom "
            style={{
              position: "absolute",
              top: "-9px",
              right: "-9px",
              padding: "2px",
            }}
          >
            <GrFormClose
              size={25}
              className="my-auto cursor-pointer"
              onClick={handleClose}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Row className="d-flex">
          <Col className="col-9">
            <Label className="text-opacity-50 fs-5">Add Files</Label>
            <Input
              type="file"
              onChange={handleImage}
              accept=".xlsx, .xls, .csv"
            />
          </Col>
          <Col className="col-2 d-flex align-items-end">
            <Button color="success" className="" onClick={handleSubmit}>
              Add
            </Button>
          </Col>
        </Row>
        <div className="pt-1 d-flex flex-column gap-1 px-1">
          {data?.map((d) => {
            return <CheckFiles key={d.id} title={d.file} />;
          })}
        </div>
      </CardBody>
    </Card>
  );
}

function CheckFiles({ title }) {
  const [check, setCheck] = useState(true);
  const handleCheck = () => {
    setCheck(!check);
  };

  const img = fileTypeImages(title);

  return (
    <div className="d-flex justify-content-between ">
      <div className="d-flex gap-1">
        <div
          className="bg-primary rounded-circle"
          style={{
            width: "40px",
            height: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={img} alt="" className="w-50 h-50" />
        </div>
        <p className="my-auto w-50">{title}</p>
      </div>
      <div className="my-auto">
        {/* <Input
          type="checkbox"
          id="check"
          checked={check}
          onClick={handleCheck}
        /> */}
      </div>
    </div>
  );
}
