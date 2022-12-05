import { setImmediate } from 'timers';
import { Driver } from '../../data';

export const getOrderedDrivers = (drivers: readonly Driver[], playoff = false) =>
    drivers
        .map(({ position, name, points, playOffPoints }) => [
            position,
            name,
            playoff ? playOffPoints : points,
        ])
        .sort(([positionA], [positionB]) => (positionA as number) - (positionB as number));

export const nTimes = (n: number, f: () => void) => {
    let i = 0;
    while (i < n) {
        f();
        i++;
    }
};

export const nTimesAsync = async (n: number, f: () => Promise<void>) => {
    let i = 0;
    while (i < n) {
        await f();
        i++;
    }
};

export const flushPromises = () => new Promise(setImmediate);
