import styled, { css } from "styled-components";

export default styled.button`
  background-color: var(--secondary-red-50);
  color: var(--primary-green-400);
  border: 1px solid var(--primary-green-400);
  border-radius: 4px;
  padding: 8px 32px;

  ${(props) =>
    props.$variant === "cancel" &&
    css`
      background-color: transparent;
      color: var(--secondary-green-900);
      border: none;
    `}

  ${(props) =>
    props.$variant === "clear" &&
    css`
      background-color: transparent;
      color: var(--secondary-green-900);
      border: none;
    `}

    ${(props) =>
    props.$variant === "delete" &&
    css`
      background-color: transparent;
      color: red;
      border: none;
    `}

     ${(props) =>
    props.$variant === "icon" &&
    css`
      background-color: transparent;
      color: ${(props) =>
        props.$color === "red" ? "red" : "var(--primary-green-400)"};
      border: none;
    `}
`;
