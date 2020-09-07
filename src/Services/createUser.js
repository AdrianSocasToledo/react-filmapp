export default async function createUser(email, userName) {
  const request = {
    email: email,
    userName: userName,
  };

  const url = "https://filmapp-server.herokuapp.com/api/createUser";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("user created successfully...");
}
