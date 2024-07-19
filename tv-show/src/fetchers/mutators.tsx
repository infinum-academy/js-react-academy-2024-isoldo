export async function mutator(url: string, { arg }: { arg: any }) {
  const headers = JSON.parse(localStorage.getItem("register-response-headers") || "{}");
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
  });
  if (!response.ok) {
    throw new Error(`Error mutating data on ${url}`);
  }
  return await response.json();
}

export async function authMutator(url: string, { arg }:  {arg: any}) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Error mutating data on ${url}`);
  }

  const registerData = {
    "access-token": response.headers.get("access-token"),
    "client": response.headers.get("client"),
    uid: response.headers.get("uid")
  }
  localStorage.setItem("register-response-headers", JSON.stringify(registerData));

  return await response.json();;
}
