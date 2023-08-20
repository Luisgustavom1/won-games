import type { Meta, StoryObj } from '@storybook/react';
import { Main } from '.';

const meta: Meta<typeof Main> = {
    title: 'Main',
    component: Main,
    tags: ['autodocs'],
    args: {
        title: 'Won games default',
        description: 'Won games',
        primary: true,
    },
    argTypes: {
        c: {
            control: {
                type: 'color',
                presetColors: ['#000', '#fff'],
            },
            description: 'To set the color title',
            type: {
                name: 'string',
                required: true,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Main>;

export const Basic: Story = {};

export const Primary: Story = {
    args: {
        primary: true,
        title: 'Primary as true',
        description: 'Primary main',
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        title: 'Primary as false',
        description: 'Secondary main',
    },
};
