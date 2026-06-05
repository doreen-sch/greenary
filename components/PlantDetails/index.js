import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplet,
  Lightbulb,
  Sprout,
  Sun,
  Leaf,
  Snowflake,
  Trash2,
  SquarePen,
  SquareArrowLeft,
} from "lucide-react";
import PlantForm from "../PlantForm";
import PopoverCard from "../Popover";
import styled from "styled-components";
import Button from "../Button";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
`;

const StyledSpan = styled.span`
  right: 8px;
  position: absolute;
`;

export default function PlantDetails({
  plant,
  onDeletePlant,
  handleEditPlant,
  showEditForm,
  handleShowEditForm,
}) {
  const src = plant.imageUrl ?? plant.image?.url ?? "/images/greenary_guy.png";

  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

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
      <Link href="/">
        <Button $variant="icon">
          <SquareArrowLeft />
        </Button>
      </Link>
      <section>
        <Image
          src={src}
          alt={`Image of the ${plant.name}`}
          width={400}
          height={600}
          style={{ objectFit: "cover" }}
        />

        {showEditForm ? (
          <PlantForm
            plant={plant}
            isEditMode
            onSubmit={handleEditPlant}
            onShowEditForm={handleShowEditForm}
          />
        ) : (
          <Button onClick={handleShowEditForm} $variant="icon">
            <SquarePen />
          </Button>
        )}
        <h1>{plant.name}</h1>
        <h2>{plant.botanicalName}</h2>
        <p>{plant.description}</p>
      </section>
      <StyledSection>
        <div>
          <span>
            {waterNeed >= 1 ? <Droplet /> : <Droplet opacity={0.2} />}
          </span>
          <span>
            {waterNeed >= 2 ? <Droplet /> : <Droplet opacity={0.2} />}
          </span>
          <span>
            {waterNeed >= 3 ? <Droplet /> : <Droplet opacity={0.2} />}
          </span>
        </div>
        <div>
          <span>
            {lightNeed >= 1 ? <Lightbulb /> : <Lightbulb opacity={0.2} />}
          </span>
          <span>
            {lightNeed >= 2 ? <Lightbulb /> : <Lightbulb opacity={0.2} />}
          </span>
          <span>
            {lightNeed >= 3 ? <Lightbulb /> : <Lightbulb opacity={0.2} />}
          </span>
        </div>
        <div>
          {plant.fertiliserSeason.map((season) => (
            <span key={season}>
              {season === "Spring" && <Sprout />}
              {season === "Summer" && <Sun />}
              {season === "Autumn" && <Leaf />}
              {season === "Winter" && <Snowflake />}
            </span>
          ))}
        </div>
        <StyledSpan>
          <PopoverCard />
        </StyledSpan>
      </StyledSection>

      {isDeleteConfirmation ? (
        <div aria-description="Delete Confirmation">
          <p>
            Do you really want to discard the {plant.name} from your garden?
          </p>

          <Button
            type="button"
            $variant="cancel"
            onClick={() => setIsDeleteConfirmation(false)}
          >
            cancel
          </Button>

          <Button
            type="button"
            $variant="delete"
            onClick={() => {
              onDeletePlant();
              setIsDeleteConfirmation(false);
            }}
          >
            delete
          </Button>
        </div>
      ) : (
        <Button
          type="button"
          $variant="icon"
          $color="red"
          onClick={() => setIsDeleteConfirmation(true)}
        >
          <Trash2 />
        </Button>
      )}
    </>
  );
}
