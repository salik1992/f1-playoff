import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HEIGHT = 50;

const HeaderWrap = styled.div`
    width: 100%;
    height: ${HEIGHT}px;
    line-height: ${HEIGHT}px;
    margin-bottom: 20px;
    color: #ffffff;
    background-color: #222222;
    background-image: linear-gradient(to bottom, #333333, #111111);
    border-bottom: 1px solid #000000;
    box-shadow: 0 0 5px 0 #222222;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    a {
        margin: 0 20px;
        color: #ffffff;
        text-decoration: none;
    }
`;

export const Header = () => (
    <HeaderWrap>
        <Link to="/">
            What if F1 used play-off scoring system
        </Link>
    </HeaderWrap>
);
