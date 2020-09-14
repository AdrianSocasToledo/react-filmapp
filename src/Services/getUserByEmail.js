export default async function getUserByEmail(email) {
  const url = `http://localhost:3000/api/getUserByEmail/${email}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res);
}
