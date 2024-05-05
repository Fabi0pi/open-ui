import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered"
    },
    tags: ['autodocs'] // need for generating app page call docs
}

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
    args: {
        type: "text",
        placeholder: "Text here",
    }
}
export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Password"
    }
}
export const Date: Story = {
    args: {
        type: "date",
        placeholder: "GG/MM/AAAA"
    }
}
export const Number: Story = {
    args: {
        type: "number",
        placeholder: "Number"
    }
}