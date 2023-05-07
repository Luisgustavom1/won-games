import StyledComponentsRegistry from '@/lib/styled-components-registry';
import { GlobalStyles } from '@/styles/global';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'React Avançado - Boilerplate',
    description: 'Boilerplate with next 13',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
            <GlobalStyles />
        </html>
    );
}
