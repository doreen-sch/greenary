import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import PlantForm from "../PlantForm";
import styled from "styled-components";

export default function PlantFormAccordion({ onSubmit, plant }) {
  return (
    <StyledAccordionRoot collapsible>
      <StyledAccordionItem>
        <StyledAccordionHeader>
          <StyledAccordionTrigger>
            <span>Expand your garden</span>
          </StyledAccordionTrigger>
        </StyledAccordionHeader>
        <StyledAccordionContent>
          Test content
          {/* <PlantForm onSubmit={onSubmit} plant={plant} /> */}
        </StyledAccordionContent>
      </StyledAccordionItem>
    </StyledAccordionRoot>
  );
}

const StyledAccordionRoot = styled(Accordion.Root)`
  border-radius: 6px;
  width: 300px;
  background-color: violet;
  box-shadow: 0 2px 10px black;
`;

const StyledAccordionItem = styled(Accordion.Item)`
  overflow: hidden;
  margin-top: 1px;

  &:first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px blueviolet; //var(--mauve-12);
  }
`;

const StyledAccordionHeader = styled(Accordion.Header)`
  display: flex;
`;

const StyledAccordionTrigger = styled(Accordion.Trigger)`
  font-family: inherit;
  background-color: transparent;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1;
  color: var(--violet-11);
  box-shadow: 0 1px 0 var(--mauve-6);
  background-color: white;

  &:hover {
    background-color: green;
  }

  &[data-state="open"] > .AccordionChevron {
    transform: rotate(180deg);
  }
`;

const StyledAccordionContent = styled(Accordion.Content)`
  overflow: hidden;
  font-size: 15px;
  color: purple; //var(--mauve-11);
  background-color: seagreen; //var(--mauve-2);

  &[data-state="open"] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="closed"] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;
