import { StyledText, TextProps } from "./styled"

export const Text = ({ variant = "span", emphasis, ...props }: TextProps) => {
    return (
        <StyledText variant="span" emphasis={emphasis} {...props} />
    )
}