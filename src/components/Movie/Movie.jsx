import {
  MovieContainer,
  Image,
  Title,
  Span,
  SubTitle,
  List,
  Text,
} from './Movie.styled';
import PropTypes from 'prop-types';

export const Movie = ({ movieData }) => {
  return (
    <>
      <MovieContainer>
        <div>
          <Image src={movieData.src} alt={movieData.title} />
        </div>

        <div>
          <Title>{movieData.title}</Title>
          <div>
            <Text>
              User Score:
              <Span>{movieData.votes}%</Span>
            </Text>
            <SubTitle>Overview</SubTitle>
            <Text>{movieData.overview}</Text>
            <SubTitle>Genres</SubTitle>
            <List>{movieData.genresList}</List>
          </div>
        </div>
      </MovieContainer>
    </>
  );
};

Movie.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genresList: PropTypes.array.isRequired,
  }).isRequired,
};
