import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
} from "@radix-ui/react-popover";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import Button from "../Button";

const StyledContent = styled.div`
  border-radius: 12px;
  padding: 16px 24px;
  margin: 16px;
  width: min(320px, calc(100vw - 32px));
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 20%) 0px 8px 30px -8px,
    hsl(206 22% 7% / 12%) 0px 4px 16px -4px;
  &:focus {
    box-shadow:
      hsl(206 22% 7% / 20%) 0px 8px 30px -8px,
      hsl(206 22% 7% / 12%) 0px 4px 16px -4px,
      0 0 0 2px hsl(206 22% 60%);
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  gap: 48px;
  justify-content: flex-start;
  align-items: center;
`;

const PopoverHeadline = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--primary-grey-600);
`;
const StyledParagraph = styled.p`
  font-size: 14px;
  margin-top: 6px;
  color: var(--primary-grey-500);
`;

const StyledClose = styled(Close)`
  all: unset;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default function DeletePopover({ plant, onDeletePlant }) {
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "-16px" }
    );
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Root>
      <Trigger asChild>
        <Button
          type="button"
          $variant="icon"
          aria-label="Button to delete plant"
          $color="red"
        >
          <Trash2 />
        </Button>
      </Trigger>
      <Portal>
        <Content
          side="top"
          sideOffset={5}
          avoidCollisions
          collisionPadding={16}
        >
          <StyledContent aria-description="Delete Confirmation">
            <PopoverHeadline>Really Delete?</PopoverHeadline>
            <StyledParagraph>
              Do you really want to discard the <strong>{plant.name} </strong>
              from your garden?
            </StyledParagraph>
            <ButtonGroup>
              <Button
                type="button"
                $variant="deleteConfirm"
                aria-label="Button to confirm delete process"
                onClick={() => {
                  onDeletePlant();
                }}
              >
                Delete
              </Button>
              <StyledClose
                type="button"
                aria-label="Button to cancel delete process"
                $variant="cancel"
              >
                Cancel
              </StyledClose>
            </ButtonGroup>
          </StyledContent>
        </Content>
      </Portal>
    </Root>
  );
}
