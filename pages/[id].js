import Head from "next/head";
import PlantDetails from "@/components/PlantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function PlantDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error, mutate } = useSWR(`/api/plants/${id}`);

  async function handleEditPlant(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);

    const response = await fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    });
    if (response.ok) {
      mutate();
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
      <PlantDetails plant={plant} handleEditPlant={handleEditPlant} />
    </>
  );
}
