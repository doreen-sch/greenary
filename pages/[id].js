import Head from "next/head";
import PlantDetails from "@/components/PlantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PlantDetailPage() {
  const [showEditForm, setShowEditForm] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  async function handleEditPlant(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);
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
      setShowEditForm(!showEditForm);
    }
  }

  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plant || error) {
    return <h1>oops… something went wrong.</h1>;
  }

  return (
    <>
      <Head>
        <title>{plant.name}</title>
      </Head>
      <PlantDetails
        plant={plant}
        onEditPlant={handleEditPlant}
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
      />
    </>
  );
}
