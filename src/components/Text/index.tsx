import { StyledText, TextProps } from "./styled"

export const Text = ({ variant = "span", emphasis, children, ...props }: TextProps) => {
    return (
        <StyledText variant="span" as={variant} emphasis={emphasis} {...props} >{children}</StyledText>
    )
}