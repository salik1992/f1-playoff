import { forEach } from '@salik1992/fun-ts/dist/array';
import { Driver, loadSeason, PATHS, Season } from '../data';
import { SeasonController } from './interface';
import { getPlayOffDrivers, getRegularDrivers, processRegularSeasonDriver } from './utils';

export abstract class SeasonControllerBase implements SeasonController {
    season: Season | null = null;

    currentRace = 0;

    setters = {
        setRaceIndex: (_: number | ((_: number) => number)) => {},
    };

    destructed = false;

    async init(season: keyof typeof PATHS) {
        this.season = await loadSeason(season);
        this.setters.setRaceIndex?.(this.currentRace);
        this.race();
    }

    destruct() {
        this.destructed = true;
    }

    getRace() {
        return this.season!.races[this.currentRace]
    }

    getRegularDrivers() {
        return getRegularDrivers(this.season!.drivers);
    }

    getPlayOffDrivers() {
        return getPlayOffDrivers(this.season!.drivers);
    }

    isPlayOffRunning() {
        return false;
    }

    addPoints() {
        const { halfPoints, drivers, awardedPoints, fastestLapPoints } = this.season!;
        const pointsMultiplier = halfPoints[this.currentRace] ? 0.5 : 1;
        forEach<Driver>(processRegularSeasonDriver({
            awardedPoints,
            fastestLapPoints,
            pointsMultiplier,
            raceIndex: this.currentRace,
        }))(drivers)
    }

    advanceRace() {
        if (this.currentRace < this.season!.races.length - 1) {
            this.currentRace += 1;
            this.setters.setRaceIndex(this.currentRace);
            this.race();
        }
    }

    abstract race(): Promise<void>;
}
