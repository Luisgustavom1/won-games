import { ReactNode } from 'react';
import * as S from './styles';

export interface HeadingProps {
    children: ReactNode;
    color?: 'black' | 'white';
    $lineLeft?: boolean;
    $lineBottom?: boolean;
}

export const Heading = ({
    children,
    color = 'black',
    $lineLeft = false,
    $lineBottom = false,
}: HeadingProps) => {
    return (
        <S.Wrapper
            $lineLeft={$lineLeft}
            $lineBottom={$lineBottom}
            color={color}
        >
            {children}
        </S.Wrapper>
    );
};
