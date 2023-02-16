import axios from "axios";
import { useQuery } from "react-query";
import styled from "styled-components";
import getRating, { RatingTypes } from "../../utils/rating";
import Ratings from "./components/rating";

type MoviesData = {
  data: { Title: string; Poster: string; Ratings: RatingTypes[] }[];
};

const Movies = () => {
  const { data: response } = useQuery<MoviesData>(
    "movies",
    async () => {
      return await axios.get("http://localhost:3000/movies.json");
    },
    { refetchOnWindowFocus: false }
  );

  if (!response) return null;

  return (
    <MoviesContainer>
      {response.data.map((movie, index) => (
        <div key={index}>
          <MoviesImage src={movie.Poster} alt="" />
          <MoviesTitle>{movie.Title}</MoviesTitle>
          <MoviesRating>
            Rating: <Ratings rating={getRating(movie.Ratings)} />
          </MoviesRating>
        </div>
      ))}
    </MoviesContainer>
  );
};

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
`;

const MoviesImage = styled.img`
  width: 100%;
  height: auto;
`;

const MoviesTitle = styled.p``;

const MoviesRating = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export default Movies;
