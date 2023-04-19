import { User } from "react-feather";

import { useDispatch, useSelector } from "react-redux";

import {
  openTechnicianPopUp,
  closeTechnicianPopUp,
} from "../../../../redux/slices/popup";

import { toast } from "react-toastify";

import { useForm, Controller } from "react-hook-form";

// import {
//   useAddSupervisorRegisterMutation,
//   useGetEmployeeDataQuery,
// } from "../../../../redux/api/restApis";

// import { useAddSupervisorRegisterMutation } from "../../../../redux/api/restApis";

// ** Custom Components

// import Button from "@mui/material/Button";
import { Card } from "reactstrap";

import { useState } from "react";

import RegisterFormCard from "./registerForm";
import UsersTable from "../UsersTable";

const RegisterTechBlock = () => {
  const dispatch = useDispatch();

  // const [supervisorRegister] = useAddSupervisorRegisterMutation();

  // const [imgTitle, setTitle] = useState("");
  // const [imgSrc, setSrc] = useState("");
  const [file, setFile] = useState(null);
  // const [formModal, setFormModal] = useState(false);

  // const fileRef = useRef();

  // const {
  //   control,

  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const handleFileUpload = (e) => {
  //   const file = e?.target?.files[0];
  //   setFile(e?.target?.files[0]);

  //   setTitle(file?.name);

  //   {
  //     file && setSrc(URL.createObjectURL(file));
  //   }
  // };
  // console.log(file);

  return (
    <Card
      onClick={() => dispatch(openTechnicianPopUp())}
      className="d-flex justify-content-center align-items-center"
      style={{
        borderRadius: "10px",
        backgroundColor: "#00a7ff",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <User color="white" size="40px" />
      <h3 className="">
        Register an <br />
        Technician
      </h3>
      <RegisterFormCard />
    </Card>
  );
};

export default RegisterTechBlock;
