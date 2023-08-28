import type { Meta, StoryObj } from '@storybook/react';
import MediaMatch from '.';

const meta: Meta<typeof MediaMatch> = {
    title: 'Components/MediaMatch',
    component: MediaMatch,
    tags: ['autodocs'],
    args: {},
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MediaMatch>;

export const Desktop: Story = {
    args: {
        $greaterThan: 'medium',
        children: 'Only on desktop',
    },
};

export const Mobile: Story = {
    args: {
        $lessThan: 'medium',
        children: 'Only on mobile',
    },
};

Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile1',
    },
};
