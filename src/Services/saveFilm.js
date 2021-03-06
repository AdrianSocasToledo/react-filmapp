export default async function saveFilm(film, email) {
  const request = {
    email: email,
    film: film,
  };
  const url = "http://localhost:3000/api/saveFilm";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}
