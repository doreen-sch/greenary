import useSWR from "swr";
import PlantList from "@/components/PlantList";
//import Accordion from "@/components/Accordion";
import PlantForm from "@/components/PlantForm";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import toast from "react-hot-toast";
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

      setPlantForm(initialPlant);

      toast.success("Your plant 🪴 was successfully planted.");
    } else {
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again."
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
      <h1>Greenary 🌱</h1>
      <StyledWrapper>
        <PlantFormButton
          isExpanded={isExpanded}
          onIsExpanded={handleIsExpanded}
        ></PlantFormButton>
      </StyledWrapper>
      <StyledPlantFormWrapper>
        {isExpanded && (
          <PlantForm
            title={"Expand your garden"}
            plant={plantForm}
            onSetPlantForm={handleSetPlantForm}
            onSubmit={handleAddPlant}
            onClearPlant={handleClearPlant}
          ></PlantForm>
        )}
      </StyledPlantFormWrapper>
      {/* <Accordion
        //title={"Expand your garden"}
        isExpanded={isExpanded}
        onIsExpanded={handleIsExpanded}
        plant={plantForm}
        handleSetPlantForm={handleSetPlantForm}
        handleSubmit={handleAddPlant}
        handleClearPlant={handleClearPlant}
      ></Accordion> */}
      <PlantList plants={plants} />
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  //margin: 1rem 0;
`;

const StyledPlantFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
