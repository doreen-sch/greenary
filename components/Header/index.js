import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLogo
          src="/images/Greenary_logo.png"
          alt="greenary logo"
          width={150}
          height={0}
          style={{ height: "auto" }}
        />
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(var(--secondary-green-200-rgb), 0.8);
  backdrop-filter: blur(10px);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.1),
    inset 0 -2px 4px hsla(88, 60%, 95%, 0.71);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 10;
  padding: 0;
`;

const StyledLogo = styled(Image)`
  display: block;
`;
