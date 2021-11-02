import styled from 'styled-components';

const HEIGHT = 50;

const FooterWrap = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    min-height: ${HEIGHT}px;
    line-height: ${HEIGHT}px;
    margin-top: 20px;
    color: #ffffff;
    background-color: #222222;
    background-image: linear-gradient(to bottom, #333333, #111111);
    border-top: 1px solid #000000;
    box-shadow: 0 0 5px 0 #222222;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    a {
        color: #ffffff;
        text-decoration: none;
    }
    
    div {
        margin: 0 20px;
    }
    
    div:nth-child(1) {
        text-align: left;
    }
    
    div:nth-child(2) {
        text-align: center;
    }
    
    div:nth-child(3) {
        text-align: right;
    }
`;

export const Footer = () => (
    <FooterWrap>
        <div>
            <a href="https://twitter.com/@VitSalomon">
                Created by: @VitSalomon
            </a>
        </div>
        <div>
            <a href="https://github.com/salik1992/f1-playoff">
                Code at: github.com/salik1992/f1-playoff
            </a>
        </div>
        <div>
             CC BY 4.0
        </div>
    </FooterWrap>
);

