import axios from "axios";
import { useQuery } from "react-query";
import styled from "styled-components";
import { RatingTypes } from "../../utils/rating";
import MovieCard from "./components/MovieCard";

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
        <MovieCard key={index} {...movie} />
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

export default Movies;
