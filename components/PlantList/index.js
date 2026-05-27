import PlantCard from "../PlantCard";
import styled from "styled-components";

export default function PlantList({ plants }) {
  if (!plants) return <p>Loading your garden...</p>;

  return (
    <StyledPlantList>
      {plants.map((plant) => (
        <PlantCard key={plant._id} plants={plant} />
      ))}
    </StyledPlantList>
  );
}

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;
  gap: 1rem;
`;
