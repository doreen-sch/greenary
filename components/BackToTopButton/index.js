import { ChevronUp } from "lucide-react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../Button";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    }
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {isVisible && (
        <StyledButton onClick={handleScrollToTop} aria-label="Scroll to top">>
          <StyledMoveUpArrow />
        </StyledButton>
      )}
    </>
  );
}

const StyledButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: var(--primary-green-100);
  opacity: 0.8;
  border: none;
  border-radius: 4px;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const StyledMoveUpArrow = styled(ChevronUp)`
  color: var(--secondary-green-800);
  stroke-width: 2;
  width: var(--button-top-page-width);
  height: var(--button-top-page-height);
`;
