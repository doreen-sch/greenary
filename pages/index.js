import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR(`/api/plants`);

  if (isLoading) {
    <h1>is Loading…</h1>;
  }
  if (!data) {
    return;
  }
  return (
    <div>
      <h1>Welcome to greenary🌱</h1>
    </div>
  );
}
