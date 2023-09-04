import { DefaultTheme, css, styled } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = Pick<ButtonProps, '$size'>;

const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xsmall};
        height: 3rem;
        padding: ${theme.spacings.xxsmall};
    `,
    medium: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xsmall};
        height: 4rem;
        padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `,
    large: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xsmall};
        height: 5rem;
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `,
};

export const Wrapper = styled.button<WrapperProps>`
    ${({ theme, $size }) => css`
        background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
        border: none;
        border-radius: ${theme.border.radius};
        color: ${theme.colors.white};

        ${!!$size && wrapperModifiers[$size](theme)}
    `}
`;
