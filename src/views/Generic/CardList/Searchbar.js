// ** Icons Imports
import { Search } from "react-feather";

// ** Reactstrap Imports
import { Row, Col, InputGroup, Input, InputGroupText } from "reactstrap";

import { Controller } from "react-hook-form";

const Searchbar = (props) => {
  // ** Props
  const { control } = props;

  return (
    <div id="ecommerce-searchbar" className="ecommerce-searchbar">
      <Row className="mt-1">
        <Col sm="12">
          <InputGroup className="input-group-merge">
            <Controller
              name="search"
              control={control}
              // rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  className="search-product"
                  placeholder="Search Product"
                  // invalid={errors.search && true}
                />
              )}
            />
            <InputGroupText>
              <Search className="text-muted" size={14} />
            </InputGroupText>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Searchbar;
