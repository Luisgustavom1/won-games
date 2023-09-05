import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        $size: 'medium',
    },
    argTypes: {
        children: {
            type: 'string',
        },
    },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
    args: {
        children: 'Basic Button',
    },
};

export const WithIcon: Story = {
    args: {
        $size: 'small',
        children: 'Basic Button with icon',
        icon: <AddShoppingCart />,
    },
};
