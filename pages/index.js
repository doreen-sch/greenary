import useSWR from "swr";
import PlantList from "@/components/PlantList";
import PlantForm from "@/components/PlantForm";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import toast from "react-hot-toast";
import BackToTopButton from "@/components/BackToTopButton";
import { motion } from "framer-motion";
import styled from "styled-components";
import PlantFormButton from "@/components/PlantFormButton";

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
  const [plantForm, setPlantForm] = useLocalStorageState(
    "plantForm",
    initialPlant
  );

  const { data: plants, isLoading, mutate, error } = useSWR("/api/plants");

  function handleSetPlantForm(event) {
    const key = event.target.name;
    const value = event.target.value;

    if (key === "fertiliserSeason") {
      setPlantForm({
        ...plantForm,
        [key]: plantForm.fertiliserSeason.find((season) => season === value)
          ? plantForm.fertiliserSeason.filter((season) => season !== value)
          : [...plantForm.fertiliserSeason, value],
      });

      return;
    }

    setPlantForm({ ...plantForm, [key]: value });
  }

  function handleClearPlant() {
    setPlantForm(initialPlant);
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
        url: url ?? "/images/greenary_guy.webp",
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
        setPlantForm(initialPlant);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
    >
      <StyledWrapper>
        <PlantFormButton
          isExpanded={isExpanded}
          onIsExpanded={handleIsExpanded}
        />
      </StyledWrapper>
      <StyledPlantFormWrapper>
        {isExpanded && (
          <PlantForm
            title={"Expand your garden"}
            plant={plantForm}
            onSetPlantForm={handleSetPlantForm}
            onSubmit={handleAddPlant}
            onClearPlant={handleClearPlant}
          />
        )}
      </StyledPlantFormWrapper>

      <PlantList plants={plants} />
      <BackToTopButton />
    </motion.div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--margin-medium);
`;

const StyledPlantFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--margin-medium) 0;
`;
