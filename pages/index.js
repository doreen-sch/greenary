import useSWR from "swr";
import PlantForm from "@/components/PlantForm";
import PlantList from "@/components/PlantList";
import toast from "react-hot-toast";

export default function HomePage() {
  const { data: plants, isLoading, mutate, error } = useSWR("/api/plants");

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
      toast.success("Your plant 🪴 was successfully planted.");

      event.target.reset();
      event.target.elements.name.focus();
    }

    if (!response.ok) {
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again."
      );
    }
  }

  if (isLoading) return <p>Loading your garden...</p>;

  if (!plants || error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  return (
    <div>
      <h1>Greenary 🌱</h1>
      <PlantForm onSubmit={handleAddPlant} plant="" />
      <PlantList plants={plants} />
    </div>
  );
}
