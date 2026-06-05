import { Droplet, Sun } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";

// const sunIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-sun-icon lucide-sun"
//   >
//     <circle cx="12" cy="12" r="4" />
//     <path d="M12 2v2" />
//     <path d="M12 20v2" />
//     <path d="m4.93 4.93 1.41 1.41" />
//     <path d="m17.66 17.66 1.41 1.41" />
//     <path d="M2 12h2" />
//     <path d="M20 12h2" />
//     <path d="m6.34 17.66-1.41 1.41" />
//     <path d="m19.07 4.93-1.41 1.41" />
//   </svg>
// );

// const dropletIcon = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-droplet-icon lucide-droplet"
//   >
//     <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
//   </svg>
// );

const plantNeeds = [
  {
    id: "waterNeed",
    name: "Watering",
    icon: (
      <svg
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
      </svg>
    ),
    need: ["Full Shade", "Partial Shade", "Full Sun"],
  },
  {
    id: "fertiliserSeason",
    name: "Fertilizing",
    icon: "",
    need: ["Spring", "Summer", "Autumn", "Winter"],
  },
];

export default function PlantNeeds({ plant, need, onSetPlantForm }) {
  const currentValue = plant[need];
  const plantNeed = plantNeeds.find((plantNeed) => plantNeed.id === need);

  const numberOfNeed = plantNeed.need.indexOf(currentValue) + 1;
  console.log("currentValue", currentValue);
  console.log("plantNeed", plantNeed);
  console.log("number of need", numberOfNeed);

  function toCamelCase(str) {
    return str
      .split("-")
      .map((word, i) =>
        i > 0
          ? word
              .split("")
              .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
              .join("")
          : word
      )
      .join("");
  }

  function getIcon(icon) {
    switch (icon) {
      case "droplet":
        dropletIcon;
        break;
      case "sun":
        sunIcon;
        break;
    }
  }

  function showNeeds(number) {
    let returnComponent = [];
    for (let i = 1; i <= plantNeed.need.length; i++) {
      const value = plantNeed.need[i - 1];
      console.log(i, numberOfNeed);
      returnComponent.push(
        <StyledLabel
          key={need.concat("-", toCamelCase(value))}
          htmlFor={need.concat("-", toCamelCase(value))}
          $needIndex={i}
          $numberOfNeed={numberOfNeed}
        >
          {plantNeed.icon}
          {/* {getIcon(need.icon)} */}

          <StyledInput
            type="radio"
            id={need.concat("-", toCamelCase(value))}
            name={need}
            value={value}
            defaultChecked={plant?.need === value}
            onChange={onSetPlantForm}
          />
        </StyledLabel>
        // <StyledListItem key={i}>
        //   <StyledButton
        //     alt=""
        //     // type="button"
        //     $needIndex={i}
        //     $numberOfNeed={numberOfNeed}
        //     onClick={handleNeed}
        //   >
        //     {dropletIcon}
        //   </StyledButton>
        // </StyledListItem>
      );
      // return (
      //    <span>{i <= number ? <Image alt="" onClick={}/> : <Droplet opacity={0.2} />}</span>
      // );
    }
    console.log(returnComponent);
    return returnComponent;
  }

  return (
    <StyledWrapper>
      <p>{plantNeed.name}</p>
      <>{showNeeds()}</>
      {/* <StyledList>{showNeeds()}</StyledList> */}
      {/* <StyledSpan $test="">{dropletIcon}</StyledSpan>
      <StyledSpan>{sunIcon}</StyledSpan> */}
    </StyledWrapper>
  );
}

const StyledSpan = styled.span`
  opacity: 0.2;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  opacity: ${(props) => props.$needIndex > props.$numberOfNeed && 0.2};
`;

const StyledLabel = styled.label`
  opacity: ${(props) => props.$needIndex > props.$numberOfNeed && 0.2};
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledList = styled.ul`
  display: flex;
`;
