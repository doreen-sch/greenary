import Head from "next/head";
import PlantDetails from "@/components/PlantDetails";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function PlantDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error } = useSWR(`/api/plants/${id}`);
  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plant || error) {
    return <h1>oops… something went wrong.</h1>;
  }

  async function handleDeletePlant() {
    const response = await fetch(`/api/plants/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <Head>
        <title>{plant.name}</title>
      </Head>
      <PlantDetails plant={plant} onDeletePlant={handleDeletePlant} />
    </>
  );
}
