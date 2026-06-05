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
} from "lucide-react";
import PopoverCard from "../Popover";
import styled from "styled-components";
import PlantFormButton from "../PlantFormButton";
import PlantForm from "../PlantForm";

export default function PlantDetails({
  plant,
  plantForm,
  isExpanded,
  onDeletePlant,
  handleEditPlant,
  handleIsExpanded,
  handleSetPlantForm,
}) {
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
      <StyledWrapper>
        <Link href="/">← BACK TO GARDEN</Link>
        <PlantFormButton
          isExpanded={isExpanded}
          onIsExpanded={handleIsExpanded}
          isEditMode={true}
        ></PlantFormButton>
        {/* <Accordion
          isExpanded={isExpanded}
          onIsExpanded={handleIsExpanded}
          plant={plantForm}
          isEditMode={true}
          handleSubmit={handleEditPlant}
          handleSetPlantForm={handleSetPlantForm}
        ></Accordion> */}
      </StyledWrapper>
      <StyledPlantFormWrapper>
        {isExpanded && (
          <PlantForm
            plant={plantForm}
            isEditMode={true}
            onSetPlantForm={handleSetPlantForm}
            onSubmit={handleEditPlant}
            handleSetPlantForm={handleSetPlantForm}
          ></PlantForm>
        )}
      </StyledPlantFormWrapper>
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

          <button type="button" onClick={() => setIsDeleteConfirmation(false)}>
            cancel
          </button>

          <button
            type="button"
            onClick={() => {
              onDeletePlant();
              setIsDeleteConfirmation(false);
            }}
          >
            delete
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => setIsDeleteConfirmation(true)}>
          <Trash2 />
          Delete Plant
        </button>
      )}
    </>
  );
}
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
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

const StyledPlantFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
