import actionPoster from '../assets/action.png';
import dramaPoster from '../assets/drama.png';
import romancePoster from '../assets/romance.png';
import thrillerPoster from '../assets/thriller.png';
import westernPoster from '../assets/western.png';
import horrorPoster from '../assets/horror.png';
import fantasyPoster from '../assets/fantasy.png';
import musicPoster from '../assets/music.png';
import fictionPoster from '../assets/fiction.png';

const defaultGenres = [
  {
    movie: "Action",
    theme: "hsla(18, 100%, 52%, 1)",
    poster: actionPoster,
  },
  {
    movie: "Drama",
    theme: "hsla(274, 100%, 82%, 1)",
    poster: dramaPoster,
  },
  {
    movie: "Romance",
    theme: "hsla(114, 89%, 29%, 1)",
    poster: romancePoster,
  },
  {
    movie: "Thriller",
    theme: "hsla(210, 100%, 76%, 1)",
    poster: thrillerPoster,
  },
  {
    movie: "Western",
    theme: "hsla(15, 100%, 28%, 1)",
    poster: westernPoster,
  },
  {
    movie: "Horror",
    theme: "hsla(250, 100%, 67%, 1)",
    poster: horrorPoster,
  },
  {
    movie: "Fantasy",
    theme: "hsla(311, 100%, 64%, 1)",
    poster: fantasyPoster,
  },
  {
    movie: "Music",
    theme: "hsla(354, 80%, 51%, 1)",
    poster: musicPoster,
  },
  {
    movie: "Fiction",
    theme: "hsla(114, 54%, 60%, 1)",
    poster: fictionPoster,
  },
];

export default defaultGenres;
