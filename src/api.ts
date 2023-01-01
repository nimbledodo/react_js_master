const API_KEY = "9b1b43eac7934b74bcba95c2111b5f5c";
const BASE_PATH = "https://api.themoviedb.org";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
