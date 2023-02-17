import { StarBorderIcon, StarIcon } from "../../../icons";

const ZeroStarIcons = Array(5).fill(<StarBorderIcon />);
const FiveStarsIcons = Array(5).fill(<StarIcon />);
const OneStarIcons = [...FiveStarsIcons].fill(<StarBorderIcon />, 1);
const TwoStarsIcons = [...FiveStarsIcons].fill(<StarBorderIcon />, 2);
const ThreeStarsIcons = [...FiveStarsIcons].fill(<StarBorderIcon />, 3);
const FourStarsIcons = [...FiveStarsIcons].fill(<StarBorderIcon />, 4);

const Ratings: React.FC<{ rating: number }> = ({ rating }) => {
  switch (rating) {
    case 0:
      return <div data-cy="zero-star">{ZeroStarIcons}</div>;
    case 1:
      return <div data-cy="one-star">{OneStarIcons}</div>;
    case 2:
      return <div data-cy="two-stars">{TwoStarsIcons}</div>;
    case 3:
      return <div data-cy="three-stars">{ThreeStarsIcons}</div>;
    case 4:
      return <div data-cy="four-stars">{FourStarsIcons}</div>;
    case 5:
    default:
      return <div data-cy="five-stars">{FiveStarsIcons}</div>;
  }
};

export default Ratings;
