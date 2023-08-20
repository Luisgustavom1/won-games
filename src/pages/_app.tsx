import { GlobalStyles } from '@/styles/global';
import theme from '@/styles/theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Won Games</title>

                <meta name="description" content="won games" />
                <meta name="theme-color" content="#06092B" />

                <link rel="shortcut icon" href="assets/img/icon-512.png" />
                <link rel="apple-touch-icon" href="assets/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Component {...pageProps} />
            <GlobalStyles />
        </ThemeProvider>
    );
}
