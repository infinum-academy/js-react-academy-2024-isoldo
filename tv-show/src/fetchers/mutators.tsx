export async function mutator(url: string, { arg }: { arg: any }) {
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

  return await response.json();
}
