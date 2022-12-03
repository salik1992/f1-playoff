import { flow } from 'fp-ts/function';
import { filter, filterWithIndex, map, reduceWithIndex } from 'fp-ts/ReadonlyArray';
import { split } from 'fp-ts/string';
import { Season, Driver } from './types';

const getValues = flow(
    split(','),
    filterWithIndex((index) => index > 0),
);

const getResults = flow(
    map((n: string) => parseInt(n, 10)),
    map((result) => (Number.isNaN(result) ? null : result)),
);

const driverLineToDriver = flow(
    split(','),
    ([name, ...results]) =>
        ({
            name,
            results: getResults(results),
            finishesCount: {},
            position: 0,
            points: 0,
            pointsFromLastRace: 0,
            isInPlayOff: false,
            playOffPoints: 0,
            playOffFinishesCount: {},
        } as Driver),
);

const parseCsvBlocks = flow(
    split('\n'),
    filter((line) => line.length > 0 && !/^,+$/.test(line)),
);

const parsePoints = flow(
    getValues,
    map((n: string) => parseInt(n, 10)),
    map((points) => (Number.isNaN(points) ? 0 : points)),
    reduceWithIndex({} as Record<number, number>, (index, acc, points) => ({
        ...acc,
        [index + 1]: points,
    })),
);

const parseHalfPoints = flow(
    getValues,
    map((text: string) => text === 'YES'),
);

export const parseSeason = flow(
    parseCsvBlocks,
    ([
        yearLine,
        pointsLine,
        sprintPointsLine,
        racesLine,
        halfPointsLine,
        fastestLapPointLine,
        ...driversLines
    ]) =>
        ({
            year: parseInt(getValues(yearLine)[0]),
            awardedPoints: parsePoints(pointsLine),
            awardedSprintPoints: parsePoints(sprintPointsLine),
            races: getValues(racesLine),
            halfPoints: parseHalfPoints(halfPointsLine),
            fastestLapPoints: getValues(fastestLapPointLine),
            drivers: map(driverLineToDriver)(driversLines),
        } as Season),
);
