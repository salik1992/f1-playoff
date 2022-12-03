import { filter } from 'fp-ts/ReadonlyArray';
import { flow } from 'fp-ts/function';
import { Driver } from '../data';

export const regularDrivers = (driver: Driver) => !driver.isInPlayOff;

export const playoffDrivers = (driver: Driver) => driver.isInPlayOff;

export const orderDrivers = (drivers: Driver[]) =>
    drivers.sort((driverA, driverB) => {
        const areBothInPlayoffs = driverA.isInPlayOff && driverB.isInPlayOff;
        const points = areBothInPlayoffs ? 'playOffPoints' : 'points';
        if (driverA[points] !== driverB[points]) return driverB[points] - driverA[points];
        const finishesCount = areBothInPlayoffs ? 'playOffFinishesCount' : 'finishesCount';
        let finishesAtPlace = 1;
        while (
            finishesAtPlace <= drivers.length &&
            driverA[finishesCount][finishesAtPlace] === driverB[finishesCount][finishesAtPlace]
        ) {
            finishesAtPlace += 1;
        }
        return driverB[finishesCount][finishesAtPlace] - driverA[finishesCount][finishesAtPlace];
    });

export const wait = async (time: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

export const positionDrivers = (drivers: readonly Driver[]) => {
    const orderedDrivers = orderDrivers([...drivers]);
    drivers.forEach((driver: Driver) => {
        driver.position = orderedDrivers.indexOf(driver);
    });
    return drivers;
};

export const getRegularDrivers = flow(filter(regularDrivers), positionDrivers);

export const getPlayOffDrivers = flow(filter(playoffDrivers), positionDrivers);

export const processRegularSeasonDriver =
    ({
        awardedPoints,
        fastestLapPoints,
        pointsMultiplier,
        raceIndex,
    }: {
        awardedPoints: Record<number, number>;
        fastestLapPoints: readonly string[];
        pointsMultiplier: 1 | 0.5;
        raceIndex: number;
    }) =>
    (driver: Driver) => {
        const result = driver.results[raceIndex];
        const pointsForRace =
            (result !== null ? (awardedPoints[result] ?? 0) * pointsMultiplier : 0) +
            (driver.name === fastestLapPoints[raceIndex] ? 1 : 0);
        driver.points += pointsForRace;
        driver.pointsFromLastRace = pointsForRace;
        if (result) {
            if (!driver.finishesCount[result]) {
                driver.finishesCount[result] = 1;
            } else {
                driver.finishesCount[result] += 1;
            }
        }
        if (driver.isInPlayOff) {
            driver.playOffPoints += pointsForRace;
            if (result) {
                if (!driver.playOffFinishesCount[result]) {
                    driver.playOffFinishesCount[result] = 1;
                } else {
                    driver.playOffFinishesCount[result] += 1;
                }
            }
        }
    };
