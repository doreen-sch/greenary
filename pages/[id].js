import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function PlantDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: plants, isLoading, error } = useSWR(`/api/plants/${id}`);
  if (isLoading) {
    return <h1>is Loading…</h1>;
  }

  if (!plants || error) {
    return <h1>Error!</h1>;
  }

  console.log(plants);
  return (
    <>
      <Head>
        <title>{plants.name}</title>
      </Head>
      <h1>{plants.name}</h1>
    </>
  );
}
