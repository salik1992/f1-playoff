import { PATHS } from './paths';
import { parseSeason } from './parser';

export const loadSeason = async (seasonYear: keyof typeof PATHS) => {
    const csv = await (await fetch(PATHS[seasonYear])).text();
    console.log(parseSeason(csv));
    return parseSeason(csv);
};
