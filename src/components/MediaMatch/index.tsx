import { css, styled } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type Breakpoint = keyof DefaultBreakpoints;

export interface MediaMatchProps {
    $lessThan?: Breakpoint;
    $greaterThan?: Breakpoint;
}

const mediaMathModifiers = {
    lessThan: (size: Breakpoint) => css`
        ${media.lessThan(size)`
            display: block
        `}
    `,

    greaterThan: (size: Breakpoint) => css`
        ${media.greaterThan(size)`
            display: block
        `}
    `,
};

export default styled.div<MediaMatchProps>`
    ${({ $lessThan, $greaterThan }) => css`
        display: none;

        ${!!$lessThan && mediaMathModifiers.lessThan($lessThan)}
        ${!!$greaterThan && mediaMathModifiers.greaterThan($greaterThan)}
    `}
`;
