import { GlobalStyles } from '@/styles/global';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React Avançado - Boilerplate</title>

                <meta name="description" content="Boilerplate with next 13" />
                <meta name="theme-color" content="#06092B" />

                <link rel="shortcut icon" href="assets/img/icon-512.png" />
                <link rel="apple-touch-icon" href="assets/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>

            <Component {...pageProps} />
            <GlobalStyles />
        </>
    );
}
