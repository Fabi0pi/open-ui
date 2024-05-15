import { PolymorphicComponentPropsWithRef } from "@/utils/types";
import styled from "styled-components";

type StyledTextProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

const TextVariantMap = {
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
};

export type TextProps<C extends React.ElementType = "span"> = {
  upperCase?: boolean;
  variant?: TextVariant;
  emphasis?: boolean;
  as?: C;
} & StyledTextProps<C>;

export const StyledText = styled.span<TextProps>`
  text-transform: ${({ upperCase }) => (upperCase ? "uppercase" : "none")};
  ${({ variant }) => variant && TextVariantMap[variant]};
  color: ${({ emphasis }) => (emphasis ? "#CBD5E1" : "inherit")};
`;
