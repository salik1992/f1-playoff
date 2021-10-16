import { filter, forEach, sort } from '@salik1992/fun-ts/dist/array';
import { compose } from '@salik1992/fun-ts/dist/core';
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

export const positionDrivers = (drivers: Driver[]) => {
    const orderedDrivers = orderDrivers([...drivers]);
    forEach((driver: Driver) => {
        driver.position = orderedDrivers.indexOf(driver);
    })(drivers);
    return drivers;
};

export const getRegularDrivers = compose(positionDrivers, filter(regularDrivers));

export const getPlayOffDrivers = compose(positionDrivers, filter(playoffDrivers));

export const processRegularSeasonDriver = ({
    awardedPoints, pointsMultiplier, raceIndex,
}: {
    awardedPoints: Record<number, number>,
    pointsMultiplier: 1 | 0.5,
    raceIndex: number,
}) => (driver: Driver) => {
    const result = driver.results[raceIndex];
    const pointsForRace = (
        result !== null
            ? (awardedPoints[result] ?? 0) * pointsMultiplier
            : 0
    )
    driver.points += pointsForRace;
    driver.pointsFromLastRace = pointsForRace;
    if (result) {
        driver.finishesCount[result] += 1;
    }
};
