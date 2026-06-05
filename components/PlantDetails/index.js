import { useState } from "react";
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
  Trash2,
} from "lucide-react";
import PlantForm from "../PlantForm";
import PopoverCard from "../Popover";
import styled from "styled-components";

export default function PlantDetails({
  plant,
  onDeletePlant,
  handleEditPlant,
  showEditForm,
  handleShowEditForm,
}) {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(false);

  const [isPortrait, setIsPortrait] = useState(true);

  function handleImageLoad({ naturalWidth, naturalHeight }) {
    setIsPortrait(naturalHeight > naturalWidth);
  }

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
    <StyledDevideLinkAndCard>
      <StyledLink href="/">← BACK TO GARDEN</StyledLink>
      <StyledPlantDetails>
        <h1>{plant.name}</h1>
        <StyledH2>{plant.botanicalName}</StyledH2>
        <section>
          <StyledImageContainer>
            <StyledImage
              src={plant.imageUrl}
              alt={`Image of ${plant.name}`}
              fill
            />
          </StyledImageContainer>

          {showEditForm ? (
            <PlantForm
              plant={plant}
              isEditMode
              onSubmit={handleEditPlant}
              onShowEditForm={handleShowEditForm}
            />
          ) : (
            <button onClick={handleShowEditForm}>Edit</button>
          )}
          <StyledDescription>{plant.description}</StyledDescription>
        </section>

        <StyledSpan>
          <StyledH3>{plant.name} grows best with:</StyledH3>
          <PopoverCard />
        </StyledSpan>
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
          <StyledDevider>|</StyledDevider>
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
          <StyledDevider>|</StyledDevider>
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
        </StyledSection>

        {isDeleteConfirmation ? (
          <div aria-description="Delete Confirmation">
            <p>
              Do you really want to discard the {plant.name} from your garden?
            </p>

            <button
              type="button"
              onClick={() => setIsDeleteConfirmation(false)}
            >
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
      </StyledPlantDetails>
    </StyledDevideLinkAndCard>
  );
}

const StyledDevideLinkAndCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const StyledPlantDetails = styled.div`
  border: 1px solid darkgray;
  border-radius: 10px;
  overflow: hidden;
  max-width: 50rem;
  background-color: var(--secondary-off-white);
  margin: 0 auto;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const StyledLink = styled(Link)`
  margin: 1em;
`;

const StyledImageContainer = styled.div`
  position: relative;
  aspect-ratio: ${({ $isPortrait }) => ($isPortrait ? "5 / 6" : "6 / 5")};
  overflow: hidden;
  width: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

const StyledDescription = styled.article`
  padding: 1rem;
`;

// const StyledH1 = styled.h1`
//   padding: 0 1rem 0 1rem;
// `;

const StyledH2 = styled.h2`
  font-weight: 200;
  font-size: large;
`;

const StyledH3 = styled.h3`
  font-weight: 700;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  width: 95%;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  width: 100%;
  padding: 3% 15%;
`;

const StyledDevider = styled.span`
  color: var(--primary-grey-200);
`;
