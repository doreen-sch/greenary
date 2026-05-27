import Image from "next/image";
import styled from "styled-components";

export default function PlantCard({ plants }) {
  return (
    <StyledPlantCard key={plants._id}>
      <div style={{ position: "relative", height: "400px" }}>
        <Image
          src={plants.imageUrl}
          alt={plants.name}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <h2>{plants.name}</h2>
      <p>{plants.botanicalName}</p>
    </StyledPlantCard>
  );
}

const StyledPlantCard = styled.article`
  border: 1px solid darkgray;
  border-radius: 10px;
  overflow: hidden;
  flex: 1 1 300px;
`;
