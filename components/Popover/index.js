import {
  Root,
  Trigger,
  Portal,
  Content,
  Close,
  Arrow,
} from "@radix-ui/react-popover";
import {
  Info,
  CircleX,
  Lightbulb,
  Sprout,
  Sun,
  Leaf,
  Snowflake,
} from "lucide-react";
import styled from "styled-components";
import { Droplet } from "lucide-react";

const StyledContent = styled.div`
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  width: min(320px, calc(100vw - 32px));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  box-shadow:
    hsl(206 22% 7% / 20%) 0px 8px 30px -8px,
    hsl(206 22% 7% / 12%) 0px 4px 16px -4px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &:focus {
    box-shadow:
      hsl(206 22% 7% / 20%) 0px 8px 30px -8px,
      hsl(206 22% 7% / 12%) 0px 4px 16px -4px,
      0 0 0 2px hsl(206 22% 60%);
  }
`;
const StyledButton = styled.button`
  all: unset;
`;

const PopoverHeadline = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #888;
`;

const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  margin: 4px;
  min-width: 0;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 4px 5px;
  font-size: 11px;
  color: #666;
`;
const Divider = styled.div`
  height: 0.5px;
  background: #ebebeb;
  margin: 0 -16px;
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
        <Content sideOffset={5} avoidCollisions collisionPadding={16}>
          <StyledContent>
            <PopoverHeadline>Explanation</PopoverHeadline>
            <LegendRow>
              <LegendItem>
                <Droplet />
                Low
              </LegendItem>
              <LegendItem>
                <Droplet />
                <Droplet />
                Medium
              </LegendItem>
              <LegendItem>
                <Droplet />
                <Droplet />
                <Droplet /> High
              </LegendItem>
            </LegendRow>
            <Divider />
            <LegendRow>
              <LegendItem>
                <Lightbulb />
                Full Shade
              </LegendItem>
              <LegendItem>
                <Lightbulb />
                <Lightbulb />
                Partial Shade
              </LegendItem>
              <LegendItem>
                <Lightbulb />
                <Lightbulb />
                <Lightbulb /> Full Sun
              </LegendItem>
            </LegendRow>
            <Divider />
            <LegendRow>
              <LegendItem>
                <Sprout /> Spring
              </LegendItem>
              <LegendItem>
                <Sun /> Summer
              </LegendItem>
              <LegendItem>
                <Leaf /> Autumn
              </LegendItem>
              <LegendItem>
                <Snowflake /> Winter
              </LegendItem>
            </LegendRow>
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
          </StyledContent>
        </Content>
      </Portal>
    </Root>
  );
}
