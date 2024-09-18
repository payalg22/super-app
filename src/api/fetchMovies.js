import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const fetchNews = async (genreId) => {
  const options = {
    params: {
      api_key: API_KEY,
      include_adult: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
      with_genres: genreId,
    },
  };
  try {
    const { data } = await axios.get(BASE_URL, options);
    const filteredMovies = data.results.filter(
      (movie) => movie.poster_path !== null
    );
    return filteredMovies;
  } catch (error) {
    console.error(error);
  }
};

export default fetchNews;
