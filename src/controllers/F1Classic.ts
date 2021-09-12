import { filter, forEach } from '@salik1992/fun-ts/dist/array';
import { Driver, loadSeason, PATHS, Season } from '../data';
import { RACE_LENGTH } from './constants';
import { SeasonController } from './interface';
import { playoffDrivers, regularDrivers, wait } from './utils';

export class F1Classic implements SeasonController {
    season: Season | null = null;

    currentRace = 0;

    setters = {
        setRaceIndex: (_: number | ((_: number) => number)) => {},
    };

    destructed = false;

    async init(season: keyof typeof PATHS) {
        this.season = await loadSeason(season);
        this.race();
        this.setters.setRaceIndex?.(this.currentRace);
    }

    destruct() {
        this.destructed = true;
    }

    getRace() {
        return this.season!.races[this.currentRace]
    }

    getRegularDrivers() {
        return filter(regularDrivers)(this.season!.drivers);
    }

    getPlayOffDrivers() {
        return filter(playoffDrivers)(this.season!.drivers);
    }

    isPlayOffRunning() {
        return false;
    }

    private async race() {
        this.addPoints();
        await wait(RACE_LENGTH);
        if (this.destructed) return;
        if (this.currentRace < this.season!.races.length - 1) {
            this.currentRace += 1;
            this.setters.setRaceIndex(this.currentRace);
            this.race();
        }
    }

    private addPoints() {
        const { halfPoints, drivers, awardedPoints } = this.season!;
        const pointsMultiplier = halfPoints[this.currentRace] ? 0.5 : 1;
        forEach<Driver>((driver) => {
            const result = driver.results[this.currentRace];
            driver.points += result !== null
                ? awardedPoints[result] * pointsMultiplier
                : 0;
        })(drivers)
    }
}
