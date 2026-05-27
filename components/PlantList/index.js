import PlantCard from "../PlantCard";

export default function PlantList({ plants }) {
  if (!plants) return <p>Loading your garden...</p>;

  return (
    <ul>
      {plants.map((plant) => (
        <PlantCard key={plant._id} plants={plant} />
      ))}
    </ul>
  );
}
