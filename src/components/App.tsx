import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Intro } from './Intro';

const Wrap = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1280px;
`;

const Styles = createGlobalStyle`
    * {
        font-family: 'Helvetica', 'Roboto', 'Segoe UI', sans;
    }
`

export const App = () => {
    return (
        <Wrap>
            <Styles />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Intro} />
                </Switch>
            </BrowserRouter>
        </Wrap>
    );
};
