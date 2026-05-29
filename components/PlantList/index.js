import PlantCard from "../PlantCard";
import styled from "styled-components";
import { Sprout } from "lucide-react";

export default function PlantList({ plants }) {
  if (plants.length === 0)
    return (
      <p>
        Your Garden is currently empty. Start by planting a plant <Sprout />
      </p>
    );

  return (
    <StyledPlantList>
      {plants.map((plant) => (
        <StyledPlantListListItem key={plant._id}>
          <PlantCard plant={plant} />
        </StyledPlantListListItem>
      ))}
    </StyledPlantList>
  );
}

const StyledPlantList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
`;

const StyledPlantListListItem = styled.li`
  flex: 1 1 300px;
`;
