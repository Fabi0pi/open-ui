import { ComponentProps } from "react";
import styled from "styled-components";
import { theme } from "../../theme/index";

export type InputProps = {} & ComponentProps<"input">;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 2px solid;
  border-color: ${theme.colors.primary.dark};
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition-property: border-color;
  transition-duration: 100ms;
  cursor: pointer;

  &:focus {
    outline-color: ${theme.colors.primary.light};
    border-color: ${theme.colors.primary.light};
  }

  &:hover {
    border-color: ${theme.colors.primary.light};
  }

  &::placeholder {
    color: #cbd5e1;
    font-size: 0.875rem;
  }
`;
