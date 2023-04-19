import { Button, Card, CardHeader } from "reactstrap";

const Card3 = ({ title, showButton, icon, buttonName, buttonClick }) => {
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between gap-1">
        <h1>{title}</h1>
        {showButton && (
          <Button className="" color={"success"} onClick={buttonClick}>
            {icon}
            <span className="align-middle ms-25">{buttonName}</span>
          </Button>
        )}
      </CardHeader>
    </Card>
  );
};

export default Card3;
