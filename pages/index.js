import useSWR from "swr";
import PlantForm from "@/components/PlantForm";
import PlantList from "@/components/PlantList";
    
export default function HomePage() {
  const { data: plants, isLoading } = useSWR("/api/plants");

  if (isLoading) return <p>Loading your garden...</p>;

  return (
    <div>
      <h1>Greenary 🌱</h1>
      <PlantForm />
      <PlantList plants={plants} />
    </div>
  );
}
