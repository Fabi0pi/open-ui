import { Box } from "../Box"
import { BoxProps } from "../Box/styled"
import './style.css'

type StackProps = BoxProps

export const Stack = (({ className, ...props }: StackProps) => {
    return (
        <Box className={"container" || className} {...props} />
    )
})