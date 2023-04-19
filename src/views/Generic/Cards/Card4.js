// ** Custom Components
import Avatar from "@components/avatar";
import AvatarGroup from "@components/avatar-group";

// ** Third Party Components
import { Card, CardBody, CardText, Button, Badge } from "reactstrap";

import { useDeleteReminderBySlugMutation } from "../../../redux/apis/restApi";

// ** Images
import profileImg from "@src/assets/images/portrait/small/avatar-s-7.jpg";
import { toast } from "react-toastify";
import { Delete } from "react-feather";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Card4 = ({
  date,
  description,
  title,
  subtitle,
  imgData,
  onClickEdit,
  onClickDetails,
  slug,
}) => {
  //*** Delete Reminder */
  const [deleteData] = useDeleteReminderBySlugMutation();

  const onClickDelete = (slug) => {
    if (window.confirm("Are you sure, You want to delete this reminder?")) {
      deleteData({ slug: slug, data: { dummy: "dummy" } }).then((response) => {
        if (response.data) {
          toast.success("Reminder deleted successfully");
        }

        if (response.error) {
          toast.error(JSON.stringify(response.error.data));
        }
      });
    }
  };
  return (
    <Card className="card-apply-job" style={{ position: "relative" }}>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex align-items-center">
            {/* {imgData && <AvatarGroup data={imgData} />} */}
            {imgData && (
              <AvatarGroup
                className="me-1"
                data={imgData}
                imgHeight="42"
                imgWidth="42"
              />
            )}
            <div>
              <h6 className="mb-0">{title}</h6>
              <small className="text-muted">{subtitle}</small>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className=""
            // style={{ position: "absolute", right: "0", margin: "3px" }}
          >
            <button
              className="rounded-circle bg-opacity-25 shadow border-0 m-auto"
              style={{ padding: "4px", backgroundColor: "#FF0000" }}
            >
              <RiDeleteBin6Fill
                onClick={() => onClickDelete(slug)}
                // style={{ opacity: ".8" }}
                color="white"
                size={18}
                className="m-auto "
              />
            </button>
          </div>
          {/* <Badge color="light-primary" pill>
            Design
          </Badge> */}
        </div>
        <h5 className="apply-job-title fw-normal">{description}</h5>
        <div className="apply-job-package bg-light-primary rounded">
          <div>
            <h2 className="d-inline me-25 fw-normal">{date}</h2>
          </div>
          {/* <Button color="primary" className="opacity-50 round" size="sm">
            Edit
          </Button> */}
        </div>
        <div className="d-flex justify-content-between gap-1">
          <Button color="primary" onClick={onClickDetails}>
            Details
          </Button>
          <Button color="primary" onClick={onClickEdit}>
            Edit
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card4;
