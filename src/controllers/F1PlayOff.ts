import { loadSeason, PATHS, Season } from '../data';
import { SeasonController } from './interface';

export class F1PlayOff implements SeasonController {
    season: Season | null = null;

    setters = {
        setRaceIndex: (_: number | ((_: number) => number)) => {},
    };

    async init(season: keyof typeof PATHS) {
        this.season = await loadSeason(season);
    }

    destruct() {

    }

    isPlayOffRunning() {
        return false;
    }

    getRegularDrivers() {
        return this.season!.drivers;
    }

    getPlayOffDrivers() {
        return this.season!.drivers;
    }

    getRace() {
        return this.season!.races[0];
    }
}
