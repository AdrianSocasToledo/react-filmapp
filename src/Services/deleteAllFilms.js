export default async function deleteAllFilms(email) {
  const request = {
    email: email,
  };
  const url = "http://localhost:3000/api/deleteAllFilms";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}
