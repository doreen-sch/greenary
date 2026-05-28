import useSWR from "swr";
import PlantForm from "@/components/PlantForm";
import PlantList from "@/components/PlantList";

export default function HomePage() {
  const { data: plants, isLoading, mutate } = useSWR("/api/plants");

  async function handleAddPlant(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    plantData.fertiliserSeason = formData.getAll("fertiliserSeason");

    const imageUrl = "/images/greenary_guy.png";

    plantData.imageUrl = imageUrl;

    const response = await fetch("/api/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    if (response.ok) {
      mutate();

      event.target.reset();
      event.target.elements.name.focus();
    }
  }

  if (isLoading) return <p>Loading your garden...</p>;

  return (
    <div>
      <h1>Greenary 🌱</h1>
      <PlantForm plant="" />
      <PlantList plants={plants} />
    </div>
  );
}
