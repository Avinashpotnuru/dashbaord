import { Button } from "reactstrap";

import Rating from "react-rating";
import { Star } from "react-feather";

import React from "react";

import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardImgOverlay,
  CardText,
  Row,
  Col,
} from "reactstrap";

const mediaData = [
  { id: 1, tittle: "UI / UX" },
  { id: 2, tittle: "Front End Development" },
  { id: 3, tittle: "HTML" },
  { id: 4, tittle: "CSS" },
  { id: 5, tittle: "JavaScript" },
  { id: 6, tittle: "React" },
  { id: 7, tittle: "Node" },
];

import img1 from "@src/assets/images/slider/06.jpg";

import img2 from "../../../../assets/images/elements/apple-watch.png";

import img3 from "../../../../assets/images/elements/ipad-pro.png";

const myOfficeSection2 = () => {
  return (
    <>
      <Row className="match-height">
        {/* <Col xl="6" md="6" sm="6">
          <Card className="mb-3">
            <CardImg top src={img1} alt="card-top" />
            <CardBody>
              <CardTitle tag="h4">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xl="6" md="6" sm="6">
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h4">Card title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg top src={img2} alt="card-bottom" />
          </Card>
        </Col>
        <Col xl="6" md="6" sm="12">
          <Row className="match-height">
            <Col xs="12" sm="6" md="6">
              <Card className="mb-3">
                <CardImg top src={img1} alt="card-top" />
                <CardBody>
                  <CardTitle tag="h4">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="6">
              <Card className="mb-3">
                <CardImg top src={img1} alt="card-top" />
                <CardBody>
                  <CardTitle tag="h4">Card title</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col> */}
      </Row>

      <h1 className="my-5">Profile Block</h1>

      <Row className="match-height">
        <Col sm="12" md="6" lg="6">
          <Card>
            <div className="d-flex flex-column  align-items-center flex-sm-row ">
              <img
                top
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt="Card cap"
              />
              <div className=" mx-auto  text-center my-2 d-flex flex-column justify-content-center align-items-center">
                <h1>Person Name</h1>
                <p>Role Name</p>
                <p>company Name</p>
                <button
                  className="p-1"
                  style={{
                    backgroundImage:
                      "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  contact
                </button>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="6">
          <Card>
            <div className="d-flex flex-column  align-items-center flex-sm-row ">
              <img
                top
                // className="w-100"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  margin: "5px",
                }}
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Card cap"
              />
              <div className=" mx-auto  text-center my-2 d-flex flex-column justify-content-center align-items-center">
                <h1>Person Name</h1>
                <p>Role Name</p>
                <p>company Name</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="match-height">
        {/* background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%); */}
        {/* background-image: linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% ); */}

        <Col sm="12" md="6">
          <Card
            className="flex p-3 "
            style={{
              backgroundImage:
                "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )",
            }}
          >
            <div className=" text-dark d-flex flex-column justify-content-center align-items-center">
              <img
                style={{ padding: "5px", borderWidth: "10px" }}
                className="rounded-circle my-4 border-4 border-danger
                 "
                src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                alt="user"
              />
              <h3 className="font-weight-bold ">Ricky Park</h3>
              <h6 className="font-weight-bold">New York</h6>
              <p className="font-weight-bold">
                User interface designer and <br /> front-end developer
              </p>
              <div className="my-2">
                <Button.Ripple className="mx-1" color="info">
                  Message
                </Button.Ripple>

                <Button.Ripple color="dark" outline style={{ color: "black" }}>
                  Following
                </Button.Ripple>
              </div>
              <div className="d-flex flex-column">
                <h6 className="text-center" style={{ fontWeight: "900" }}>
                  Skills
                </h6>
                <ul
                  className=" w-100 "
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {/* <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li> */}
                  {mediaData.map((item) => (
                    <Button.Ripple
                      style={{ margin: "5px" }}
                      color="dark"
                      outline
                    >
                      {item?.tittle}
                    </Button.Ripple>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <h1 className="my-5">Products Block</h1>
      <Row className="match-height">
        <Col sm="12" md="7">
          <Card
            style={{
              backgroundImage: "linear-gradient(to left,#F521C9, #00FFF1)",
            }}
          >
            <div className="d-flex flex-column justify-content-around align-items-center flex-sm-row">
              <img
                className="m-2"
                src={img2}
                alt="Denim Jeans"
                style={{ height: "200px", width: "200px" }}
              />
              <div className="text-light">
                <h1 className="text-light">Apple Watch</h1>
                <p>$39.99</p>
                <p>3 items left....</p>
                <p>
                  <Button.Ripple color="primary">Add Cart</Button.Ripple>
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="12" md="5">
          <Card
            style={{
              backgroundImage: "linear-gradient(to left,#21F5F1, #9D00FF)",
            }}
          >
            <div className="d-flex flex-column justify-content-around align-items-center flex-sm-row">
              <img
                className="m-2"
                src={img3}
                alt="Denim Jeans"
                style={{ height: "200px", width: "200px" }}
              />
              <div className="text-light">
                <h1 className="text-light">Apple Tab</h1>
                <p>$49.99</p>
                <p>only 10 items left....</p>
                <p>
                  <Button.Ripple color="primary">Add Cart</Button.Ripple>
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card
            style={
              {
                // boxShadow:
                //   "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px",
                // marginLeft: "10px",
              }
            }
          >
            <div className="p-2">
              <div className="m-2">
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>

              <h1
                className="text-center  my-1"
                style={{ textShadow: "2px 2px 8px green" }}
              >
                Audi A9
              </h1>
              <div>
                <h5>
                  Audi A9 is a full-size luxury crossover SUV coupé made by Audi
                  that was launched in 2023.
                </h5>
                <h6 className="text-center my-1">$69,400</h6>
              </div>

              <Button.Ripple
                block
                outline
                style={{
                  backgroundImage: "linear-gradient(to left,#21F5F1, #9D00FF)",
                  color: "white",
                }}
              >
                Purchase
              </Button.Ripple>
            </div>
          </Card>
        </Col>
        <Col sm="12" md="4">
          <Card
            style={{
              boxShadow:
                "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
            }}
          >
            <div style={{}}>
              <div>
                <div className="m-2">
                  <img
                    src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "top",
                    }}
                  />
                  <div className="m-3">
                    <h2>Is Apple a Design Company?</h2>
                    <p>
                      Apple is more than a tech company; it became a culture
                      unto itself, a passion of most of people and the
                      birthplace of the world’s most revolutionized products.
                    </p>
                  </div>

                  <div className="text-center my-2">
                    <Button color="relief-success">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Row className="match-height">
          <Col sm="12" md="12">
            <Card style={{ backgroundColor: "#d6f2fc" }}>
              <div className="d-flex flex-column text-center justify-content-center align-items-center flex-sm-row m-3 ">
                <div className="m-4">
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                      padding: "5px",
                      borderColor: "black",
                      borderStyle: "solid",
                    }}
                    className="rounded-circle"
                    src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </div>
                <div>
                  <div>
                    <h2 style={{ fontWeight: "bold" }}>Bradley Steve</h2>
                    <h4 style={{ fontWeight: "bold" }}>@bradsteve</h4>
                  </div>
                  <p>
                    I'm a Front End Developer, follow me to be the first who see
                    my new work.
                  </p>
                  <ul
                    className="d-flex  justify-content-around align-items-center"
                    style={{ listStyleType: "none", fontWeight: "bolder" }}
                  >
                    <li style={{ fontWeight: "bold" }}>
                      <h3 style={{ fontWeight: "bold" }}>15K</h3>
                      <h4>Views</h4>
                    </li>
                    <li>
                      <h3 style={{ fontWeight: "bold" }}>82</h3>
                      <h4>Projects</h4>
                    </li>
                    <li>
                      <h3 style={{ fontWeight: "bold" }}>1.3M</h3>
                      <h4>Followers</h4>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-around">
                    <Button.Ripple color="dark" outline>
                      Follow
                    </Button.Ripple>

                    <Button color="relief-dark">View profile</Button>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="match-height">
          <Col sm="12" md="12" lg="12">
            <Card
              className="d-flex flex-column justify-content-center align-items-center"
              style={{
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                objectFit: "contain",
              }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center py-3 flex-md-row ">
                <div className="mx-1">
                  <img
                    style={{
                      width: "250px",
                      height: "300px",
                      // margin: "10px",
                      objectFit: "contain",
                    }}
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                  />
                  <a href="#!">
                    <div className="">
                      <div className=""></div>
                    </div>
                  </a>
                </div>

                <div className="p-2">
                  <h5
                    style={{ fontWeight: "bold", marginRight: "15px" }}
                    className="my-1"
                  >
                    Quant trident shirts
                  </h5>
                  <div className="d-flex flex-row  my-1 align-items-center ">
                    <div className=" ">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <span className="mx-1">310</span>
                  </div>
                  <div className="">
                    <span style={{ fontWeight: "bold" }}>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span style={{ fontWeight: "bold" }}>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span style={{ fontWeight: "bold" }}>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small ">
                    <span style={{ fontWeight: "bold" }}>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span style={{ fontWeight: "bold" }}>For men</span>
                    <span className="text-primary"> • </span>
                    <span style={{ fontWeight: "bold" }}>
                      Casual
                      <br />
                    </span>
                  </div>
                  <p className="">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="text-center">
                  <div className=" d-flex justify-content-center text-center align-items-center ">
                    <h4 className="mb-1 me-1">$13.99</h4>

                    <p style={{ textDecoration: "line-through" }}>$20.99</p>
                  </div>
                  <h6 className="text-success my-1">Free shipping</h6>
                  <div className="d-flex flex-column w-100 p-2  mx-2  px-4">
                    <Button.Ripple className="my-1" color="primary">
                      Details
                    </Button.Ripple>
                    <Button.Ripple block outline color="primary">
                      Add to wishlist
                    </Button.Ripple>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default myOfficeSection2;
