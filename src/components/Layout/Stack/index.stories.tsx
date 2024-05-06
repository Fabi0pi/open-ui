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
        <Stack className='gap-2 p-4 flex-row border border-black' {...args}>
            <Stack className='gap-2' >
                <Box className='w-[100px] h-[100px] border border-black'></Box>
                <Box className='w-[100px] h-[100px] border border-black'></Box>
            </Stack>
            <Stack className='gap-2' >
                <Box className='w-[100px] h-[100px] border border-black'></Box>
                <Box className='w-[100px] h-[100px] border border-black'></Box>
            </Stack>
        </Stack>
    )
}

export const Vertical: Story = {
    render: (args) => (
        <Stack className='gap-4 p-2 ' {...args}>
            <Box className='w-[100px] h-[100px] border border-black'></Box>
            <Box className='w-[100px] h-[100px] border border-black'></Box>
            <Box className='w-[100px] h-[100px] border border-black'></Box>
            <Box className='w-[100px] h-[100px] border border-black'></Box>
        </Stack>
    )
}
export const Horizontal: Story = {
    render: (args) => (
        <Stack className='gap-4 p-2 flex-row' {...args}>
            <Box className='w-[100px] h-[100px] border border-black flex justify-center items-center'>
                <Box className='w-[20px] h-[20px] bg-green-300'></Box>
            </Box>
            <Box className='w-[100px] h-[100px] border border-black flex justify-center items-center'>
                <Box className='w-[20px] h-[20px] bg-red-300 '></Box>
            </Box>
            <Box className='w-[100px] h-[100px] border border-black flex justify-center items-center'>
                <Box className='w-[20px] h-[20px] bg-blue-300'></Box>
            </Box>
            <Box className='w-[100px] h-[100px] border border-black flex justify-center items-center'>
                <Box className='w-[20px] h-[20px] bg-yellow-300'></Box>
            </Box>
        </Stack>
    )
}