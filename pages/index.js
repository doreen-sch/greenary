import PlantList from "@/components/PlantList";

export default function HomePage({ plants }) {
  return (
    <div>
      <h1>Greenary 🌱</h1>
      {/* <p>{JSON.stringify(plants)}</p> */}
      <PlantList plants={plants} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/plants");
  const data = await response.json();
  const serializedData = JSON.parse(JSON.stringify(data));

  return {
    props: {
      plants: serializedData,
    },
  };
}
