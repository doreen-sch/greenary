import PlantList from "@/components/PlantList";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/plants");

  if (isLoading) return <p>Loading your garden...</p>;

  return (
    <div>
      <h1>Greenary 🌱</h1>
      <PlantList plants={data} />
    </div>
  );
}
