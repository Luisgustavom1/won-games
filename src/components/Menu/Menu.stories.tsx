import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '.';

const meta: Meta<typeof Menu> = {
    title: 'Menu',
    component: Menu,
    tags: ['autodocs'],
    args: {},
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Basic: Story = {};

export const Primary: Story = {
    args: {},
};
