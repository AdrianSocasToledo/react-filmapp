export default function getFilm(title) {
  const url = `http://www.omdbapi.com/?apikey=a5e4900e&t=${title}`;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => response);
}
