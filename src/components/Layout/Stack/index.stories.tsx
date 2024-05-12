import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '.'
import { Box } from '../Box'


const meta: Meta<typeof Stack> = {
    title: "Layout/Stack",
    component: Stack,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'] // need for generating app page call docs
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (args) => (
        <Stack className='default-example-container' {...args}>
            <Box className='default-example-box'></Box>
            <Box className='default-example-box'></Box>
            <Box className='default-example-box'></Box>
            <Box className='default-example-box'></Box>
        </Stack>
    )
}
