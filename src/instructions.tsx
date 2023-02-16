import { StarIcon, StarBorderIcon } from "./components/icons";
import "./instructions.css";

const Instructions = () => {
  return (
    <div className="Instructions-Container">
      <div>Build a page that will do the following:</div>

      <div>Make an api call to the API: http://localhost:3000/movies.json </div>

      <div>
        Make a grid of the movie cards so that≈ it shows a single column on
        mobile and flows responsively upto a maximum of 6 with a max width of
        1400px
      </div>
      <img src="/card-image.png" alt="Sample card" />
      <div>
        Show 5 rating stars for the rate: filled and unfilled. <StarIcon />{" "}
        <StarBorderIcon />
      </div>
      <div>
        You can install and use any 3rd party packages, material-ui is already
        installed
      </div>
      <div>You can use search engines to find the answers you may need</div>
      <div>Write tests for any components and pages you create.</div>
    </div>
  );
};

export default Instructions;
