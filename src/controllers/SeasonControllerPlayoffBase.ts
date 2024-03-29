import { filter } from 'fp-ts/ReadonlyArray';
import { SeasonControllerBase } from './SeasonControllerBase';
import { wait } from './utils';
import { RACE_LENGTH } from './constants';
import { Driver } from '../data';

export type PlayoffStage = Readonly<{
    at: number;
    cutoff: number;
}>;

const remainingSprintRaces = (races: readonly string[]) =>
    filter((race: string) => race.startsWith('SPRINT'))(races).length;

export abstract class SeasonControllerPlayoffBase extends SeasonControllerBase {
    playoffStage = -1;

    abstract playoffStages: PlayoffStage[];

    isPlayOffRunning() {
        return this.playoffStage >= 0;
    }

    async race() {
        this.advancePlayoffs();
        this.addPoints();
        await wait(RACE_LENGTH);
        if (this.destructed) return;
        this.advanceRace();
    }

    private advancePlayoffs() {
        if (this.playoffStage + 1 === this.playoffStages.length) return;
        const currentPlayofStage = this.playoffStages[this.playoffStage + 1];
        const isAtPlayoffStageStart =
            this.currentRace + currentPlayofStage.at ===
            this.season!.races.length -
                remainingSprintRaces(this.season?.races.slice(this.currentRace) ?? []);
        if (isAtPlayoffStageStart) {
            this.playoffStage += 1;
            this.advanceDriversToPlayoff(currentPlayofStage.cutoff);
        }
    }

    private advanceDriversToPlayoff(cutoffPosition: number) {
        const drivers =
            this.playoffStage === 0 ? this.getRegularDrivers() : this.getPlayOffDrivers();
        drivers.forEach((driver: Driver) => {
            driver.playOffPoints = 0;
            driver.playOffFinishesCount = {};
            driver.isInPlayOff = driver.position < cutoffPosition;
        });
    }
}
