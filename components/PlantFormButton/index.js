import styled from "styled-components";
import { LucideX, LucidePencil, LucidePlus } from "lucide-react";

export default function PlantFormButton({
  isExpanded,
  onIsExpanded,
  isEditMode,
}) {
  return (
    <StyledButton onClick={onIsExpanded}>
      {isExpanded ? (
        <LucideX />
      ) : isEditMode ? (
        <LucidePencil />
      ) : (
        <LucidePlus />
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 10%;
  color: var(--secondary-green-800);
  background-color: var(--secondary-green-50);
  border-color: var(--secondary-green-400);
`;
