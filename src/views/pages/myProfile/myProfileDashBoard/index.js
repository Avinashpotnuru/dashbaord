import React from "react";
import { Card, CardBody, CardText } from "reactstrap";
import { Row, Col } from "reactstrap";
import img1 from "@src/assets/images/slider/01.jpg";
import img2 from "@src/assets/images/slider/05.jpg";
import img3 from "@src/assets/images/slider/03.jpg";
import img4 from "../../../../../src/assets/images/banner/banner-10.jpg";
import img5 from "../../../../../src/assets/images/banner/banner-12.jpg";
import img6 from "../../../../../src/assets/images/banner/banner-25.jpg";
const MyProfile = () => {
  return (
    <>
      <Row className="match-height">
        <Col md="6" lg="6" sm="12" xs="12">
          <div className="card">
            <img className="card-img-top" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="6" lg="6" sm="12">
          <div className="card">
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="match-height">
        <Col md="8" lg="8" sm="12">
          <div className="card">
            <img className="card-img-top" src={img3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col
          md="4"
          lg="4"
          sm="12"
          className="d-flex justify-content-center align-items-center bg-danger"
        >
          <div className="card d-flex justify-content-center align-items-center">
            <div>
              <img className="card-img-top" src={img4} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="match-height">
        <Col md="6" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="6" lg="6" sm="4" xs="12">
          <div className="card ">
            <div>
              <img className="card-img-top" src={img6} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md="12" lg="12" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img5} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="match-height">
        <Col md="4" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="4" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="4" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="4" lg="6" sm="12" xs="12">
          <div className="card">
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="match-height">
        <Col md="4" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="4" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="4" lg="6" sm="4" xs="12">
          <div className="card">
            <img className="card-img-top" src={img3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
        <Col md="4" lg="6" sm="12" xs="12">
          <div className="card">
            <img className="card-img-top" src={img1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MyProfile;
