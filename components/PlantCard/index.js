import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PlantCard({ plant }) {
  const { _id, image, imageUrl, name, botanicalName } = plant;
  const src = image?.url ?? imageUrl ?? "/images/greenary_guy.png";

  const router = useRouter();
  const [isFlipping, setIsFlipping] = useState(false);

  function handleClick() {
    setIsFlipping(true);
    setTimeout(() => router.push(`/${_id}`, undefined, { scroll: false }), 300);
  }

  return (
    <>
      {isFlipping && (
        <StyledOverlay initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} />
      )}
      <StyledMotionArticle
        $isFlipping={isFlipping}
        onClick={handleClick}
        variants={cardVariants}
        animate={isFlipping ? "flipping" : "idle"}
        transition={{ duration: 0.45 }}
      >
        <StyledPlantCardDiv>
          <StyledImage src={src} alt={name} fill />
        </StyledPlantCardDiv>
        <h2>{name}</h2>
        <StyledH3>{botanicalName}</StyledH3>
      </StyledMotionArticle>
    </>
  );
}

const StyledMotionArticle = styled(motion.article)`
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
  z-index: ${({ $isFlipping }) => ($isFlipping ? 10 : "auto")};
`;

const StyledOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 9;
`;

const cardVariants = {
  idle: {
    rotateY: 0,
    scale: 1,
    z: 0,
    boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075)",
  },
  flipping: {
    rotateY: 90,
    scale: 1.05,
    z: 50,
    boxShadow: "0 30px 60px hsl(0deg 0% 0% / 0.4)",
  },
};

const StyledH3 = styled.p`
  font-weight: 200;
  font-size: large;
  font-family: var(--font-comfortaa);
  color: var(--primary-grey-900);
  padding: 0 1rem 0 1rem;
  text-decoration: none;
`;

const StyledPlantCardDiv = styled.div`
  position: relative;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
`;
