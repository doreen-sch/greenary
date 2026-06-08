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
    setTimeout(() => router.push(`/${_id}`), 300);
  }

  return (
    <>
      {isFlipping && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "black",
            zIndex: 9,
          }}
        />
      )}
      <StyledMotionArticle
        $isFlipping={isFlipping}
        onClick={handleClick}
        animate={{
          rotateY: isFlipping ? 90 : 0,
          scale: isFlipping ? 1.05 : 1,
          z: isFlipping ? 50 : 0,
          boxShadow: isFlipping
            ? "0 30px 60px hsl(0deg 0% 0% / 0.4)"
            : "0 1px 1px hsl(0deg 0% 0% / 0.075)",
        }}
        transition={{ duration: 0.45 }}
        style={{ transformStyle: "preserve-3d", perspective: "5000px" }}
      >
        <StyledPlantCardDiv onClick={() => console.log("div clicked")}>
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
  pointer-events: none;
`;
