import { StyledText, TextProps } from "./styled"

export const Text = <C extends React.ElementType = "span">({ variant = "span", ...props }: TextProps<C>) => {
    return (
        <StyledText as={variant} {...props} />
    );
};