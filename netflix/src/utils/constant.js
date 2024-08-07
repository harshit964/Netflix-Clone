export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2I5ZGUwNThiNWMwZWVjZjM4MTRiMTdlNzAzODkxNCIsInN1YiI6IjY2NzMwMWMzNTc5NzU1NzRhNDU1YTkzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbBaR6ontlZLmRiIxsTrUUda9jKW1zB4IndVPcWLfkw'
    }
  };

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";