import Head from "next/head";
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
    return <h1>Error!</h1>;
  }

  console.log(plant);
  return (
    <>
      <Head>
        <title>{plant.name}</title>
      </Head>
      <h1>{plant.name}</h1>
    </>
  );
}
