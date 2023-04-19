import { Button, Card, Col, Row } from "reactstrap";
import { OptionsInput, TextInput } from "../../../../../Generic/AllInputs";
import { useForm, Controller } from "react-hook-form";

import Map from "../../../../../../assets/images/srkimages/map2.jpg";

const Locations = () => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Row>
      <Col className="col-12">
        <Card>
          <Col className="col-5 mx-2 ">
            <TextInput
              fieldName={"searchInput"}
              placeholder={"search here...."}
              control={control}
              errors={errors}
            />
          </Col>
          <div
            className="my-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateAreas: "1fr",
            }}
          >
            <div className="col-6 mx-2">
              <OptionsInput
                fieldTitle={"Project :"}
                fieldName={"project"}
                control={control}
                errors={errors}
              />
            </div>
            <div className="col-6 mx-2">
              <OptionsInput
                fieldTitle={"Location:"}
                fieldName={"Location"}
                placeholder={"select"}
                control={control}
                errors={errors}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center mt-2">
              <div className="">
                <Button.Ripple className="mx-2" color="info">
                  Search
                </Button.Ripple>
                <Button.Ripple color="primary" outline>
                  Clear Filter
                </Button.Ripple>
              </div>
            </div>
          </div>
          <Col className="col-12">
            <img
              style={{ height: "450px", objectFit: "cover" }}
              src={Map}
              alt="MAP"
              className="col-12"
            />
          </Col>
        </Card>
      </Col>
    </Row>
  );
};

export default Locations;
