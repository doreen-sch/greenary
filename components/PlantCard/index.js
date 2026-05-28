import Image from "next/image";
import styled from "styled-components";

export default function PlantCard({ plant }) {
  return (
    <StyledPlantCard>
      <StyledPlantCardDiv>
        <StyledImage src={plant.imageUrl} alt={plant.name} fill />
      </StyledPlantCardDiv>
      <h2>{plant.name}</h2>
      <p>{plant.botanicalName}</p>
    </StyledPlantCard>
  );
}

const StyledPlantCard = styled.article`
  border: 1px solid darkgray;
  border-radius: 10px;
  overflow: hidden;
  flex: 1 1 300px;
`;

const StyledPlantCardDiv = styled.div`
  position: relative;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
