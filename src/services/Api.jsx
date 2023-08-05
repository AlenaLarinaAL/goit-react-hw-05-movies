import axios from 'axios';
const KEY = 'api_key=c3793195ea37d214b6f2316d08c8f51f';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/movie/day?${KEY}`);

    const MovieList = response.data.results.map(
      ({ id, title, poster_path }) => {
        if (title.length > 25) {
          title = title.slice(0, 20) + '...';
        }
        return { id, title, poster_path };
      }
    );

    return MovieList;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?${KEY}`);

    const { title, poster_path, vote_average, genres, overview } =
      response.data;
    const src = poster_path
      ? `https://image.tmdb.org/t/p/w200/${poster_path}`
      : 'https://cdn.boxofficebuz.com/no_poster_available.svg';
    const votes = parseInt(vote_average * 10);
    const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);

    return { votes, genresList, title, src, overview };
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByName = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${query}&${KEY}`
    );

    const movieList = response.data.results.map(
      ({ id, title, poster_path }) => {
        if (title.length > 25) {
          title = title.slice(0, 20) + '...';
        }
        return { id, title, poster_path };
      }
    );

    return movieList;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?${KEY}`
    );

    const castList = response.data.cast.map(
      ({ id, profile_path, name, character }) => {
        const src = profile_path
          ? `https://image.tmdb.org/t/p/w200/${profile_path}`
          : 'https://cdn.boxofficebuz.com/no_poster_available.svg';
        if (character.length > 25) {
          character = character.slice(0, 20) + '...';
        }
        return { id, src, name, character };
      }
    );
    return castList;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?${KEY}`
    );

    const reviews = response.data.results.map(({ id, content, author }) => {
      return { id, content, author };
    });
    return reviews;
  } catch (error) {
    console.log(error);
  }
};
