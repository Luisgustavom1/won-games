import { css, styled } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: ${theme.spacings.small} 0;
        position: relative;
    `}
`;

export const IconWrapper = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        cursor: pointer;
        height: 2.4rem;
        width: 2.4rem;
    `}
`;

export const LogoWrapper = styled.div`
    ${media.lessThan('medium')`
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    `}
`;

export const MenuGroup = styled.div`
    ${({ theme }) => css`
        display: flex;

        & > div {
            margin-left: ${theme.spacings.xsmall};
        }
    `}
`;

export const MenuFull = styled.nav<{ $isOpen: boolean }>`
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;
