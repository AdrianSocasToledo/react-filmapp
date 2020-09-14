export default async function updateUserName(email, userName) {
  const request = {
    email: email,
    userName: userName,
  };

  const url = "http://localhost:3000/api/updateUserName";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
}
