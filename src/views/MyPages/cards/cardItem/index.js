import { Col, Row, Card, CardBody } from "reactstrap";

import {
  useGetProductDataQuery,
  useGetImagesFromBackendQuery,
} from "../../../../redux/api/restApis";

const CardItem = (props) => {
  //   const { id, description, name, price } = productData;

  const { data: productData } = useGetProductDataQuery();
  // console.log("data", productData);

  const { data: imagesData } = useGetImagesFromBackendQuery();

  return (
    <Row className="col-12 match-height ">
      {imagesData?.map((item) => (
        <Col className="col-12 col-sm-6  ">
          <Card
            style={{
              boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
            }}
          >
            <CardBody>
              <div
                key={item?.id}
                className="d-flex justify-content-center align-content-center"
              >
                <h1
                  style={{
                    textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
                  }}
                  className="text-center"
                >
                  {item?.title}
                </h1>
                <img src={item?.thumbnailUrl} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardItem;
