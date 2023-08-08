import { Section, Spinner, MovieList } from 'components';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/Api';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovies()
      .then(setTopMovies)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Section title="Trending today">
        {loading && <Spinner />}
        {!!topMovies.length && <MovieList movies={topMovies} />}
      </Section>
    </>
  );
};
export default Home;
