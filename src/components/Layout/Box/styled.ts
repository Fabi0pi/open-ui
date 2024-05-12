import { ComponentProps } from "react";
import styled from "styled-components";

export type BoxProps = ComponentProps<"div">;

export const StyledBox = styled.div<BoxProps>``;
