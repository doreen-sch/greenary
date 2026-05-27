import Image from "next/image";

export default function PlantDetails({ plant }) {
  return (
    <>
      <section>
        <Image
          src={plant.imageUrl}
          alt="placeholder Image"
          width={400}
          height={600}
          style={{ objectFit: "cover" }}
        />
        <h1>{plant.name}</h1>
        <h2>{plant.botanicalName}</h2>
        <p>{plant.description}</p>
      </section>
    </>
  );
}
