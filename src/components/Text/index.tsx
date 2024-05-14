import { StyledText, TextProps } from "./styled"

export const Text = ({ variant = "span", ...props }: TextProps) => {
    return (
        <StyledText variant="span" as={variant} {...props} />
    )
}