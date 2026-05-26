import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(`/api/plants`);
  if (isLoading) {
    <h1>is Loading…</h1>;
  }
  if (!data || error) {
    <h1>Error!</h1>;
  }

  return (
    <div>
      <h1>Welcome to greenary🌱</h1>
    </div>
  );
}
