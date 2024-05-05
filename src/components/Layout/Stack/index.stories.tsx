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
        <Stack className='gap-4 p-2 bg-slate-200' {...args}>
            <Box className='w-[100px] h-[100px] border border-black'></Box>
            <Box className='w-[100px] h-[100px] bg-blue-200'></Box>
        </Stack>
    )
}