import * as f from 'fp-ts/lib/function';
import * as ROA from 'fp-ts/lib/ReadonlyArray';
import * as s from 'fp-ts/lib/string';
import { Season, Driver } from './types';

const getValues = f.flow(
    s.split(','),
    ROA.filterWithIndex((index) => index > 0),
);

const getResults = f.flow(
    ROA.map((n: string) => parseInt(n, 10)),
    ROA.map((result) => (Number.isNaN(result) ? null : result)),
);

const driverLineToDriver = f.flow(
    s.split(','),
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

const parseCsvBlocks = f.flow(
    s.split('\n'),
    ROA.filter((line) => line.length > 0 && !/^,+$/.test(line)),
);

const parsePoints = f.flow(
    getValues,
    ROA.map((n: string) => parseInt(n, 10)),
    ROA.map((points) => (Number.isNaN(points) ? 0 : points)),
    ROA.reduceWithIndex({} as Record<number, number>, (index, acc, points) => ({
        ...acc,
        [index + 1]: points,
    })),
);

const parseHalfPoints = f.flow(
    getValues,
    ROA.map((text: string) => text === 'YES'),
);

export const parseSeason = f.flow(
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
            drivers: ROA.map(driverLineToDriver)(driversLines),
        } as Season),
);
