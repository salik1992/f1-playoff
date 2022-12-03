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

const driverLineToDriver = (line: string): Driver => {
    const [name, ...results] = s.split(',')(line);
    return {
        name,
        results: getResults(results),
        finishesCount: {},
        position: 0,
        points: 0,
        pointsFromLastRace: 0,
        isInPlayOff: false,
        playOffPoints: 0,
        playOffFinishesCount: {},
    };
};

const parseCsvBlocks = f.flow(
    s.split('\n'),
    ROA.filterWithIndex((index) => index !== 5),
);

const parsePoints = f.flow(
    getValues,
    ROA.map((n: string) => parseInt(n, 10)),
    ROA.map((points) => (Number.isNaN(points) ? 0 : points)),
);

const parseHalfPoints = f.flow(
    getValues,
    ROA.map((text: string) => text === 'YES'),
);

export const parseSeason = (csv: string): Season => {
    const [yearLine, pointsLine, racesLine, halfPointsLine, fastestLapPointLine, ...driversLines] =
        parseCsvBlocks(csv);
    const year = parseInt(getValues(yearLine)[0], 10);
    const awardedPoints: Record<number, number> = {};
    const points = parsePoints(pointsLine);
    points.forEach((points, index) => {
        awardedPoints[index + 1] = points;
    });
    const races = getValues(racesLine);
    const halfPoints = parseHalfPoints(halfPointsLine);
    const fastestLapPoints = getValues(fastestLapPointLine);
    const drivers = ROA.map(driverLineToDriver)(driversLines);
    return {
        year,
        awardedPoints,
        drivers,
        races,
        halfPoints,
        fastestLapPoints,
    };
};
