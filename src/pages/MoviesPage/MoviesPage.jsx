import { Section, Spinner, MovieList } from 'components';
import Form from 'components/Form/Form';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/Api';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query');

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    fetchMovieByName(query)
      .then(setMovies)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [query]);

  const updateSearchQuery = query => {
    setSearchQuery(query);
  };

  return (
    <>
      <Section>
        <Form updateSearchQuery={updateSearchQuery} />
        {loading && <Spinner />}
        {query && <MovieList movies={movies} />}
      </Section>
    </>
  );
};
export default MoviesPage;
