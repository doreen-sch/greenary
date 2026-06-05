import styled from "styled-components";
import PlantForm from "../PlantForm";
import { LucideX, LucidePencil, LucidePlus } from "lucide-react";

export default function Accordion({
  title,
  isExpanded,
  onIsExpanded,
  plant,
  isEditMode,
  handleSetPlantForm,
  handleSubmit,
  handleClearPlant,
}) {
  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        {/* <StyledHeader>{title}</StyledHeader> */}
        {/* <StyledButton onClick={onIsExpanded}>
          {isExpanded ? (
            <LucideX />
          ) : isEditMode ? (
            <LucidePencil />
          ) : (
            <LucidePlus />
          )}
        </StyledButton> */}
      </StyledHeaderWrapper>
      <StyledContentWrapper>
        {/* {isExpanded && (
          <PlantForm
            plant={plant}
            isEditMode={isEditMode}
            onSetPlantForm={handleSetPlantForm}
            onSubmit={handleSubmit}
            onClearPlant={handleClearPlant}
            onCancelEdit={onIsExpanded}
          ></PlantForm>
        )} */}
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeaderWrapper = styled.div`
  align-self: center;
  margin-bottom: 0.5rem;
`;

const StyledHeader = styled.p`
  font-weight: 600;
`;

// const StyledButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 2rem;
//   width: 2rem;
//   border-radius: 10%;
//   color: var(--secondary-green-800);
//   background-color: var(--secondary-green-50);
//   border-color: var(--secondary-green-400);
// `;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
