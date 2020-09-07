export default async function updateUserName(email, userName) {
  const request = {
    email: email,
    userName: userName,
  };

  const url = "https://filmapp-server.herokuapp.com/api/updateUserName";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}
