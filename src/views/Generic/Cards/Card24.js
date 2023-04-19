// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from "reactstrap";

// ** Images
import medal from "@src/assets/images/illustration/badge.svg";

const Card24 = () => {
  return (
    <Card className="card-congratulations-medal">
      <CardBody>
        <h5>Congratulations 🎉 John!</h5>
        <CardText className="font-small-3">You have reached your Gold</CardText>
        <h3 className="mb-75 mt-2 pt-50">
          <a href="/" onClick={(e) => e.preventDefault()}>
            40 Leads
          </a>
        </h3>
        <Button color="primary">More</Button>
        <img className="congratulation-medal" src={medal} alt="Medal Pic" />
      </CardBody>
    </Card>
  );
};

export default Card24;
