import { SeasonControllerPlayoffBase } from './SeasonControllerPlayoffBase';

const PLAYOFF_1 = {
    at: 7,
    cutoff: 12,
} as const;
const PLAYOFF_2 = {
    at: 4,
    cutoff: 8,
} as const;
const PLAYOFF_3 = {
    at: 1,
    cutoff: 4,
} as const;

export class NascarPlayOff extends SeasonControllerPlayoffBase {
    playoffStages = [PLAYOFF_1, PLAYOFF_2, PLAYOFF_3];
}
