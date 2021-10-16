
import { SeasonControllerPlayoffBase } from './SeasonControllerPlayoffBase';

const PLAYOFF_1 = <const>{
    at: 7,
    cutoff: 12,
};
const PLAYOFF_2 = <const>{
    at: 4,
    cutoff: 8,
};
const PLAYOFF_3 = <const>{
    at: 1,
    cutoff: 4,
};

export class NascarPlayOff extends SeasonControllerPlayoffBase {
    playoffStages = [PLAYOFF_1, PLAYOFF_2, PLAYOFF_3]
}


