import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

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
