import styled from "styled-components";
import PlantForm from "../PlantForm";
import { useState } from "react";

export default function Accordion({ title, onSubmit, plant }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledWrapper>
      <StyledHeaderWrapper>
        <StyledHeader>{title}</StyledHeader>
        <StyledButton
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "-" : "+"}
        </StyledButton>
      </StyledHeaderWrapper>
      <StyledContentWrapper isExpanded={isExpanded}>
        <PlantForm onSubmit={onSubmit} plant={plant}></PlantForm>
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30em;
`;
const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledHeader = styled.p`
  font-weight: 600;
`;

const StyledButton = styled.button`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => (props.isExpanded ? "black" : "green")};
`;

const StyledContentWrapper = styled.div`
  display: ${(props) => (props.isExpanded ? "flex" : "none")};
`;
