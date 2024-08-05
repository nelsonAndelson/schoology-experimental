import { UserData } from "../types/User";

async function fetchUserData(): Promise<UserData> {
  const response = await fetch("https://localhost:3000/api/schoology");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data as UserData;
}


export default async function HomePage() {
  let data: UserData | null = null;
  let error: string | null = null;

  try {
    data = await fetchUserData();
  } catch (err) {
    error = err instanceof Error ? err.message : "An unexpected error occurred";
  }

  if (error) {
    return <main>{error}</main>;
  }

  if (!data) {
    return <main>Loading...</main>;
  }

  return (
    <main>
      <h1>User Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
