import { useLocation } from 'react-router-dom';
import { List, LinkStyled, Title } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                  : 'https://cdn.boxofficebuz.com/no_poster_available.svg'
              }
              alt={title}
            />

            <div>
              <Title>{title}</Title>
            </div>
          </LinkStyled>
        </li>
      ))}
    </List>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
