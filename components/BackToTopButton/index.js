import { ChevronUp } from "lucide-react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--secondary-green-400);
  opacity: 0.8;
  border: 1px solid var(--secondary-green-900);
  border-radius: 4px;
  box-shadow:
    hsl(206 22% 7% / 20%) 0px 8px 30px -8px,
    hsl(206 22% 7% / 12%) 0px 4px 16px -4px;
`;

const StyledMoveUpArrow = styled(ChevronUp)`
  color: var(--secondary-green-900);
  stroke-width: 1.5;
`;

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
        <StyledButton onClick={handleScrollToTop}>
          <StyledMoveUpArrow />
        </StyledButton>
      )}
    </>
  );
}
