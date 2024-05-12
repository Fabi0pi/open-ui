import { theme } from "../../theme/index";
import { ComponentProps } from "react";
import styled from "styled-components";

type size = "sm" | "md" | "lg";

export type ButtonProps = {
  variant: "solid" | "ghost" | "outline";
  size: size;
} & ComponentProps<"button">;

const btnVariant = {
  solid: `
    color: ${theme.colors.primary.dark};;
    background-color: ${theme.colors.primary.light};
    border: 2px solid ${theme.colors.primary.dark};
    &:hover {
      background-color: transparent;
      border-color: ${theme.colors.primary.dark};
    }
    &:disabled {
      background-color: #c0c0c085;
    }
`,
  outline: `
    color: ${theme.colors.primary.dark};
    background-color: transparent;
    border: 2px solid ${theme.colors.primary.dark};
    &:hover {
        background-color:${theme.colors.primary.light}; ; 
    }
    &:disabled {
      background-color: transparent;
    }`,
  ghost: `
    border: none;
    background-color: unset;
    color: ${theme.colors.primary.dark};
    transition-property: color;
    transition-duration: 300ms;
    &:hover {
        color: ${theme.colors.primary.light};
    }
    &:disabled {
      color: red;
      cursor: not-allowed;
    }
  `,
};

const btnSizes = {
  sm: `padding: 0.5rem 1rem; font-size: 0.875rem; `,
  md: `padding: 0.75rem 1rem; font-size: 1rem; `,
  lg: `padding: 1.5rem 2.5rem; font-size: 1.25rem;`,
};

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  font-weight: 600;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 300ms;
  ${({ variant }) => btnVariant[variant]}
  ${({ size }) => btnSizes[size]}


  &:disabled {
    border-color: #cbd5e1;
    color: #cbd5e1;
    cursor: not-allowed;
  }
`;
