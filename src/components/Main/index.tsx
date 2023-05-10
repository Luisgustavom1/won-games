import * as S from './style';

export const Main = ({
    title = 'Won games',
    description = 'React Avançado',
    primary = false,
    c = '#ffffff',
}) => {
    return (
        <S.Container>
            <h1 style={{ color: c }}>{title}</h1>
            <p>{description}</p>
            <code>{primary ? 'Primary' : 'Secondary'}</code>
        </S.Container>
    );
};
