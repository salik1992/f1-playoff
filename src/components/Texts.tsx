import styled from 'styled-components';

const LINE_HEIGHT = 1.75;

export const H1 = styled.h1`
    margin: 50px 20px 20px 20px;
    text-align: center;
`

export const H2 = styled.h2`
    margin: 40px 20px 20px 20px;
    text-align: left;
`;

export const P = styled.p`
    margin: 10px 20px 20px 20px;
    line-height: ${LINE_HEIGHT}em;
`

export const Ul = styled.ul`
    margin: auto 20px;
    line-height: ${LINE_HEIGHT}em;
`;

export const Li = styled.li`
    line-height: ${LINE_HEIGHT}em;
`;
