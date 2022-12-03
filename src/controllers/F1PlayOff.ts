import { SeasonControllerPlayoffBase } from './SeasonControllerPlayoffBase';

const PLAYOFF_1 = {
    at: 7,
    cutoff: 8,
} as const;
const PLAYOFF_2 = {
    at: 5,
    cutoff: 6,
} as const;
const PLAYOFF_3 = {
    at: 3,
    cutoff: 4,
} as const;

export class F1PlayOff extends SeasonControllerPlayoffBase {
    playoffStages = [PLAYOFF_1, PLAYOFF_2, PLAYOFF_3];
}
