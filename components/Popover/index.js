import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover";
import {
  Info,
  CircleX,
  Lightbulb,
  Sprout,
  Sun,
  Leaf,
  Snowflake,
  Droplet,
} from "lucide-react";
import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

export default function PopoverCard() {
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
        <StyledButton
          aria-label="Get Information"
          ref={buttonRef}
          $isVisible={isVisible}
        >
          <Info />
        </StyledButton>
      </Trigger>
      <Portal>
        <Content sideOffset={5} avoidCollisions collisionPadding={16}>
          <StyledContent>
            <PopoverHeadline>Explanation</PopoverHeadline>
            <LegendSection>
              <LegendLabel>Watering</LegendLabel>
              <LegendContainer>
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
              </LegendContainer>
            </LegendSection>
            <Divider />
            <LegendSection>
              <LegendLabel>Lighting</LegendLabel>
              <LegendContainer>
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
                  <Lightbulb size={14} strokeWidth={1.5} />
                  <span>Full Sun</span>
                </LegendRow>
              </LegendContainer>
            </LegendSection>
            <Divider />
            <LegendSection>
              <LegendLabel>Season</LegendLabel>
              <LegendContainer>
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
              </LegendContainer>
            </LegendSection>
            <StyledClose aria-label="Close">
              <CircleX />
            </StyledClose>
          </StyledContent>
        </Content>
      </Portal>
    </Root>
  );
}

const StyledContent = styled.div`
  border-radius: 12px;
  padding: 16px;
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
const StyledButton = styled.button`
  all: unset;
  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  animation: ${({ $isVisible }) =>
    $isVisible ? "slideIn 0.5s ease-out" : "none"};
`;

const PopoverHeadline = styled.h3`
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

const LegendContainer = styled.div`
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

const Divider = styled.div`
  height: 0.5px;
  background: #ebebeb;
  margin: 0 -16px;
`;

const StyledClose = styled(Close)`
  all: unset;
  position: absolute;
  top: 25px;
  right: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
