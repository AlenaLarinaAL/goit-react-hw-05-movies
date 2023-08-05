import { Movie, Section, Spinner } from 'components';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovie } from 'services/Api';
import { LinkStyled, LinkItem, List } from './MovieDetailsPage.styled';

import { BiArrowBack } from 'react-icons/bi';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    fetchMovie(Number(movieId))
      .then(setMovieData)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Section>
        {loading && <Spinner />}
        <LinkStyled to={backLinkHref}>
          <BiArrowBack size={25} />
        </LinkStyled>
        {movieData && <Movie movieData={movieData} />}
      </Section>
      <Section title="Additional information">
        <List>
          <li>
            <LinkItem to="cast">Cast</LinkItem>
          </li>
          <li>
            <LinkItem to="reviews">Reviews</LinkItem>
          </li>
        </List>
        <Outlet />
      </Section>
    </>
  );
};

export default MovieDetailsPage;
