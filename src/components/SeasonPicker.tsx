import { useState } from 'react';
import { Link } from 'react-router-dom';
import { map, reverse } from '@salik1992/fun-ts/dist/array';
import { PATHS } from '../data/paths';
import { Controllers } from '../controllers';

const SEASONS = reverse((Object.keys(PATHS)));

const TEXTS = {
    F1_CLASSIC: 'F1 Classic',
    F1_PLAYOFF: 'F1 Play Off',
    NASCAR_PLAYOFF: 'NASCAR Play Off',
} as const;

export const SeasonPicker = () => {
    const [season, setSeason] = useState(SEASONS[0])
    const [championshipStyle, setChampionshipStyle] = useState(Controllers.F1_CLASSIC);

    return (
        <div>
            <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
            >
                {map<string, JSX.Element>((season) => (
                    <option key={`season-picker-${season}`} value={season}>
                        {season}
                    </option>
                ))(SEASONS)}
            </select>
            <select
                value={season}
                onChange={(e) => setChampionshipStyle(e.target.value as unknown as Controllers)}
            >
                {map<keyof typeof TEXTS, JSX.Element>((controller) => (
                    <option key={`season-picker-${controller}`} value={controller}>
                        {TEXTS[controller]}
                    </option>
                ))(Object.keys(TEXTS) as (keyof typeof TEXTS)[])}
            </select>
            <Link to={`/${season}/${championshipStyle}`}>
                Run the season
            </Link>
        </div>
    )
};
