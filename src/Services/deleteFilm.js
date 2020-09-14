export default async function deleteFilm(index, email) {
  const request = {
    email: email,
    index: index,
  };
  const url = "http://localhost:3000/api/deleteFilm";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}
