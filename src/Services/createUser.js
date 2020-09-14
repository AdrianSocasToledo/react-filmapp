export default async function createUser(email, userName) {
  const request = {
    email: email,
    userName: userName,
  };

  const url = "http://localhost:3000/api/createUser";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("user created successfully...");
}
