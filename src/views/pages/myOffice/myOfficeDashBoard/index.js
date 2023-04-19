import { Award } from "react-feather";

import Avatar from "@components/avatar";

import { Editor } from "react-draft-wysiwyg";

import "@styles/react/libs/editor/editor.scss";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Card,
  CardBody,
  CardText,
  Button,
  CardImg,
  CardTitle,
  CardHeader,
} from "reactstrap";

import { Row, Col } from "reactstrap";

import decorationLeft from "@src/assets/images/elements/decore-left.png";

import decorationRight from "@src/assets/images/elements/decore-right.png";

import OrdersReceived from "@src/views/ui-elements/cards/statistics/OrdersReceived";

import SubscribersGained from "@src/views/ui-elements/cards/statistics/SubscribersGained";

import AvgSessions from "@src/views/ui-elements/cards/analytics/AvgSessions";

import SupportTracker from "@src/views/ui-elements/cards/analytics/SupportTracker";

import { kFormatter } from "@utils";

import { ThemeColors } from "@src/utility/context/ThemeColors";

import StatsWithAreaChart from "@components/widgets/stats/StatsWithAreaChart";

import { useContext, useState } from "react";

import Swal from "sweetalert2";

import Timeline from "@components/timeline";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

import img1 from "@src/assets/images/slider/04.jpg";

const MyOffice = () => {
  const [canvasOpen, setCanvasOpen] = useState(false);

  const [canvasScroll, setCanvasScroll] = useState(false);

  const [canvasBackdrop, setCanvasBackdrop] = useState(true);

  const { colors } = useContext(ThemeColors);

  const handleBasicTitleAlert = () => {
    return MySwal.fire({
      title: "Any fool can use a computer",
      customClass: {
        confirmButton: "btn btn-primary",
      },
      buttonsStyling: false,
    });
  };

  const handleSuccess = () => {
    return MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      customClass: {
        confirmButton: "btn btn-primary",
      },
      buttonsStyling: false,
    });
  };

  const toggleCanvasScroll = () => {
    setCanvasScroll(true);
    setCanvasOpen(!canvasOpen);
  };

  return (
    <>
      <Row className="match-height mb-4">
        <Col md="4" lg="4" sm="6" xs="12">
          <Button color="primary mb-2" onClick={handleBasicTitleAlert} outline>
            Basic
          </Button>
        </Col>

        <Col md="4" lg="4" sm="6" xs="12">
          <Button color="success  mb-2" onClick={handleSuccess} outline>
            Success
          </Button>
        </Col>

        <Col md="4" lg="4" sm="6" xs="12">
          <Button color="primary  mb-2" onClick={toggleCanvasScroll}>
            Enable Body Scrolling
          </Button>
        </Col>
      </Row>

      <Row className="match-height">
        <Col md="6" lg="6" sm="12">
          <Card className="card-congratulations">
            <CardBody className="text-center">
              <img
                className="congratulations-img-left"
                src={decorationLeft}
                alt="decor-left"
              />
              <img
                className="congratulations-img-right"
                src={decorationRight}
                alt="decor-right"
              />
              <Avatar
                icon={<Award size={28} />}
                className="shadow"
                color="primary"
                size="xl"
              />
              <div className="text-center">
                <h1 className="mb-1 text-white">Congratulations John,</h1>
                <CardText className="m-auto w-75">
                  You have done <strong>57.6%</strong> more sales today. Check
                  your new badge in your profile.
                </CardText>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="6" sm="6" md="6">
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        {/* <Col lg="3" sm="6">
          <OrdersReceived kFormatter={kFormatter} />
        </Col> */}
      </Row>

      <Row className="match-height">
        {/* <Col lg="6" xs="12">
          <AvgSessions primary={colors.primary.main} />
        </Col> */}
        <Col lg="6" sm="6" xs="12" md="12">
          <Card>
            <CardImg top src={img1} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Card Title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button color="primary" outline>
                Go Somewhere
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xs="12">
          <SupportTracker
            primary={colors.primary.main}
            danger={colors.danger.main}
          />
        </Col>
      </Row>

      <Row className="match-height">
        <Col lg="3" sm="6" xs="12">
          {/* <div className="bg-danger">h111</div> */}
        </Col>

        <Offcanvas
          scrollable={canvasScroll}
          backdrop={canvasBackdrop}
          direction="end"
          isOpen={canvasOpen}
          toggle={toggleCanvasScroll}
        >
          <OffcanvasHeader toggle={toggleCanvasScroll}>
            OffCanvas {canvasScroll ? "Scroll" : "Backdrop"}
          </OffcanvasHeader>
          <OffcanvasBody className="my-auto mx-0 flex-grow-0">
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p className="text-center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <Button
              block
              color="primary"
              onClick={toggleCanvasScroll}
              className="mb-1"
            >
              Continue
            </Button>
            <Button
              block
              outline
              color="secondary"
              onClick={toggleCanvasScroll}
            >
              Cancel
            </Button>
          </OffcanvasBody>
        </Offcanvas>
      </Row>

      <Row className="match-height">
        <Col sm={12}>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Uncontrolled Editor</CardTitle>
            </CardHeader>
            <CardBody>
              <Editor />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MyOffice;
