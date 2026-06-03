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
  gap: 0;
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
  margin: 0 0 14px;
  padding: 0;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #999;
`;

const LegendSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
`;

const LegendLabel = styled.span`
  font-size: 12px;
  color: #999;
  width: 56px;
  flex-shrink: 0;
  padding-top: 2px;
`;

const LegendRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
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
            <LegendSection>
              <LegendLabel>Watering</LegendLabel>
              <LegendRows>
                <LegendRow>
                  <Droplet size={14} strokeWidth={1.5} />
                  <span>Low</span>
                </LegendRow>
                <LegendRow>
                  <Droplet size={14} strokeWidth={1.5} />
                  <Droplet size={14} strokeWidth={1.5} />
                  <span>Medium</span>
                </LegendRow>
                <LegendRow>
                  <Droplet size={14} strokeWidth={1.5} />
                  <Droplet size={14} strokeWidth={1.5} />
                  <Droplet size={14} strokeWidth={1.5} /> <span>High</span>
                </LegendRow>
              </LegendRows>
            </LegendSection>
            <Divider />
            <LegendSection>
              <LegendLabel>Lighting</LegendLabel>
              <LegendRows>
                <LegendRow>
                  <Lightbulb size={14} strokeWidth={1.5} />
                  <span>Full Shade</span>
                </LegendRow>
                <LegendRow>
                  <Lightbulb size={14} strokeWidth={1.5} />
                  <Lightbulb size={14} strokeWidth={1.5} />
                  <span>Partial Shade</span>
                </LegendRow>
                <LegendRow>
                  <Lightbulb size={14} strokeWidth={1.5} />
                  <Lightbulb size={14} strokeWidth={1.5} />
                  <Lightbulb size={14} strokeWidth={1.5} />{" "}
                  <span>Full Sun</span>
                </LegendRow>
              </LegendRows>
            </LegendSection>
            <Divider />
            <LegendSection>
              <LegendLabel>Season</LegendLabel>
              <LegendRows>
                <LegendRow>
                  <Sprout size={14} strokeWidth={1.5} /> <span>Spring</span>
                </LegendRow>
                <LegendRow>
                  <Sun size={14} strokeWidth={1.5} /> <span>Summer</span>
                </LegendRow>
                <LegendRow>
                  <Leaf size={14} strokeWidth={1.5} /> <span>Autumn</span>
                </LegendRow>
                <LegendRow>
                  <Snowflake size={14} strokeWidth={1.5} /> <span>Winter</span>
                </LegendRow>
              </LegendRows>
            </LegendSection>
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
