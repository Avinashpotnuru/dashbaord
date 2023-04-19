// ** Custom Hooks
import { useRTL } from "@hooks/useRTL";

// ** Third Party Components
import wNumb from "wnumb";
import classnames from "classnames";
import { Star } from "react-feather";
import Nouislider from "nouislider-react";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  Row,
  Col,
  Input,
  Button,
  Label,
  Form,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/noui-slider/noui-slider.scss";
import {
  AsyncSelectInput,
  DateInput,
  OptionsInput,
  TextInput,
} from "./AllInputs";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Sidebar = (props) => {
  // ** Props
  const {
    sidebarOpen,
    handleReset,
    inputFields,
    setParams,
    params,
    filtersTitle,
    additionalParams,
  } = props;

  let defaultValues = {};

  inputFields?.forEach((i) => {
    defaultValues[i.fieldName] = "";
  });

  const { handleSubmit, reset, control } = useForm({
    defaultValues: defaultValues,
  });

  // if (inputFields) {
  //   inputFields.forEach((i) => {
  //     console.log("iEnd: ", i);
  //   });
  // }

  const onSubmit = (data) => {
    let objKeys = Object?.keys(data);
    let objValues = Object?.values(data);

    let formValues = [];
    let formKeysValues = {};

    objValues.forEach((e) => {
      if (typeof e === "object") {
        formValues.push(e?.value);
      } else {
        formValues.push(e);
      }
    });

    objKeys.forEach((e, index) => (formKeysValues[e] = formValues[index]));
    // console.log("formKeysValues:", formKeysValues);

    setParams({
      ...params,
      ...formKeysValues,
    });
  };

  const handleClearFilters = () => {
    reset();
    handleReset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="sidebar-detached sidebar-left "
    >
      <div className="sidebar ">
        <div
          className={classnames("sidebar-shop", {
            show: sidebarOpen,
          })}
        >
          {/* <Row>
            <Col sm="12">
              <h6 className="filter-heading d-none d-lg-block">Filters</h6>
            </Col>
          </Row> */}
          <Card className="col-11">
            <CardBody>
              <div className="multi-range-price">
                {/* <h6 className="filter-title mt-0">Multi Range</h6> */}
                {inputFields?.map((i) => {
                  // console.log("i: ", i);
                  return <ChooseInput key={i.id} control={control} {...i} />;
                })}
              </div>
              <div id="clear-filters">
                <Button
                  type="button"
                  color="primary"
                  className="mt-1"
                  block
                  onClick={() => {}}
                >
                  {filtersTitle} Filter
                </Button>
                <Button color="primary" className="mt-1" block type="submit">
                  Apply Filters
                </Button>
                <Button
                  color="danger"
                  className="mt-1"
                  block
                  type="reset"
                  onClick={handleClearFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Form>
  );
};

function ChooseInput(props) {
  switch (props.type) {
    case "text":
      return <TextInput {...props} />;

    case "options":
      return <OptionsInput {...props} />;

    case "select":
      return <AsyncSelectInput {...props} />;

    case "date":
      return <DateInput {...props} />;

    default:
      return null;
  }
}

export default Sidebar;
