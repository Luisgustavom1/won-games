import React from 'react';
import { GlobalStyles } from '../src/styles/global';
import theme from '../src/styles/theme';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

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
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
