import useSWR from "swr";
import PlantList from "@/components/PlantList";
import Accordion from "@/components/Accordion";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import toast from "react-hot-toast";
import BackToTopButton from "@/components/BackToTopButton";

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
  const [isUploading, setIsUploading] = useState(false);
  const [plant, setPlant] = useLocalStorageState("plant", initialPlant);

  const { data: plants, isLoading, mutate, error } = useSWR("/api/plants");

  function handleSetPlant(event) {
    const key = event.target.name;
    const value = event.target.value;

    if (key === "fertiliserSeason") {
      setPlant({
        ...plant,
        [key]: plant.fertiliserSeason.find((season) => season === value)
          ? plant.fertiliserSeason.filter((season) => season !== value)
          : [...plant.fertiliserSeason, value],
      });

      return;
    }

    setPlant({ ...plant, [key]: value });
  }

  function handleClearPlant() {
    setPlant(initialPlant);
  }

  async function handleAddPlant(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
    plantData.fertiliserSeason = formData.getAll("fertiliserSeason");
    try {
      setIsUploading(true);
      toast.loading("Planting…🌱", { id: "uploading" });
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!uploadResponse.ok) throw new Error("Upload failed");
      const { height, width, url } = await uploadResponse.json();
      plantData.image = {
        height: height ?? 300,
        width: width ?? 300,
        url: url ?? "/images/greenary_guy.png",
      };
      const plantResponse = await fetch("/api/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plantData),
      });

      if (plantResponse.ok) {
        mutate();
        setIsExpanded(!isExpanded);
        setPlant(initialPlant);
        toast.success("Your plant 🪴 was successfully planted.", {
          id: "uploading",
        });
      } else {
        setIsUploading(false);
        throw new Error("Saving plant failed");
      }
    } catch {
      setIsUploading(false);
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again.",
        { id: "uploading" }
      );
    }
  }

  function handleIsExpanded() {
    setIsExpanded(!isExpanded);
  }

  if (isLoading) return <p>Loading your garden...</p>;

  if (!plants || error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  return (
    <div>
      <Accordion
        title={"Expand your garden"}
        isExpanded={isExpanded}
        onIsExpanded={handleIsExpanded}
        plant={plant}
        handleSetPlant={handleSetPlant}
        handleSubmit={handleAddPlant}
        handleClearPlant={handleClearPlant}
      />

      <PlantList plants={plants} />
      <BackToTopButton />
    </div>
  );
}
