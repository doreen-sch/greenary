import Head from "next/head";
import PlantDetails from "@/components/PlantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PlantDetailPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  const [plantFormEdit, setPlantFormEdit] = useState(plant);
  console.log("from id page, plant data", plant);

  function handleSetPlantFormEdit(event) {
    const key = event.target.name;
    const value = event.target.value;

    console.log("i am in the details page");
    console.log("key", key, "value", value);

    if (key === "fertiliserSeason") {
      setPlantFormEdit({
        ...plantFormEdit,
        [key]: plantFormEdit.fertiliserSeason.find((season) => season === value)
          ? plantFormEdit.fertiliserSeason.filter((season) => season !== value)
          : [...plantFormEdit.fertiliserSeason, value],
      });

      return;
    }

    setPlantFormEdit({ ...plantFormEdit, [key]: value });
  }

  async function handleEditPlant(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);

    console.log(formData);
    plantData.fertiliserSeason = formData.getAll("fertiliserSeason");

    const response = await fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });

    if (response.ok) {
      mutate();
      setIsExpanded(!isExpanded);

      toast.success("Your plant 🪴 was successfully updated.");
    } else {
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again."
      );
    }
  }

  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plant || error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  async function handleDeletePlant() {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
      toast.success("Your plant 🥀 was successfully composted.");
    } else {
      toast.error(
        "Oops, something went wrong. Take a deep breath 🍃 and check again."
      );
    }
  }

  function handleIsExpanded() {
    setIsExpanded(!isExpanded);
    setPlantFormEdit(plant);
  }

  return (
    <>
      <Head>
        <title>{plant.name}</title>
      </Head>
      <PlantDetails
        plant={plant}
        plantForm={plantFormEdit}
        isExpanded={isExpanded}
        onDeletePlant={handleDeletePlant}
        handleEditPlant={handleEditPlant}
        handleIsExpanded={handleIsExpanded}
        handleSetPlantForm={handleSetPlantFormEdit}
      />
    </>
  );
}
