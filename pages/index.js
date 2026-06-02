import useSWR from "swr";
import PlantList from "@/components/PlantList";
import Accordion from "@/components/Accordion";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import toast from "react-hot-toast";

const initialPlant = {
  name: "",
  botanicalName: "",
  lightNeed: "",
  waterNeed: "",
  description: "",
  fertiliserSeason: [],
};

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [plant, setPlant] = useLocalStorageState("plant", initialPlant);

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
      setIsExpanded(!isExpanded);

      setPlant(initialPlant);
      
      toast.success("Your plant 🪴 was successfully planted.");

      event.target.reset();
      event.target.elements.name.focus();
    } else {
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
      <Accordion
        title={"Expand your garden"}
        onSubmit={handleAddPlant}
        plant={plant}
        setPlant={setPlant}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        initialPlant={initialPlant}
      ></Accordion>

      <PlantList plants={plants} />
    </div>
  );
}
