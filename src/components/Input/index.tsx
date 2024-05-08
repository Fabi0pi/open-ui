import { VariantProps } from "class-variance-authority"
import { ComponentProps, forwardRef } from "react"
import { inputStyles } from "./style"
import { cn } from "@/utils"

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            autoComplete="off"
            className={cn(inputStyles(), className)}
        />
    )
})