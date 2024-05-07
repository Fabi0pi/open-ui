import { VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { textStyles } from "./style"
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@/utils/types"
import { cn } from "@/utils"

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
    C,
    VariantProps<typeof textStyles>
>

type TextComponent = <C extends React.ElementType = 'span'>(
    props: TextProps<C>
) => React.ReactElement | null

// @ts-expect-error - unespected typing errors
export const Text: TextComponent = forwardRef(
    <C extends React.ElementType = 'span'>({
        align,
        as,
        emphasis,
        italic,
        size,
        underline,
        weight,
        className,
        ...props
    }: TextProps<C>,
        ref: PolymorphicRef<C>) => {
        const Component = as || 'span'
        return (
            <Component
                ref={ref}
                className={cn(textStyles({
                    align,
                    emphasis,
                    italic,
                    size,
                    underline,
                    weight,
                    className
                }))}
                {...props} />
        )
    })