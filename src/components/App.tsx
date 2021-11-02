import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
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
    max-width: 1280px;
`;

const Styles = createGlobalStyle`
    * {
        font-family: 'Helvetica', 'Roboto', 'Segoe UI', sans;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
`

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Wrap>
                <Styles />
                    <Switch>
                        <Route path="/info/F1_PLAYOFF" component={InfoF1Playoff} />
                        <Route path="/info/NASCAR_PLAYOFF" component={InfoNascarPlayoff} />
                        <Route path="/:season/:championshipStyle" component={SeasonRunner} />
                        <Route path="/" component={Intro} />
                    </Switch>
            </Wrap>
            <Footer />
        </BrowserRouter>
    );
};
