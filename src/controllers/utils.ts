import { sort } from '@salik1992/fun-ts/dist/array';
import { Driver } from '../data';

export const regularDrivers = (driver: Driver) => !driver.isInPlayOff;

export const playoffDrivers = (driver: Driver) => driver.isInPlayOff;

export const orderDrivers = (drivers: Driver[]) => sort<Driver>((driverA, driverB) => {
    if (driverA.points !== driverB.points) return driverB.points - driverA.points;
    let finishesAtPlace = 1;
    while (
        finishesAtPlace <= drivers.length
        && driverA.finishesCount[finishesAtPlace] === driverB.finishesCount[finishesAtPlace]
    ) {
        finishesAtPlace += 1;
    }
    return driverB.finishesCount[finishesAtPlace] - driverA.finishesCount[finishesAtPlace];
})(drivers);

export const wait = async (time: number) => new Promise<void>((resolve) => {
    setTimeout(() => {
        resolve();
    }, time);
});
