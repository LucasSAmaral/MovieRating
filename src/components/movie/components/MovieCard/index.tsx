import styled from "styled-components";
import getRating, { RatingTypes } from "../../../../utils/rating";
import Ratings from "../Ratings";

type MovieCardProps = {
  Title: string;
  Poster: string;
  Ratings: RatingTypes[];
};

const MovieCard: React.FC<MovieCardProps> = ({
  Poster,
  Title,
  Ratings: MovieRating,
}) => {
  return (
    <MovieWrapper>
      <MovieImage src={Poster} alt="" />
      <MovieTitle>{Title}</MovieTitle>
      <MovieRatingParagraph>
        Rating: <Ratings rating={getRating(MovieRating)} />
      </MovieRatingParagraph>
    </MovieWrapper>
  );
};

const MovieWrapper = styled.div``;

const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

const MovieTitle = styled.p``;

const MovieRatingParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export default MovieCard;
