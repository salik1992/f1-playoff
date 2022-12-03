import { Link } from 'react-router-dom';
import { Controllers } from '../controllers';
import { SeasonPicker } from './SeasonPicker';
import { H1, P, Ul, Li } from './Texts';

export const InfoNascarPlayoff = () => (
    <>
        <H1>Interesting facts about fictional F1 NASCAR-like Playoff results</H1>
        <P>
            For full rules, refer to the <Link to="/">main page</Link>.
        </P>
        <P>
            This is, of course, only guesstimate as we cannot simulate different decisions like
            driving for win instead of saving car towards the end of the season. Or letting teammate
            win so he would stay in the team for next year, etc.
        </P>
        <P>This takes into account only different scoring system. Nothing more.</P>
        <Ul>
            <Li>Out of 32 seasons 17 would have the same champion.</Li>
            <Li>Nigel Mansell nor Damon Hill would have become champions.</Li>
            <Li>Lewis Hamilton would be only 4 time champion (2014, 2016, 2018, 2019).</Li>
            <Li>Michael Schumacher would be only 3 time world champion (2000, 2001, 2002).</Li>
            <Li>
                There would be several new world champions:
                <Ul>
                    <Li>Gerhard Berger - 1992</Li>
                    <Li>Jean Alesi - 1994</Li>
                    <Li>David Coulthard - 1995</Li>
                    <Li>Eddie Irvine - 1999</Li>
                    <Li>Juan Pablo Montoya - 2004</Li>
                    <Li>Felipe Massa - 2008</Li>
                    <Li>Valtteri Bottas - 2017</Li>
                    <Li>Max Verstappen - 2020</Li>
                </Ul>
            </Li>
            <Li>Jenson Button would be crowned a champion in 2012 not 2009.</Li>
            <Li>Kimi Raikkonen would be 2 time world champion (2003, 2007).</Li>
            <Li>
                Sebastien Vettel would still be 4 time world champion, only swapping years 2009 and
                2012 with Jenson Button.
            </Li>
            <Li>Nico Rosberg would win the championship in 2015 instead of 2016.</Li>
        </Ul>
        <SeasonPicker championshipStyle={Controllers.NASCAR_PLAYOFF} />
    </>
);
