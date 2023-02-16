import { StarBorderIcon, StarIcon } from "../../../icons";

const ZeroStarIcons = Array(5).fill(<StarBorderIcon />);
const FiveStarIcons = Array(5).fill(<StarIcon />);
const OneStarIcons = [...FiveStarIcons].fill(<StarBorderIcon />, 1);
const TwoStarIcons = [...FiveStarIcons].fill(<StarBorderIcon />, 2);
const ThreeStarIcons = [...FiveStarIcons].fill(<StarBorderIcon />, 3);
const FourStarIcons = [...FiveStarIcons].fill(<StarBorderIcon />, 4);

const Ratings: React.FC<{ rating: number }> = ({ rating }) => {
  switch (rating) {
    case 0:
      return <>{ZeroStarIcons}</>;
    case 1:
      return <>{OneStarIcons}</>;
    case 2:
      return <>{TwoStarIcons}</>;
    case 3:
      return <>{ThreeStarIcons}</>;
    case 4:
      return <>{FourStarIcons}</>;
    case 5:
    default:
      return <>{FiveStarIcons}</>;
  }
};

export default Ratings;
