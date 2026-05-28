import Image from "next/image";
import Link from "next/link";
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
import { useState } from "react";
import PlantForm from "../PlantForm";

export default function PlantDetails({ plant, onSubmit }) {
  const [showEditForm, setShowEditForm] = useState(false);

  let waterNeed = 0;
  switch (plant.waterNeed) {
    case "Low":
      waterNeed = 1;
      break;
    case "Medium":
      waterNeed = 2;
      break;
    case "High":
      waterNeed = 3;
      break;
  }

  let lightNeed = 0;
  switch (plant.lightNeed) {
    case "Full Shade":
      lightNeed = 1;
      break;
    case "Partial Shade":
      lightNeed = 2;
      break;
    case "Full Sun":
      lightNeed = 3;
      break;
  }

  return (
    <>
      <Link href="/">← BACK TO GARDEN</Link>
      <section>
        <Image
          src={plant.imageUrl}
          alt="placeholder Image"
          width={400}
          height={600}
          style={{ objectFit: "cover" }}
        />
        <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
        {showEditForm && (
          <PlantForm
            onSubmit={onSubmit}
            plant={plant}
            isEditMode={true}
            setShowEditForm={setShowEditForm}
            showEditForm={showEditForm}
          />
        )}
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
