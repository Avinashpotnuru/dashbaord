// ** Third Party Components
import classnames from "classnames";
import { TrendingUp, User, Box, DollarSign } from "react-feather";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";

const UsersCard = ({ cols }) => {
  const data = [
    {
      title: "500",
      subtitle: "Technicians",
      color: "light-primary",
      icon: <User size={24} />,
    },
    {
      title: "250",
      subtitle: "CuTechnicians at(work)stomers",
      color: "light-info",
      icon: <User size={24} />,
    },
    {
      title: "270",
      subtitle: "ProductsTechnicians (Non - Working)",
      color: "light-danger",
      icon: <Box size={24} />,
    },
    {
      title: "4",
      subtitle: "RevTechnicians on (leave)enue",
      color: "light-success",
      icon: <DollarSign size={24} />,
    },
  ];

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1,
          })}
        >
          <div className="d-flex align-items-center">
            <Avatar color={item.color} icon={item.icon} className="me-2" />
            <div className="my-auto">
              <h4 className="fw-bolder mb-0">{item.title}</h4>
              <CardText className="font-small-3 mb-0">{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <Card className="card-statistics">
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  );
};

export default UsersCard;