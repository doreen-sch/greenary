import { ChevronUp } from "lucide-react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: var(--secondary-green-300);
  opacity: 0.8;
  border: 1px solid var(--primary-grey-100);
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
