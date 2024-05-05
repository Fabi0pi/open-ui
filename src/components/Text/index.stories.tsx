import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
    title: "Components/Text",
    component: Text,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'] // need for generating app page call docs
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: "This is a normal text",
        size: "base",
        align: "left",
        as: 'text',
    }
}
export const Emphasized: Story = {
    args: {
        children: "This is an emphasized text",
        size: "base",
        align: "left",
        as: 'text',
        emphasis: "low"
    }
}