import styled from "styled-components";

export const plantFertiliserSeasons = {
  id: "fertiliserSeason",
  name: "Fertilising",
  icon: [
    <svg
      key={"Spring"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sprout-icon lucide-sprout"
    >
      <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
      <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
      <path d="M5 21h14" />
    </svg>,
    <svg
      key={"Summer"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sun-icon lucide-sun"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>,
    <svg
      key={"Autumn"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-leaf-icon lucide-leaf"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>,
    <svg
      key={"Winter"}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-snowflake-icon lucide-snowflake"
    >
      <path d="m10 20-1.25-2.5L6 18" />
      <path d="M10 4 8.75 6.5 6 6" />
      <path d="m14 20 1.25-2.5L18 18" />
      <path d="m14 4 1.25 2.5L18 6" />
      <path d="m17 21-3-6h-4" />
      <path d="m17 3-3 6 1.5 3" />
      <path d="M2 12h6.5L10 9" />
      <path d="m20 10-1.5 2 1.5 2" />
      <path d="M22 12h-6.5L14 15" />
      <path d="m4 10 1.5 2L4 14" />
      <path d="m7 21 3-6-1.5-3" />
      <path d="m7 3 3 6h4" />
    </svg>,
  ],
  seasons: ["Spring", "Summer", "Autumn", "Winter"],
};

export default function PlantFertiliserSeason({ plant, onSetPlantForm }) {
  function getTechnicalName(season) {
    return plantFertiliserSeasons.id.concat("-", season.toLowerCase());
  }

  function showSeasons() {
    let returnComponent = [];
    for (let i = 1; i <= plantFertiliserSeasons.seasons.length; i++) {
      const currentSeason = plantFertiliserSeasons.seasons[i - 1];

      const technicalValue = getTechnicalName(currentSeason);

      returnComponent.push(
        <StyledLabel
          key={technicalValue}
          htmlFor={technicalValue}
          $checked={plant?.fertiliserSeason?.find(
            (season) => season === currentSeason
          )}
        >
          {plantFertiliserSeasons.icon[i - 1]}

          <StyledInput
            type="checkbox"
            id={technicalValue}
            name={plantFertiliserSeasons.id}
            value={currentSeason}
            defaultChecked={plant?.fertiliserSeason?.includes(currentSeason)}
            onChange={onSetPlantForm}
          />
        </StyledLabel>
      );
    }
    return returnComponent;
  }

  return (
    <StyledWrapper>
      <StyledP>{plantFertiliserSeasons.name}</StyledP>
      <div>{showSeasons()}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  opacity: ${(props) => (props.$checked ? 1 : 0.2)};
  margin: 0.01rem;
`;

const StyledInput = styled.input`
  opacity: 0;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;
