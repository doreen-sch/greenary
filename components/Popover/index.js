import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
} from "@radix-ui/react-popover";
import { Info, CircleX } from "lucide-react";
import styled from "styled-components";

const StyledContent = styled.div`
  border-radius: 4px;
  padding: 20px;
  margin: 0;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &:focus {
    box-shadow:
      hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
      0 0 0 2px grey;
  }
`;
const StyledButton = styled.button`
  all: unset;
`;

const PopoverHeadline = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export default function PopoverCard() {
  return (
    <Root>
      <Trigger asChild>
        <StyledButton aria-label="Get Information">
          <Info />
        </StyledButton>
      </Trigger>
      <Portal>
        <Content sideOffset={5}>
          <StyledContent>
            <PopoverHeadline>Explanation</PopoverHeadline>
            <p>
              <small>The water need is displayed as drops of water.</small>
            </p>

            <Close
              aria-label="Close"
              style={{
                all: "unset",
                position: "absolute",
                top: "5px",
                right: "5px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircleX />
            </Close>
            <Arrow style={{ fill: "white" }} />
          </StyledContent>
        </Content>
      </Portal>
    </Root>
  );
}
