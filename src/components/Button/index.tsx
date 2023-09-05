import React, { PropsWithChildren } from 'react';
import * as S from './styles';

export interface ButtonProps {
    $size?: 'small' | 'medium' | 'large';
    $fullWidth?: boolean;
    icon?: React.ReactNode;
    onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
    children,
    $fullWidth = false,
    $size = 'medium',
    icon,
    ...rest
}: PropsWithChildren<ButtonProps>) => {
    return (
        <S.Wrapper
            $size={$size}
            $fullWidth={$fullWidth}
            $hasIcon={!!icon}
            {...rest}
        >
            {!!icon && icon}
            {!!children && <span>{children}</span>}
        </S.Wrapper>
    );
};
