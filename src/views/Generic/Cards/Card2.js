// ** Icons Imports
// ** Custom Components
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

const Card2 = ({ icon, title, stat, iconColor }) => {
  return (
    <StatsHorizontal
      color={iconColor ? iconColor : "primary"}
      statTitle={title ? title : ""}
      icon={icon}
      renderStats={<h3 className="fw-bolder mb-75">{stat ? stat : 0}</h3>}
    />
  );
};

export default Card2;
