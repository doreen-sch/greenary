import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function PlantCard({ plant }) {
  const { _id, image, imageUrl, name, botanicalName } = plant;
  const src = image?.url ?? imageUrl ?? "/images/greenary_guy.png";

  return (
    <StyledPlantCard>
      <StyledLink href={`/${_id}`}>
        <StyledPlantCardDiv>
          <StyledImage src={src} alt={name} fill />
        </StyledPlantCardDiv>
        <h2>{name}</h2>
        <StyledH3>{botanicalName}</StyledH3>
      </StyledLink>
    </StyledPlantCard>
  );
}

const StyledPlantCard = styled.article`
  border: 1px solid var(--primary-grey-100);
  border-radius: 10px;
  overflow: hidden;
  flex: 1 1 300px;
  background-color: white;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledH3 = styled.h3`
  font-weight: 200;
  font-size: large;
`;

const StyledPlantCardDiv = styled.div`
  position: relative;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
