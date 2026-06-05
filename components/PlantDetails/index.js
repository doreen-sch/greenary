import { useState } from "react";
import Image from "next/image";
import {
  Droplet,
  Lightbulb,
  Sprout,
  Sun,
  Leaf,
  Snowflake,
  Trash2,
  PenIcon,
} from "lucide-react";
import PlantForm from "../PlantForm";
import PopoverCard from "../Popover";
import styled from "styled-components";
import Link from "next/link";

export default function PlantDetails({
  plant,
  onDeletePlant,
  handleEditPlant,
  showEditForm,
  handleShowEditForm,
}) {
  const src = plant.imageUrl ?? plant.image?.url ?? "/images/greenary_guy.png";

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
    <StyledDivideLinkAndCard>
      <StyledPlantDetails>
        <h1>{plant.name}</h1>
        <StyledH2>{plant.botanicalName}</StyledH2>
        <section>
          <StyledImageContainer $isPortrait={isPortrait}>
            <StyledImage
              src={plant.imageUrl}
              alt={`Image of ${plant.name}`}
              fill
              onLoad={(event) => handleImageLoad(event.target)}
            />
          </StyledImageContainer>

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
          <StyledDivider>|</StyledDivider>
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
          <StyledDivider>|</StyledDivider>
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
      </StyledPlantDetails>
      <StyledWrapper>
        <StyledLink href="/">← back to the garden</StyledLink>
        <div>
          {showEditForm ? (
            <PlantForm
              plant={plant}
              isEditMode
              onSubmit={handleEditPlant}
              onShowEditForm={handleShowEditForm}
            />
          ) : (
            <button type="button" onClick={handleShowEditForm}>
              <PenIcon />
              Edit
            </button>
          )}
        </div>
        <div>
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
        </div>
      </StyledWrapper>
    </StyledDivideLinkAndCard>
  );
}

const StyledDivideLinkAndCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const StyledPlantDetails = styled.div`
  border: 1px solid var(--primary-grey-100);
  border-radius: 10px;
  overflow: hidden;
  max-width: 50rem;
  min-width: 28rem;
  background-color: white;
  margin: 2rem auto;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
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

const StyledDescription = styled.p`
  padding: 1rem;
`;

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

const StyledDivider = styled.span`
  color: var(--primary-grey-200);
`;

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1rem;
`;

const StyledLink = styled(Link)`
  color: var(--primary-grey-800);
  text-decoration: none;
`;
