import Image from "next/image";

export default function PlantCard({ plants }) {
  return (
    <article key={plants._id}>
      <div style={{ position: "relative", height: "400px" }}>
        <Image
          src={plants.imageUrl}
          alt={plants.name}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <h2>{plants.name}</h2>
      <p>{plants.botanicalName}</p>
    </article>
  );
}
