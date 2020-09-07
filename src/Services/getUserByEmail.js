export default async function getUserByEmail(email) {
  const url = `https://filmapp-server.herokuapp.com/api/getUserByEmail/${email}`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res);
}
