import { GlobalStyles } from '@/styles/global';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React Avançado - Boilerplate</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <meta name="description" content="Boilerplate with next 13" />
            </Head>

            <Component {...pageProps} />
            <GlobalStyles />
        </>
    );
}
