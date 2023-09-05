import { PropsWithChildren } from 'react';
import * as S from './styles';

export interface ButtonProps {
    $size?: 'small' | 'medium' | 'large';
    $fullWidth?: boolean;
}

export const Button = ({
    children,
    $fullWidth = false,
    $size = 'medium',
}: PropsWithChildren<ButtonProps>) => {
    return (
        <S.Wrapper $size={$size} $fullWidth={$fullWidth}>
            {!!children && <span>{children}</span>}
        </S.Wrapper>
    );
};
