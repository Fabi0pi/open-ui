import { StyledButton, ButtonProps } from "./styled";


export const Button = ({ variant = "solid", size = "md", className, ...props }: ButtonProps) => {

    return (
        <StyledButton
            size={size}
            variant={variant}
            className={className}
            {...props}
        />
    )
}