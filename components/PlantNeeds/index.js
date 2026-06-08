import styled from "styled-components";

const plantNeeds = [
  {
    id: "waterNeed",
    name: "Watering",
    icon: (
      <svg
        key={"Water"}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-droplet-icon lucide-droplet"
      >
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
      </svg>
    ),
    need: ["Low", "Medium", "High"],
  },
  {
    id: "lightNeed",
    name: "Lighting",
    icon: (
      <svg
        key={"Light"}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lightbulb-icon lucide-lightbulb"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
    need: ["Full Shade", "Partial Shade", "Full Sun"],
  },
];

export default function PlantNeeds({ plant, need, onSetPlantForm }) {
  const currentValue = plant?.[need];
  const plantNeed = plantNeeds.find((plantNeed) => plantNeed.id === need);

  const numberOfNeed = plantNeed.need.indexOf(currentValue) + 1;

  function toCamelCase(str) {
    return str
      .split(/[-_ ]/)
      .map((word, i) =>
        i > 0
          ? word
              .split("")
              .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
              .join("")
          : word
              .split("")
              .map((letter, i) => (i === 0 ? letter.toLowerCase() : letter))
              .join("")
      )
      .join("");
  }

  function showNeeds() {
    let returnComponent = [];
    for (let i = 1; i <= plantNeed.need.length; i++) {
      const value = plantNeed.need[i - 1];
      const technicalValue = need.concat("-", toCamelCase(value));

      returnComponent.push(
        <StyledLabel
          key={technicalValue}
          htmlFor={technicalValue}
          $needIndex={i}
          $numberOfNeed={numberOfNeed}
        >
          {plantNeed.icon}

          <StyledInput
            type="radio"
            id={technicalValue}
            name={need}
            value={value}
            defaultChecked={plant?.[need] === value}
            onChange={onSetPlantForm}
            required
          />
        </StyledLabel>
      );
    }
    return returnComponent;
  }

  return (
    <StyledWrapper>
      <StyledP>
        {plantNeed.name}
        <span aria-hidden="true">*</span>
      </StyledP>
      <div>{showNeeds()}</div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  opacity: ${(props) => props.$needIndex > props.$numberOfNeed && 0.2};
`;

const StyledInput = styled.input`
  opacity: 0;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;
