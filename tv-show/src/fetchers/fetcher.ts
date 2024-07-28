type httpMethods = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE';

interface IFetcherParams {
  method?: httpMethods;
  needsAuth?: boolean;
  body?: any;
  storeAuth?: boolean;
};

const LOCAL_STORAGE_AUTH_DATA_KEY = "register-response-headers";

export async function universalFetcher<T>(input: string | URL | Request, params?: IFetcherParams): Promise<T> {
  const authHeaders = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_DATA_KEY) || "{}");
  const headers = {
    ...authHeaders,
    'Content-Type': 'application/json'
  }
  const init = {
    method: params?.method || 'GET',
    headers,
    body: params?.body ? JSON.stringify(params.body.arg) : undefined,
  };
  try {
    const response = await fetch(input, init);

    if(!response.ok) {
      throw new Error("Response NOK", {cause: response});
    }

    let data;

    // No Content
    if (response.status !== 204) {
      data = await response.text();
      try {
        data = JSON.parse(data);
      } catch (e) {
        // do nothing, response is text
      }
    }

    if(params?.storeAuth) {
      const registerData = {
        "access-token": response.headers.get("access-token"),
        "client": response.headers.get("client"),
        uid: response.headers.get("uid")
      }
      localStorage.setItem(LOCAL_STORAGE_AUTH_DATA_KEY, JSON.stringify(registerData));
    }

    return data;
  } catch (e) {
    console.error("Error using fetch", { e, params, init});
    throw e;
  }
}

export async function get<T>(input: string | URL | Request): Promise<T> {
  return universalFetcher<T>(input);
}

export async function authGet<T>(input: string | URL | Request): Promise<T> {
  return universalFetcher<T>(input, { needsAuth: true });
}

export async function post<T>(input: string | URL | Request, body: { arg: any }): Promise<T> {
  return universalFetcher<T>(input, { method: 'POST', body });
}

export async function authPost<T>(input: string | URL | Request, body: { arg: any }): Promise<T> {
  return universalFetcher<T>(input, { method: 'POST', body, needsAuth: true });
}

export async function loginPost<T>(input: string | URL | Request, body: { arg: any }): Promise<T> {
  return universalFetcher<T>(input, { method: 'POST', body, storeAuth: true });
}

export async function del<T>(input: string | URL | Request): Promise<T> {
  return universalFetcher<T>(input, { method: 'DELETE' });
}

export async function authDel<T>(input: string | URL | Request): Promise<T> {
  return universalFetcher<T>(input, { method: 'DELETE', needsAuth: true });
}
