import { Link } from 'react-router-dom';
import { SeasonPicker } from './SeasonPicker';
import { H1, H2, P, Ul, Li } from './Texts';

export const Intro = () => (
    <>
        <H1>What If F1 used Play Off style championship</H1>
        <P>
            This small webpage allows to simulate running F1 seasons spanning from 1991 to 2020
            under rules that use play off style championship similar to current NASCAR but slightly
            less "aggressive".
        </P>
        <P>The NASCAR style play off rules are also available for picking.</P>
        <H2>Motivation</H2>
        <P>
            The goal of this exercise is to discover and show what implications it might have on the
            known scenarios. There are some pros and cons to this approach. The main advantage might
            be a nearly guaranteed fight to the last race. The main disadvantage would be an unfair
            result if the driver who dominated the main part of the season would loose because of
            two unlucky races.
        </P>
        <SeasonPicker />
        <H2>Fictional F1 Play Off Rules</H2>
        <P>
            The begining of the season is same to the current F1 rules. But towards the end there
            are some changes:
        </P>
        <Ul>
            <Li>
                7 races before the end of the season the top 8 drivers are promoted to the play off
                stage. The rest of the field continues fighting for positions but cannot reach the
                play off and thus championship win anymore.
            </Li>
            <Li>
                All drivers still accumulate points the same as before the play off. Drivers in the
                top 8 have also their own group in which they start from 0.
            </Li>
            <Li>
                After 2 races (5 races to the end) 7th and 8th placed drivers in the play off group
                are eliminated and join back the rest of the field.
            </Li>
            <Li>The remaining top 6 have the points reset again and they start from 0.</Li>
            <Li>
                After 2 more races (3 races to the end) 5th and 6th placed drivers in the play off
                group are eliminated and join back the rest of the field.
            </Li>
            <Li>
                Remaining top 4 drivers get points reset once more and have a de facto 3 race long
                championship which decides the overall winner.
            </Li>
            <Li>
                The final order in the championship is decided:
                <Ul>
                    <Li>For top 4 by their order in the final stage group.</Li>
                    <Li>For the rest of the field by the overall points accumulated.</Li>
                </Ul>
            </Li>
            <Li>
                <Link to="/info/F1_PLAYOFF">See interesting facts</Link> or pick any season to run:
            </Li>
        </Ul>
        <SeasonPicker championshipStyle="F1_PLAYOFF" />
        <H2>NASCAR like Play off rules</H2>
        <P>These are not exact as done in NASCAR, but close and they are more extreme.</P>
        <Ul>
            <Li>7 races before the end top 12 drivers are promoted to the play off group.</Li>
            <Li>
                After 3 races (4 races before the end) last 4 drivers of the play off group are
                eliminated. And the points get reset.
            </Li>
            <Li>
                After another 3 races (1 race before the end) next 4 drivers are eliminated. And the
                points get reset.
            </Li>
            <Li>Top 4 have 1 race that decides it all.</Li>
            <Li>
                <Link to="/info/NASCAR_PLAYOFF">See interesting facts</Link> or pick any season to
                run:
            </Li>
        </Ul>
        <SeasonPicker championshipStyle="NASCAR_PLAYOFF" />
    </>
);
