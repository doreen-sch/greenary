import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function PlantCard({ plant }) {
  const { _id, imageUrl, name, botanicalName } = plant;
  return (
    <StyledPlantCard>
      <Link href={`/${_id}`}>
        <StyledPlantCardDiv>
          <StyledImage src={imageUrl} alt={name} fill />
        </StyledPlantCardDiv>
        <h2>{name}</h2>
        <p>{botanicalName}</p>
      </Link>
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
