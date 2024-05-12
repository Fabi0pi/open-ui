import { BoxProps, StyledBox } from "./styled"

export const Box = ({ className, ...props }: BoxProps) => {
    return (
        <StyledBox {...props} className={className} />
    )
}