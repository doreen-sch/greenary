import { MoveUp } from "lucide-react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
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
          <MoveUp />
        </StyledButton>
      )}
    </>
  );
}
