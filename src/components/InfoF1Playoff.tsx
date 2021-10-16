import { Link } from 'react-router-dom';
import { Controllers } from '../controllers';
import { SeasonPicker } from './SeasonPicker';
import { H1, P, Ul, Li } from './Texts';

export const InfoF1Playoff = () => (
    <>
        <H1>Interesting facts about Fictional F1 Playoff results</H1>
        <P>
            For full rules, refer to the <Link to="/">main page</Link>.
        </P>
        <P>
            This is, of course, only guesstimate as we cannot simulate different decisions like
            driving for win instead of saving car towards the end of the season. Or letting teammate
            win so he would stay in the team for next year, etc.
        </P>
        <P>
            This takes into account only different scoring system. Nothing more.
        </P>
        <Ul>
            <Li>
                Out of 30 seasons 15 would have the same champion.
            </Li>
            <Li>
                No champion of this era would loose champion status.
            </Li>
            <Li>
                Lewis Hamilton would won 1 less championship (6 in total) and some of them
                in different years.
            </Li>
            <Li>
                Michael Schumacher would be only 3 time world champion (1995, 2000, 2001).
            </Li>
            <Li>
                There would be a new world champion in 1992, Martin Brundle.
            </Li>
            <Li>
                In 2008 the controversial victory of Fernando Alonso in Singapore would gain him
                a 2nd championship win out of 3. (2006, 2008 and 2012).
            </Li>
            <Li>
                Jenson Button would be crowned a champion in 2011 not 2009.
            </Li>
            <Li>
                Kimi Raikkonen would be 3 time world champion (2003, 2005, 2007).
            </Li>
            <Li>
                Sebastien Vettel would be only 2 time world champion in 2009 and 2013.
            </Li>
            <Li>
                Nico Rosberg would win the championship in 2015 instead of 2016.
            </Li>
            <Li>
                There would be a new champion in 2017, Valtteri Bottas.
            </Li>
        </Ul>
        <SeasonPicker championshipStyle={Controllers.F1_PLAYOFF} />
    </>
);
