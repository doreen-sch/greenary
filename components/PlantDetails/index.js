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
  SquarePen,
  SquareArrowLeft,
} from "lucide-react";
import PlantForm from "../PlantForm";
import PopoverCard from "../Popover";
import styled from "styled-components";
import Button from "../Button";
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
              src={src}
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
        <Link href="/" aria-label="Back to Homepage Button">
          <Button $variant="icon">
            <SquareArrowLeft />
          </Button>
        </Link>
        <div>
          {showEditForm ? (
            <PlantForm
              plant={plant}
              isEditMode
              onSubmit={handleEditPlant}
              onShowEditForm={handleShowEditForm}
            />
          ) : (
            <Button
              onClick={handleShowEditForm}
              $variant="icon"
              aria-label="Edit Plant Form Button"
            >
              <SquarePen />
            </Button>
          )}
        </div>
        <div>
          {isDeleteConfirmation ? (
            <div aria-description="Delete Confirmation">
              <p>
                Do you really want to discard the {plant.name} from your garden?
              </p>

              <Button
                type="button"
                aria-label="Button to cancel delete process"
                $variant="cancel"
                onClick={() => setIsDeleteConfirmation(false)}
              >
                cancel
              </Button>

              <Button
                type="button"
                $variant="delete"
                aria-label="Button to confirm delete process"
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
              aria-label="Button to delete plant"
              $color="red"
              onClick={() => setIsDeleteConfirmation(true)}
            >
              <Trash2 />
            </Button>
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
  min-width: 100%;
  background-color: white;
  margin: 2rem auto;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);

  @media (min-width: 768px) {
    min-width: 30rem;
  }
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
  background-color: var(--primary-off-white);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25px;
`;
