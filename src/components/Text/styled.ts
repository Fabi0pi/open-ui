import { PolymorphicComponentPropsWithRef } from "@/utils/types";
import { ReactNode } from "react";
import styled from "styled-components";

type StyledTextProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type TextComponent = <C extends React.ElementType = "span">(
  props: StyledTextProps<C>
) => React.ReactElement | null;

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
  children: any;
} & TextComponent;

export const StyledText = styled.span<TextProps>`
  text-transform: ${({ upperCase }) => (upperCase ? "uppercase" : "none")};
  ${({ variant }) => TextVariant[variant]};
  color: ${({ emphasis }) => (emphasis ? "#CBD5E1" : "inherit")};
`;
