import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'] // need for generating app page call docs
}

export default meta

type Story = StoryObj<typeof meta>

export const Solid: Story = {
    args: {
        children: "Button",
        variant: "solid",
        disabled: false,
        size: 'md'
    }
}
export const Outline: Story = {
    args: {
        children: "Button",
        variant: "outline",
    }
}
export const Ghost: Story = {
    args: {
        children: "Button",
        variant: "ghost",
    }
}
export const Disabled: Story = {
    args: {
        children: "Button",
        variant: "outline",
        disabled: true
    },
}
