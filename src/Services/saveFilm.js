export default async function saveFilm(film, email) {
  const request = {
    email: email,
    film: film,
  };
  const url = "https://filmapp-server.herokuapp.com/api/saveFilm";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}
