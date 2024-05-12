import { InputProps, StyledInput } from "./styled"

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <StyledInput
            {...props}
            autoComplete="off"
            className={className}
        />
    )
}