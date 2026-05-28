import PlantCard from "../PlantCard";
import styled from "styled-components";

export default function PlantList({ plants }) {
  if (!plants) return <p>Loading your garden...</p>;

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
