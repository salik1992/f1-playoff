import { SeasonControllerPlayoffBase } from './SeasonControllerPlayoffBase';

const PLAYOFF_1 = <const>{
    at: 7,
    cutoff: 8,
};
const PLAYOFF_2 = <const>{
    at: 5,
    cutoff: 6,
};
const PLAYOFF_3 = <const>{
    at: 3,
    cutoff: 4,
};

export class F1PlayOff extends SeasonControllerPlayoffBase {
    playoffStages = [PLAYOFF_1, PLAYOFF_2, PLAYOFF_3]
}
