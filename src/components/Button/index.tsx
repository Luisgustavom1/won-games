import { PropsWithChildren } from 'react';
import * as S from './styles';

export interface ButtonProps {
    $size?: 'small' | 'medium' | 'large';
}

export const Button = ({
    children,
    $size = 'medium',
}: PropsWithChildren<ButtonProps>) => {
    return (
        <S.Wrapper $size={$size}>
            {!!children && <span>{children}</span>}
        </S.Wrapper>
    );
};
