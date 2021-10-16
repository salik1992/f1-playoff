import { SeasonControllerBase } from './SeasonControllerBase';
import { wait } from './utils';
import { RACE_LENGTH } from './constants';

export class F1Classic extends SeasonControllerBase {
    async race() {
        this.addPoints();
        await wait(RACE_LENGTH);
        if (this.destructed) return;
        this.advanceRace();
    }
}
