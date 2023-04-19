import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Input, Label } from "reactstrap";

export default function Card37({ title }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="">
      <Card className="pb-5">
        <CardHeader>
          <Button color="primary" className="w-100">
            {title} Filter
          </Button>
        </CardHeader>
        <CardBody>
          <div className="">
            <Label className="me-1" for="search-input">
              Search
            </Label>
            <Input
              className=" "
              type="text"
              bsSize="sm"
              id="search-input"
              value={searchValue}
              onChange={handleSearch}
            />
          </div>

          <div className="d-flex gap-1 justify-content-between pt-1">
            <p>Sales Project</p>
            <div className="form-check form-switch">
              <Input
                type="switch"
                name="customSwitch"
                id="exampleCustomSwitch"
              />
            </div>
          </div>

          <div className="d-flex gap-1 justify-content-between">
            <p>Dev Project</p>
            <div className="form-check form-switch">
              <Input
                type="switch"
                name="customSwitch"
                id="exampleCustomSwitch"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
