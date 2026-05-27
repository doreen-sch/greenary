import Image from "next/image";
import {
  Droplet,
  DropletOff,
  Lightbulb,
  LightbulbOff,
  Sprout,
  Sun,
  Leaf,
  Snowflake,
} from "lucide-react";

export default function PlantDetails({ plant }) {
  let waterNeed = 0;
  if (plant.waterNeed === "Low") {
    waterNeed = 1;
  } else if (plant.waterNeed === "Medium") {
    waterNeed = 2;
  } else if (plant.waterNeed === "High") {
    waterNeed = 3;
  }
  let lightNeed = 0;
  if (plant.lightNeed === "Full Shade") {
    lightNeed = 1;
  } else if (plant.lightNeed === "Partial Shade") {
    lightNeed = 2;
  } else if (plant.lightNeed === "Full Sun") {
    lightNeed = 3;
  }

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
      <section>
        <span>Watering: </span>
        <span>{waterNeed >= 1 ? <Droplet /> : <DropletOff />}</span>
        <span>{waterNeed >= 2 ? <Droplet /> : <DropletOff />}</span>
        <span>{waterNeed >= 3 ? <Droplet /> : <DropletOff />}</span>
      </section>
      <section>
        <span>Light: </span>
        <span>{lightNeed >= 1 ? <Lightbulb /> : <LightbulbOff />}</span>
        <span>{lightNeed >= 2 ? <Lightbulb /> : <LightbulbOff />}</span>
        <span>{lightNeed >= 3 ? <Lightbulb /> : <LightbulbOff />}</span>
      </section>
      <section>
        <span>Season: </span>
        {plant.fertiliserSeason.map((season) => (
          <span key={season}>
            {season === "Spring" && <Sprout />}
            {season === "Summer" && <Sun />}
            {season === "Autumn" && <Leaf />}
            {season === "Winter" && <Snowflake />}
          </span>
        ))}
      </section>
    </>
  );
}
