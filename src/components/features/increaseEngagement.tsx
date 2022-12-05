import FeatureFormat from "./featureFormat";
import Bill from "../../assets/bill.png";

const IncreaseEngagement = () => {
  return (
    <FeatureFormat
      heading="Increase Engagement"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image={Bill}
      flip={false}
    />
  );
};

export default IncreaseEngagement;
