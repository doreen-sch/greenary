import Image from "next/image";

export default function PlantDetails() {
  return (
    <>
      <section>
        <Image
          src={plant.imageUrl}
          alt="placeholder Image"
          width={50}
          height={50}
        />
        <h1>{plant.name}</h1>
        <h2>{plant.botanicalName}</h2>
      </section>
    </>
  );
}
