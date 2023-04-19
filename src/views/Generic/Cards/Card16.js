import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { MdDelete } from "react-icons/md";
import { useDeleteImageMutation } from "../../../redux/apis/restApi";

// ** Images
import illustration from "@src/assets/images/illustration/email.svg";
import { Delete } from "react-feather";
import { toast } from "react-toastify";

export default function Card16({ images, onClick }) {
  const [deleteImage] = useDeleteImageMutation();

  const onClickDelete = (slug) => {
    if (window.confirm("Are you sure, You want to delete this image?")) {
      deleteImage({ slug: slug, data: { dummy: "dummy" } }).then((res) => {
        if (res.data) {
          toast.success("Image deleted successfully");
        }
        if (res.error) {
          toast.error(JSON.stringify(res.error));
        }
      });
    }
  };
  return (
    <div className="border-1 border-light justify-content-center d-flex flex-column">
      <Card>
        <CardHeader>
          <CardTitle>Images</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="d-flex gap-1 overflow-auto ">
            <div
              onClick={onClick}
              className="d-flex flex-column align-content-center border py-3 px-2 rounded"
            >
              <img
                className="mx-auto"
                height="80"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLr6-a47faHl1Gln40Nk4GfylbO4-WKRXJgHKjYq3sverk2eRU5m4wMMRpVl8fUqDrg8&usqp=CAU"
                alt=""
                width="90"
                // style={{ width: "100px" }}
              />
              <div className="mx-auto text-wrap">
                + Add New Image
                {/* <p className="px-1"> Image</p> */}
              </div>
            </div>

            {images &&
              images?.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="bg-light-primary rounded-top meetup-img-wrapper  "
                    style={{ position: "relative" }}
                  >
                    <img
                      style={{ objectFit: "cover" }}
                      src={i?.image}
                      height="210"
                      width="180"
                      className="rounded-top"
                    />
                    <div
                      className="rounded-circle bg-white bg-opacity-50"
                      style={{
                        position: "absolute",
                        bottom: 3,
                        right: 3,
                        padding: "8px",
                      }}
                    >
                      <MdDelete
                        onClick={() => onClickDelete(i?.slug)}
                        size={28}
                        color="red"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </CardBody>
      </Card>

      {/* <div className="border-light-dark border-1 border rounded px-1 py-2 bg-white my-1">
        <h4 className="my-auto"> Service Agreement Details</h4>
      </div> */}
    </div>
  );
}
