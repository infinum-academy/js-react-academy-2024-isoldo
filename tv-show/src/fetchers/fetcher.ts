export async function fetcher<T>(input: string | URL | Request, init?: RequestInit | undefined): Promise<T> {
  try {
    const response = await fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
      }
    });
    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch(error) {
    throw new Error(`Response: ${error}`);
  }
}

export async function authenticatedFetcher<T>(input: string | URL | Request, init?: RequestInit | undefined): Promise<T> {
  const headers = JSON.parse(localStorage.getItem("register-response-headers") || "{}");
  try {
    const response = await fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        ...headers
      }
    });
    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch(error) {
    throw new Error(`Response: ${error}`);
  }
}
