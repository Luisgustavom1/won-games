import * as S from './style';

export const Main = ({
    title = 'Won games',
    description = 'Won games',
    primary = false,
    c = '#ffffff',
}) => {
    return (
        <S.Container data-testid="main">
            <h1 style={{ color: c }}>{title}</h1>
            <p>{description}</p>
            <code>{primary ? 'Primary' : 'Secondary'}</code>
        </S.Container>
    );
};
