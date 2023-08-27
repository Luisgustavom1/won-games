import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    args: {
        children: 'Most Populars',
        color: 'black',
    },
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Basic: Story = {};

export const Primary: Story = {
    args: {},
};
