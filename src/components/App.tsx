import { HashRouter, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';
import { InfoF1Playoff } from './InfoF1Playoff';
import { InfoNascarPlayoff } from './InfoNascarPlayoff';
import { Intro } from './Intro';
import { SeasonRunner } from './SeasonRunner';

const Wrap = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1240px;
    margin-bottom: 200px;
`;

const Styles = createGlobalStyle`
    * {
        font-family: 'Helvetica', 'Roboto', 'Segoe UI', sans;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    #root {
        margin-bottom: 70px;
    }
`;

export const App = () => {
    return (
        <HashRouter>
            <Header />
            <Wrap>
                <Styles />
                <Routes>
                    <Route path="/info/F1_PLAYOFF" element={<InfoF1Playoff />} />
                    <Route path="/info/NASCAR_PLAYOFF" element={<InfoNascarPlayoff />} />
                    <Route path="/:season/:championshipStyle" element={<SeasonRunner />} />
                    <Route path="/" element={<Intro />} />
                </Routes>
            </Wrap>
            <Footer />
        </HashRouter>
    );
};
