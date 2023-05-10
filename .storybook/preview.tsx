import React from 'react';
import { GlobalStyles } from '../src/styles/global';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <>
                <GlobalStyles />
                <Story />
            </>
        ),
    ],
};

export default preview;
