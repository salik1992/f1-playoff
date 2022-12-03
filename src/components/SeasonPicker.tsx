import { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { map, reverse } from 'fp-ts/Array';
import { PATHS } from '../data/paths';
import { Controllers } from '../controllers';
import { Params } from './types';

const SEASONS = reverse(Object.keys(PATHS));

const TEXTS = {
    F1_CLASSIC: 'F1 Classic',
    F1_PLAYOFF: 'F1 Play Off',
    NASCAR_PLAYOFF: 'NASCAR Play Off',
} as const;

const Wrapper = styled.div`
    text-align: center;

    a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #00dd00;
        border: 1px solid #009900;
        text-decoration: none;
    }
`;

type Props = {
    season?: keyof typeof PATHS;
    championshipStyle?: Controllers;
};

export const SeasonPicker = ({
    season: propsSeason,
    championshipStyle: propsChampionshipStyle,
}: Props) => {
    const { season: initialSeason, championshipStyle: initialChampionshipStyle } =
        useParams<Params>();

    const [season, setSeason] = useState(propsSeason || initialSeason || SEASONS[0]);
    const [championshipStyle, setChampionshipStyle] = useState(
        propsChampionshipStyle || initialChampionshipStyle || 'F1_CLASSIC',
    );

    return (
        <Wrapper>
            <select
                value={season}
                onChange={(e) => setSeason(e.target.value as keyof typeof PATHS)}>
                {map<string, JSX.Element>((season) => (
                    <option key={`season-picker-${season}`} value={season}>
                        {season}
                    </option>
                ))(SEASONS)}
            </select>
            <select
                value={championshipStyle}
                onChange={(e) => setChampionshipStyle(e.target.value as Controllers)}>
                {map<Controllers, JSX.Element>((controller) => (
                    <option key={`season-picker-${controller}`} value={controller}>
                        {TEXTS[controller]}
                    </option>
                ))(Object.keys(TEXTS) as Controllers[])}
            </select>
            <br />
            <Link to={`/${season}/${championshipStyle}`}>Run the season</Link>
        </Wrapper>
    );
};
