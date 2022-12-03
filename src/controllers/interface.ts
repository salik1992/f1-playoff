import { Dispatch, SetStateAction } from 'react';
import { PATHS, Driver } from '../data';

export interface SeasonController {
    destructed: boolean;
    init(season: keyof typeof PATHS): void;
    destruct(): void;
    isPlayOffRunning(): boolean;
    getRegularDrivers(): readonly Driver[];
    getPlayOffDrivers(): readonly Driver[];
    getRace(): string;
    setters: {
        setRaceIndex: Dispatch<SetStateAction<number>>;
    };
}
