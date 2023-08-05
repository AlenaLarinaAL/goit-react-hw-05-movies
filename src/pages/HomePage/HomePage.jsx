import { Section, Spinner, MovieList } from 'components';

import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/Api';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoadind, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetchMovies()
      .then(setTopMovies)
      .catch(console.log)
      .finally(setIsloading(false));
  }, []);

  return (
    <>
      <Section title="Trending today">
        {isLoadind && <Spinner />}
        {topMovies.length && <MovieList movies={topMovies} />}
      </Section>
    </>
  );
};
export default Home;
