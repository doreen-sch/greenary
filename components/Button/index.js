import styled, { css } from "styled-components";

export default styled.button`
  background-color: var(--secondary-red-50);
  color: var(--primary-green-400);
  border: 1px solid var(--primary-green-400);
  border-radius: var(--border-radius-button);
  padding: var(--padding-button);
  transition: transform 0.2s ease-in-out;
  font-size: var(--font-size-button);

  &:hover {
    transform: scale(1.1);
  }

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
    props.$variant === "deleteConfirm" &&
    css`
      background-color: transparent;
      color: red;
      border: 1px solid red;
      border-radius: 4px;
      padding: 8px 32px;
    `}

     ${(props) =>
    props.$variant === "icon" &&
    css`
      background-color: transparent;
      color: ${(props) =>
        props.$color === "red" ? "red" : "var(--secondary-green-500)"};
      border: none;
    `}
`;
