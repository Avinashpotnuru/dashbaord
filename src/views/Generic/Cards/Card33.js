import Avatar from "@components/avatar";

import profileImg from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import { Badge, Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Edit } from "react-feather";

const Card33 = ({
  title,
  company,
  occupation,
  phone,
  email,
  img,
  showDeleteButton,
  onClickDeleteIcon,
  showEditButton,
  onClickEditIcon,
}) => {
  return (
    <Card style={{ position: "relative" }}>
      <div
        className="d-flex gap-1"
        style={{
          padding: "4px",
          position: "absolute",
          right: "4px",
          top: "4px",
          // backgroundColor: "#FF0000",
          // opacity: "0.7",
          zIndex: "1",
        }}
      >
        {showEditButton && (
          <div onClick={(e) => e.stopPropagation()}>
            <button
              className="rounded-circle bg-opacity-25 shadow border-0 m-auto"
              style={{ padding: "4px", backgroundColor: "#FFA500" }}
              // style={{
              //   padding: "4px",
              //   position: "absolute",
              //   right: "4px",
              //   top: "4px",
              //   backgroundColor: "#FF0000",
              //   opacity: "0.7",
              //   zIndex: "1",
              // }}
            >
              <Edit
                onClick={onClickEditIcon}
                // style={{ opacity: ".8" }}
                color="white"
                size={18}
                className="m-auto "
              />
            </button>
          </div>
        )}

        {showDeleteButton && (
          <div onClick={(e) => e.stopPropagation()}>
            <button
              className="rounded-circle bg-opacity-25 shadow border-0 m-auto"
              style={{ padding: "4px", backgroundColor: "#FF0000" }}
            >
              <RiDeleteBin6Fill
                onClick={onClickDeleteIcon}
                // style={{ opacity: ".8" }}
                color="white"
                size={18}
                className="m-auto "
              />
            </button>
          </div>
        )}
      </div>
      <CardBody>
        <div className="d-flex align-items-center">
          <div
            className="bg-success shadow rounded-circle overflow-hidden"
            style={{
              width: "80px",
              height: "80px",
              border: "solid 5px white",
            }}
          >
            <img
              src={
                img
                  ? `${process.env.REACT_APP_BACKEND_IMG_BASEURL}${img}`
                  : "https://blog.rahulbhutani.com/wp-content/uploads/2020/05/Screenshot-2018-12-16-at-21.06.29.png"
              }
              alt=""
              className="w-100 h-100"
            />
          </div>

          <div className="m-1">
            <h6 className="m-0 text-primary">{title}</h6>
            <p className="m-0 text-danger">{occupation}</p>
            <p className="m-0">{company}</p>
          </div>
        </div>

        <div className="d-flex justify-content-between w-100 gap-1 mt-1">
          <div>
            <p className="">{email}</p>
            <Badge className="profile-badge" color="light-primary">
              Email
            </Badge>
          </div>

          <div>
            <p> {phone}</p>
            <Badge className="profile-badge" color="light-primary">
              Phone
            </Badge>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card33;
