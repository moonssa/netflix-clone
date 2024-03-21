const API_KEY = "04dae25506758e36ebc87980c9e35cc2";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  id: number;
  backdrop_path: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}
export interface IGetMovieResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
