import { ComponentProps } from "react";
import styled from "styled-components";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

const TextVariant = {
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
};

export type TextProps = {
  upperCase?: boolean;
  variant: TextVariant;
  emphasis: boolean;
} & ComponentProps<"text">;

export const StyledText = styled.span<TextProps>`
  text-transform: ${({ upperCase }) => (upperCase ? "uppercase" : "none")};
  ${({ variant }) => TextVariant[variant]};
  color: ${({ emphasis }) => (emphasis ? "#CBD5E1" : "inherit")};
`;

/* ${variant({
  prop: 'as',

})} */
